/* Renderer for the profile. Reads window.SITE and window.PUBS. */
(function () {
  "use strict";
  const S = window.SITE, P = window.PUBS || [];
  const $ = (q, el = document) => el.querySelector(q);
  const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const ext = (url, label, cls = "") => `<a class="${cls}" href="${esc(url)}" target="_blank" rel="noopener">${esc(label)}</a>`;

  const VIEWS = [
    { id: "home", label: "Overview" },
    { id: "research", label: "Research" },
    { id: "publications", label: "Publications" },
    { id: "experience", label: "Experience" },
    { id: "teaching", label: "Teaching & Talks" },
    { id: "recognition", label: "Recognition" },
    { id: "contact", label: "Contact" }
  ];
  const SCALE = Object.fromEntries(S.scales.map((s, i) => [s.key, { ...s, i }]));
  const TYPES = { J: "Journal articles", C: "Conference papers", B: "Books", EB: "Edited books", CH: "Book chapters", P: "Patents", A: "Articles" };
  const typeOf = id => (id.match(/^[A-Z]+/) || ["J"])[0];

  /* ---------- chrome ---------- */
  $("#nav").innerHTML = VIEWS.map((v, i) => `<a href="#${v.id}" data-v="${v.id}"><span class="n">${String(i + 1).padStart(2, "0")}</span>${v.label}</a>`).join("");
  $("#fAff").textContent = `${S.position}, ${S.affiliation}`;
  $("#fLinks").innerHTML = S.links.map(l => ext(l.url, l.label)).join("");
  const menuBtn = $("#menuBtn");
  menuBtn.addEventListener("click", () => {
    const open = document.body.classList.toggle("nav-open");
    menuBtn.setAttribute("aria-expanded", open);
  });
  window.addEventListener("scroll", () => $("#topbar").classList.toggle("scrolled", scrollY > 8), { passive: true });

  /* ---------- hero figure: five scales, one dependency web ---------- */
  function rand(seed) { return () => (seed = (seed * 16807) % 2147483647) / 2147483647; }
  function scaleFigure() {
    const r = rand(29), cx = 260, cy = 260, radii = [46, 92, 140, 188, 236];
    const nodes = [];
    radii.forEach((R, ring) => {
      const n = 3 + ring * 2, off = r() * Math.PI * 2;
      for (let k = 0; k < n; k++) {
        const a = off + (k / n) * Math.PI * 2 + (r() - .5) * .35;
        nodes.push({ ring, x: cx + R * Math.cos(a), y: cy + R * Math.sin(a) });
      }
    });
    const edges = [];
    nodes.forEach((a, i) => {
      const cands = nodes.map((b, j) => ({ j, d: Math.hypot(a.x - b.x, a.y - b.y), b }))
        .filter(o => o.j !== i && Math.abs(o.b.ring - a.ring) <= 1).sort((p, q) => p.d - q.d).slice(0, 2);
      cands.forEach(o => { if (i < o.j || !edges.find(e => e[0] === o.j && e[1] === i)) edges.push([i, o.j]); });
    });
    const rings = radii.map((R, i) => `<circle class="ring" data-ring="${i}" cx="${cx}" cy="${cy}" r="${R}"/>`).join("");
    const lines = edges.map(([i, j], k) => {
      const a = nodes[i], b = nodes[j];
      const mx = (a.x + b.x) / 2 + (cy - (a.y + b.y) / 2) * .12, my = (a.y + b.y) / 2 + ((a.x + b.x) / 2 - cx) * .12;
      return `<path class="edge${k % 5 === 0 ? " live" : ""}" style="--d:${(k * .37) % 4}s" data-ring="${Math.max(a.ring, b.ring)}" d="M${a.x.toFixed(1)},${a.y.toFixed(1)} Q${mx.toFixed(1)},${my.toFixed(1)} ${b.x.toFixed(1)},${b.y.toFixed(1)}"/>`;
    }).join("");
    const dots = nodes.map(n => `<circle class="node" data-ring="${n.ring}" cx="${n.x.toFixed(1)}" cy="${n.y.toFixed(1)}" r="${n.ring === 4 ? 4.2 : 3.4}"/>`).join("");
    const labels = S.scales.map((s, i) => `<text class="rlabel" data-ring="${i}" x="${cx + 4}" y="${cy - radii[i] - 5}">${esc(s.label)}</text>`).join("");
    return `<svg class="scales-fig" viewBox="0 0 520 520" role="img" aria-label="Five nested scales of operations, from assets to the planet, joined by dependency links">${rings}${lines}${dots}${labels}<circle class="core" cx="${cx}" cy="${cy}" r="7"/></svg>`;
  }
  function wireScales(root) {
    const fig = $(".scales-fig", root); if (!fig) return;
    root.querySelectorAll("[data-scale-i]").forEach(el => {
      const on = () => { fig.classList.add("focus"); fig.querySelectorAll(`[data-ring="${el.dataset.scaleI}"]`).forEach(x => x.classList.add("hot")); el.classList.add("hot"); };
      const off = () => { fig.classList.remove("focus"); fig.querySelectorAll(".hot").forEach(x => x.classList.remove("hot")); el.classList.remove("hot"); };
      el.addEventListener("mouseenter", on); el.addEventListener("mouseleave", off);
      el.addEventListener("focusin", on); el.addEventListener("focusout", off);
    });
  }

  const head = (num, kicker, title, lede) => `
    <header class="sec-head">
      <p class="kicker"><span>${num}</span>${esc(kicker)}</p>
      <h1>${title}</h1>${lede ? `<p class="lede">${lede}</p>` : ""}
    </header>`;

  /* ---------- views ---------- */
  const R = {};

  R.home = () => `
  <section class="hero wrap">
    <div class="hero-text reveal">
      <p class="eyebrow">${esc(S.position)} · University of Cambridge</p>
      <h1 class="name">Anandarup<br><em>Mukherjee</em></h1>
      <p class="post">${esc(S.postnominals)}</p>
      <p class="headline">${esc(S.headline)}</p>
      <p class="hero-lead">${esc(S.vision.lead)} From a single hospital laboratory to the global flow of critical minerals, I build the data, AI and platforms that reveal how processes depend on one another.</p>
      <div class="cta">
        <a class="btn solid" href="#research">Explore the research</a>
        <a class="btn" href="#publications">Publications</a>
      </div>
    </div>
    <figure class="hero-fig reveal d2">${scaleFigure()}<figcaption>One question, five scales. Hover a scale below.</figcaption></figure>
  </section>

  <section class="wrap ladder reveal d3" aria-label="Scales of inquiry">
    ${S.scales.map((s, i) => `
      <a class="rung" href="#research" data-scale-i="${i}" data-goto-scale="${s.key}">
        <span class="rung-n">0${i + 1}</span>
        <span class="rung-l">${esc(s.label)}</span>
        <span class="rung-q">${esc(s.q)}</span>
        <span class="rung-w">${esc(s.work)}</span>
      </a>`).join("")}
  </section>

  <section class="wrap band">
    <div class="vision">
      <p class="kicker"><span>◎</span>Research vision</p>
      <h2>Organisational Inter-Process Intelligence</h2>
      ${S.vision.body.map(p => `<p>${esc(p)}</p>`).join("")}
    </div>
    <aside class="roles">
      <p class="kicker"><span>◇</span>Current roles</p>
      <ul>${S.roles.map(r => `<li><b>${esc(r.title)}</b><span>${esc(r.org)}</span></li>`).join("")}</ul>
    </aside>
  </section>

  <section class="wrap metrics" aria-label="Research metrics">
    ${S.metrics.map(m => `<div class="metric"><span class="mv">${esc(m.value)}</span><span class="ml">${esc(m.label)}</span><span class="mn">${esc(m.note)}</span></div>`).join("")}
    <p class="asof">Citation figures as of ${esc(S.metricsAsOf)}; see ${ext(S.links[0].url, "Google Scholar")} for current values.</p>
  </section>

  <section class="wrap two">
    <div>
      <p class="kicker"><span>◆</span>Programmes</p>
      <div class="mini-progs">
        ${S.programmes.filter(p => ["gsco", "oipi", "hospitals", "shoestring"].includes(p.id)).map(p => `
          <a class="mini" href="#research" data-goto-prog="${p.id}">
            <span class="sc sc-${p.scale}">${esc(SCALE[p.scale].label)}</span>
            <b>${esc(p.title)}</b><span>${esc(p.tag)}</span></a>`).join("")}
      </div>
    </div>
    <div>
      <p class="kicker"><span>◷</span>Recent</p>
      <ol class="news">${S.news.map(n => `<li><time>${esc(n.date)}</time><span>${esc(n.text)}</span></li>`).join("")}</ol>
    </div>
  </section>`;

  R.research = () => `
  <section class="wrap">
    ${head("02", "Research", "Making the dependencies<br>between processes <em>visible</em>", esc(S.vision.body[0]))}
    <div class="chips" role="group" aria-label="Filter by scale">
      <button class="chip on" data-f="all">All scales</button>
      ${S.scales.map(s => `<button class="chip" data-f="${s.key}"><i class="sw sc-${s.key}"></i>${esc(s.label)}</button>`).join("")}
    </div>
    <div class="progs">
      ${S.programmes.map(p => `
      <article class="prog" id="p-${p.id}" data-scale="${p.scale}">
        <div class="prog-side">
          <span class="sc sc-${p.scale}">${esc(SCALE[p.scale].label)}</span>
          <span class="status">${esc(p.status)}</span>
        </div>
        <div class="prog-main">
          <h2>${esc(p.title)}</h2>
          <p class="tag">${esc(p.tag)}</p>
          <p>${esc(p.body)}</p>
          <dl>
            <div><dt>Role</dt><dd>${esc(p.role)}</dd></div>
            ${p.funder ? `<div><dt>Funder</dt><dd>${esc(p.funder)}</dd></div>` : ""}
            ${p.partners && p.partners.length ? `<div><dt>With</dt><dd>${p.partners.map(esc).join(" · ")}</dd></div>` : ""}
          </dl>
          ${p.link ? ext(p.link.url, p.link.label + " ↗", "more") : ""}
        </div>
      </article>`).join("")}
    </div>
  </section>`;

  R.publications = () => {
    const counts = {}; P.forEach(p => { const t = typeOf(p.id); counts[t] = (counts[t] || 0) + 1; });
    return `
  <section class="wrap">
    ${head("03", "Publications", "Writing <em>the record</em>", `${P.length} items: ${counts.J || 0} journal articles, ${counts.C || 0} conference papers, ${(counts.B || 0) + (counts.EB || 0)} books, ${counts.CH || 0} chapters and ${counts.P || 0} patent. Search, or filter by type.`)}
    <div class="pub-tools">
      <input id="pubq" type="search" placeholder="Search titles, venues, co-authors" aria-label="Search publications">
      <div class="chips" role="group" aria-label="Filter by type">
        <button class="chip on" data-t="sel">Selected</button>
        <button class="chip" data-t="all">All</button>
        ${Object.keys(TYPES).filter(t => counts[t]).map(t => `<button class="chip" data-t="${t}">${TYPES[t]} <i class="ct">${counts[t]}</i></button>`).join("")}
      </div>
    </div>
    <div id="publist" aria-live="polite"></div>
  </section>`;
  };
  function renderPubs() {
    const q = ($("#pubq").value || "").toLowerCase().trim();
    const t = ($(".pub-tools .chip.on") || {}).dataset?.t || "sel";
    let list = P.filter(p => t === "all" ? true : t === "sel" ? p.featured : typeOf(p.id) === t);
    if (q) list = P.filter(p => (t === "sel" || t === "all" || typeOf(p.id) === t) && [p.title, p.venue, p.authors, p.note].join(" ").toLowerCase().includes(q));
    list.sort((a, b) => (b.year || 0) - (a.year || 0) || (parseInt(b.id.replace(/\D/g, "")) - parseInt(a.id.replace(/\D/g, ""))));
    const groups = {}; list.forEach(p => (groups[p.year || "Other"] = groups[p.year || "Other"] || []).push(p));
    const years = Object.keys(groups).sort((a, b) => b - a);
    $("#publist").innerHTML = list.length ? years.map(y => `
      <div class="ygroup"><h3 class="year">${y}</h3><ol class="pubs">
      ${groups[y].map(p => `<li class="pub">
        <span class="pid">${esc(p.id)}</span>
        <div><p class="pt">${p.url ? ext(p.url, p.title) : esc(p.title)}</p>
        <p class="pa">${esc(p.authors).replace(/A\. Mukherjee/g, "<b>A. Mukherjee</b>")}</p>
        <p class="pv">${esc(p.venue)}${p.note ? ` <span class="badge">${esc(p.note)}</span>` : ""}</p></div>
      </li>`).join("")}</ol></div>`).join("") : `<p class="empty">No matches.</p>`;
  }

  const timeline = items => `<ol class="tl">${items.map(e => `
    <li><time>${esc(e.when)}</time><div><h3>${esc(e.title)}</h3><p class="org">${esc(e.org)}</p>${e.text ? `<p>${esc(e.text)}</p>` : ""}</div></li>`).join("")}</ol>`;

  R.experience = () => `
  <section class="wrap">
    ${head("04", "Experience", "Fourteen years across<br>academia, health and <em>industry</em>", "From underground mine safety in Kharagpur to hospital operations and global supply chains in Cambridge.")}
    <div class="cols">
      <div><h2 class="sub">Employment</h2>${timeline(S.employment)}</div>
      <div><h2 class="sub">Education</h2>${timeline(S.education)}
        <h2 class="sub">Professional standing</h2>
        <ul class="plain">
          <li><b>CEng</b> Chartered Engineer, Engineering Council (2025)</li>
          <li><b>MIET</b> Member, Institution of Engineering and Technology</li>
          <li><b>SMIEEE</b> Senior Member, IEEE (2024)</li>
          <li><b>FRSS</b> Fellow, Royal Statistical Society</li>
        </ul>
      </div>
    </div>
  </section>`;

  R.teaching = () => `
  <section class="wrap">
    ${head("05", "Teaching & Talks", "In the classroom<br>and at the <em>podium</em>", "Two textbooks, two national MOOCs, and invited talks across the UK and India.")}
    <div class="cards">${S.teaching.map(t => `<div class="card"><h3>${esc(t.title)}</h3><p>${esc(t.text)}</p></div>`).join("")}</div>
    <h2 class="sub">Keynotes and invited talks</h2>
    <ol class="talks">${S.talks.map(t => `<li><time>${esc(t.date)}</time><div><p class="tt">${esc(t.title)}</p><p class="tv">${esc(t.venue)}</p></div><span class="kind">${esc(t.kind)}</span></li>`).join("")}</ol>
  </section>`;

  R.recognition = () => `
  <section class="wrap">
    ${head("06", "Recognition & Service", "Honours, editorial work<br>and <em>standards</em>", "")}
    <div class="cols">
      <div><h2 class="sub">Service</h2>
        <ul class="service">${S.service.map(s => `<li><span>${esc(s.role)}</span><b>${esc(s.body)}</b></li>`).join("")}</ul>
      </div>
      <div><h2 class="sub">Awards and honours</h2>
        <ol class="awards">${S.awards.map(a => `<li><time>${esc(a.year)}</time><span>${esc(a.text)}</span></li>`).join("")}</ol>
      </div>
    </div>
  </section>`;

  R.contact = () => `
  <section class="wrap contact">
    ${head("07", "Contact", "Collaborate, examine,<br>or <em>say hello</em>", "I welcome conversations with operations researchers, hospitals, manufacturers, policy teams and prospective doctoral students.")}
    <div class="cols">
      <div class="card big">
        <p class="kicker"><span>✉</span>Email</p>
        <p class="mail"><a href="mailto:${esc(S.email)}">${esc(S.email)}</a></p>
        <p>${esc(S.affiliation)}<br>${esc(S.location)}</p>
      </div>
      <div><p class="kicker"><span>↗</span>Elsewhere</p>
        <ul class="linklist">${S.links.map(l => `<li>${ext(l.url, l.label)}</li>`).join("")}</ul>
      </div>
    </div>
  </section>`;

  /* ---------- router ---------- */
  let pendingScale = null, pendingProg = null;
  function route() {
    let v = (location.hash || "#home").slice(1);
    if (!R[v]) v = "home";
    const main = $("#main");
    main.innerHTML = R[v]();
    main.className = "view-" + v;
    document.querySelectorAll("#nav a").forEach(a => a.classList.toggle("on", a.dataset.v === v));
    document.body.classList.remove("nav-open"); menuBtn.setAttribute("aria-expanded", "false");
    document.title = (v === "home" ? "" : VIEWS.find(x => x.id === v).label + " · ") + "Anandarup Mukherjee · University of Cambridge";
    wire(v);
    if (pendingProg) { const el = $("#p-" + pendingProg); pendingProg = null; if (el) { el.scrollIntoView({ block: "center" }); el.classList.add("flash"); return; } }
    window.scrollTo(0, 0);
  }
  function wire(v) {
    const main = $("#main");
    main.querySelectorAll("[data-goto-scale]").forEach(a => a.addEventListener("click", () => { pendingScale = a.dataset.gotoScale; }));
    main.querySelectorAll("[data-goto-prog]").forEach(a => a.addEventListener("click", () => { pendingProg = a.dataset.gotoProg; }));
    if (v === "home") wireScales(main);
    if (v === "research") {
      const apply = f => {
        main.querySelectorAll(".chip").forEach(c => c.classList.toggle("on", c.dataset.f === f));
        main.querySelectorAll(".prog").forEach(p => p.hidden = !(f === "all" || p.dataset.scale === f));
      };
      main.querySelectorAll(".chip").forEach(c => c.addEventListener("click", () => apply(c.dataset.f)));
      if (pendingScale) { apply(pendingScale); pendingScale = null; }
    }
    if (v === "publications") {
      main.querySelectorAll(".pub-tools .chip").forEach(c => c.addEventListener("click", () => {
        main.querySelectorAll(".pub-tools .chip").forEach(x => x.classList.remove("on")); c.classList.add("on"); renderPubs();
      }));
      $("#pubq").addEventListener("input", renderPubs);
      renderPubs();
    }
  }
  window.addEventListener("hashchange", route);
  route();
})();
