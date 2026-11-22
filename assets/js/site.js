/* Renders news, publications and citations from assets/js/data.js.
   No dependencies. You should not need to edit this file. */
(function () {
  "use strict";

  var D = window.SITE_DATA || { news: [], publications: [], me: [], email: null };
  var BASE = document.documentElement.getAttribute("data-base") || "";
  var NEWS_VISIBLE = 6;
  var MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var PROJECT_PAGES = { mmwave: "projects/mmwave-testbed.html", tomosar: "projects/tomosar.html" };

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  /* relative links in data.js are written from the site root */
  function href(u) {
    if (/^(https?:|mailto:)/i.test(u)) return u;
    if (u.charAt(0) === "#") return (BASE ? BASE + "index.html" : "") + u;
    return BASE + u;
  }

  function isExternal(u) { return /^https?:/i.test(u); }

  function link(label, url) {
    return '<a href="' + esc(href(url)) + '"' + (isExternal(url) ? ' rel="noopener"' : "") + ">" + label + "</a>";
  }

  /* tiny inline markup: [label](url), **bold**, *italic* */
  function inline(s) {
    return esc(s)
      .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, function (m, label, url) { return link(label, url.replace(/&amp;/g, "&")); })
      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
      .replace(/\*([^*]+)\*/g, "<em>$1</em>");
  }

  function niceDate(d) {
    var m = /^(\d{4})-(\d{2})$/.exec(d || "");
    return m ? MONTHS[parseInt(m[2], 10) - 1] + " " + m[1] : esc(d);
  }

  /* ----- news ----- */
  function renderNews(list) {
    var items = D.news || [];
    list.innerHTML = items.map(function (n, i) {
      return "<li" + (i >= NEWS_VISIBLE ? " hidden" : "") + '><time datetime="' + esc(n.date) + '">' +
        niceDate(n.date) + "</time><div>" + inline(n.text) + "</div></li>";
    }).join("");
    if (items.length > NEWS_VISIBLE) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "more";
      btn.textContent = "Show earlier news (" + (items.length - NEWS_VISIBLE) + ")";
      btn.addEventListener("click", function () {
        var hidden = list.querySelectorAll("li[hidden]");
        for (var i = 0; i < hidden.length; i++) hidden[i].hidden = false;
        if (hidden.length) { hidden[0].setAttribute("tabindex", "-1"); hidden[0].focus({ preventScroll: true }); }
        btn.remove();
      });
      list.insertAdjacentElement("afterend", btn);
    }
  }

  /* ----- publications ----- */
  var ORDER = ["conference", "poster"];
  var pubs = [];
  ORDER.forEach(function (t) {
    (D.publications || []).forEach(function (p) { if (p.type === t) pubs.push(p); });
  });
  (D.publications || []).forEach(function (p) { if (ORDER.indexOf(p.type) < 0) pubs.push(p); });
  var NUM = {};
  pubs.forEach(function (p, i) { NUM[p.id] = i + 1; });

  function boldMe(authors) {
    var out = esc(authors);
    var names = (D.me || []).slice().sort(function (a, b) { return b.length - a.length; });
    for (var i = 0; i < names.length; i++) {
      var n = esc(names[i]);
      if (out.indexOf(n) >= 0) { return out.replace(n, "<strong>" + n + "</strong>"); }
    }
    return out;
  }

  function pubHTML(p, withProjectLink) {
    var cite = boldMe(p.authors) + ", “" + esc(p.title) + ",” " + inline(p.venue);
    if (p.doi) cite += ", doi: " + esc(p.doi);
    cite += ".";

    var tags = [];
    if (p.status === "published") tags.push('<span class="tag tag-published">Published</span>');
    if (p.status === "accepted") tags.push('<span class="tag tag-accepted">Accepted</span>');
    if (p.first) tags.push('<span class="tag tag-first">First author</span>');
    if (p.kind) tags.push('<span class="tag tag-kind">' + esc(p.kind) + "</span>");
    var meta = tags.length ? ['<span class="tags">' + tags.join(" ") + "</span>"] : [];
    if (p.doi) meta.push(link("DOI", "https://doi.org/" + p.doi));
    (p.links || []).forEach(function (l) { meta.push(link(esc(l.label), l.url)); });
    if (withProjectLink && PROJECT_PAGES[p.project]) meta.push(link("Project page", PROJECT_PAGES[p.project]));

    return '<li class="pub" id="pub-' + esc(p.id) + '"><span class="pub-n">[' + NUM[p.id] + "]</span><div>" +
      '<p class="pub-cite">' + cite + "</p>" +
      (meta.length ? '<p class="pub-meta">' + meta.join(" ") + "</p>" : "") + "</div></li>";
  }

  function renderPubs() {
    var lists = document.querySelectorAll("[data-pubs]");
    for (var i = 0; i < lists.length; i++) {
      var el = lists[i];
      var type = el.getAttribute("data-pubs");
      var project = el.getAttribute("data-project");
      var subset = pubs.filter(function (p) {
        return (type === "all" || p.type === type) && (!project || p.project === project);
      });
      el.innerHTML = subset.map(function (p) { return pubHTML(p, !project); }).join("");
    }
  }

  /* <a data-cite="iscas2026">ISCAS 2026</a>  ->  [4], linked to the entry */
  function renderCites() {
    var cites = document.querySelectorAll("[data-cite]");
    for (var i = 0; i < cites.length; i++) {
      var id = cites[i].getAttribute("data-cite");
      if (!NUM[id]) continue;
      cites[i].textContent = "[" + NUM[id] + "]";
      cites[i].setAttribute("href", href("#pub-" + id));
      var p = pubs[NUM[id] - 1];
      cites[i].setAttribute("title", p.title);
    }
  }

  function renderEmail() {
    if (!D.email) return;
    var addr = D.email.user + "@" + D.email.domain;
    var els = document.querySelectorAll("[data-email]");
    for (var i = 0; i < els.length; i++) {
      els[i].setAttribute("href", "mailto:" + addr);
      if (els[i].getAttribute("data-email") === "show") els[i].textContent = addr;
    }
  }

  function renderCounts() {
    var els = document.querySelectorAll("[data-count]");
    for (var i = 0; i < els.length; i++) {
      var t = els[i].getAttribute("data-count");
      els[i].textContent = pubs.filter(function (p) { return p.type === t; }).length;
    }
  }

  var news = document.getElementById("news-list");
  if (news) renderNews(news);
  renderPubs();
  renderCites();
  renderEmail();
  renderCounts();

  /* ----- photo and figure viewer: links to an image open it full size on the page ----- */
  function setupViewer() {
    if (typeof HTMLDialogElement !== "function") return;   // very old browser: the link just opens the image
    var dlg = document.createElement("dialog");
    dlg.className = "lightbox";
    dlg.innerHTML = '<button type="button" class="lightbox-close">Close</button>' +
      '<figure><img alt=""><figcaption></figcaption></figure>';
    document.body.appendChild(dlg);
    var img = dlg.querySelector("img");
    var cap = dlg.querySelector("figcaption");
    dlg.querySelector(".lightbox-close").addEventListener("click", function () { dlg.close(); });
    dlg.addEventListener("click", function (e) { if (e.target === dlg) dlg.close(); });
    dlg.addEventListener("close", function () { img.removeAttribute("src"); });

    document.addEventListener("click", function (e) {
      var a = e.target.closest && e.target.closest("a[href]");
      if (!a || !/\.(webp|jpe?g|png)$/i.test(a.getAttribute("href")) || !a.querySelector("img")) return;
      if (e.ctrlKey || e.metaKey || e.shiftKey || e.button !== 0) return;   // let "open in new tab" work
      e.preventDefault();
      var thumb = a.querySelector("img");
      var fig = a.closest("figure");
      var fc = fig && fig.querySelector("figcaption");
      var near = a.nextElementSibling;
      var text = a.getAttribute("data-caption") ||
        (fc ? fc.textContent : (near && near.classList.contains("cap") ? near.textContent : ""));
      img.src = a.href;
      img.alt = thumb.alt;
      cap.textContent = text.replace(/\s+/g, " ").trim();
      cap.hidden = !cap.textContent;
      dlg.showModal();
    });
  }
  setupViewer();

  /* if the page was opened with #pub-..., the target did not exist yet: jump to it now */
  if (location.hash && location.hash.indexOf("#pub-") === 0) {
    var t = document.getElementById(location.hash.slice(1));
    if (t) t.scrollIntoView();
  }
})();
