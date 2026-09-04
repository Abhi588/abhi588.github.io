/**
 * Renders the portfolio from PORTFOLIO (data.js) and wires up interactions.
 * You normally never need to edit this file — change content in data.js.
 */
(function () {
  "use strict";

  // Small helper: escape user text to keep innerHTML safe.
  const esc = (s) =>
    String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const P = window.PORTFOLIO;
  if (!P) return;

  /* ---------- Head + hero ---------- */
  document.title = `${P.profile.name} - ${P.profile.role}`;

  const badges = P.profile.badges
    .map((b) => `<span class="badge"><i class="${esc(b.icon)}"></i> ${esc(b.label)}</span>`)
    .join("");
  const socials = P.profile.socials
    .map(
      (s) =>
        `<a href="${esc(s.url)}" aria-label="${esc(s.label)}"${
          /^https?:/.test(s.url) ? ' target="_blank" rel="noopener"' : ""
        }><i class="${esc(s.icon)}"></i></a>`
    )
    .join("");

  document.getElementById("hero").innerHTML = `
    <img src="${esc(P.profile.photo)}" alt="${esc(P.profile.name)}" class="profile-img">
    <h1>${esc(P.profile.name)}</h1>
    <p class="role">${esc(P.profile.role)}</p>
    <p class="tagline">${esc(P.profile.tagline)}</p>
    <div class="badges">${badges}</div>
    <div class="social-links">${socials}</div>`;

  /* ---------- Section renderers ---------- */
  const cardOpen = (s) =>
    `<section class="card" id="${esc(s.id)}"><h2><i class="${esc(s.icon)}"></i> ${esc(s.heading)}</h2>`;

  const renderAbout = (s) => cardOpen(s) + s.paragraphs.map((p) => `<p>${esc(p)}</p>`).join("") + "</section>";

  const renderTimeline = (s) =>
    cardOpen(s) +
    '<div class="timeline">' +
    s.items
      .map((it) => {
        const meta = [it.company ? `<span class="company">${esc(it.company)}</span>` : "", it.location ? `· ${esc(it.location)}` : ""]
          .filter(Boolean)
          .join(" ");
        const points = it.points ? `<ul>${it.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>` : "";
        const detail = it.detail ? `<p>${esc(it.detail)}</p>` : "";
        return `<div class="timeline-item">
          <span class="experience-date${it.current ? " tag-now" : ""}">${esc(it.date)}</span>
          <div class="role-head"><strong>${esc(it.title)}</strong> ${meta}</div>
          ${detail}${points}
        </div>`;
      })
      .join("") +
    "</div></section>";

  const renderSkills = (s) =>
    cardOpen(s) +
    s.groups
      .map((g) => {
        const pills = g.items
          .map((item) =>
            typeof item === "string"
              ? `<span class="skill-item">${esc(item)}</span>`
              : `<span class="skill-item"><a href="${esc(item.url)}" target="_blank" rel="noopener">${esc(item.label)}</a></span>`
          )
          .join("");
        return `<div class="skill-category">
          <p><i class="${esc(g.icon)}"></i> ${esc(g.title)}</p>
          <div class="skill-grid">${pills}</div>
        </div>`;
      })
      .join("") +
    "</section>";

  const renderProjects = (s) =>
    cardOpen(s) +
    '<div class="project-grid">' +
    s.items
      .map((it) => {
        const date = it.date ? `<span class="experience-date">${esc(it.date)}</span>` : "";
        const org = it.org ? `<div class="project-org"><i class="fas fa-building"></i> ${esc(it.org)}</div>` : "";
        const paras = it.paragraphs.map((p) => `<p>${esc(p)}</p>`).join("");
        const tags = it.tags && it.tags.length
          ? `<div class="skill-grid">${it.tags.map((t) => `<span class="skill-item">${esc(t)}</span>`).join("")}</div>`
          : "";
        const link = it.link
          ? `<a class="btn-link" href="${esc(it.link.url)}" target="_blank" rel="noopener"><i class="${esc(
              it.link.icon || "fas fa-arrow-up-right-from-square"
            )}"></i> ${esc(it.link.label)}</a>`
          : "";
        return `<div class="project-item">${date}<h3>${esc(it.title)}</h3>${org}${paras}${tags}${link}</div>`;
      })
      .join("") +
    "</div></section>";

  const renderAwards = (s) => {
    const cards = s.items
      .map(
        (it) =>
          `<li><i class="${esc(it.icon)}"></i><div><strong>${esc(it.title)}</strong>${
            it.issuer ? `<span>${esc(it.issuer)}</span>` : ""
          }</div></li>`
      )
      .join("");
    const certs = (s.certifications || [])
      .map((c) => `<span class="skill-item">${esc(c)}</span>`)
      .join("");
    const certBlock = certs
      ? `<div class="skill-category"><p><i class="fas fa-certificate"></i> Certifications</p><div class="skill-grid">${certs}</div></div>`
      : "";
    return cardOpen(s) + `<ul class="awards">${cards}</ul>` + certBlock + "</section>";
  };

  const renderHobbies = (s) =>
    cardOpen(s) +
    '<ul class="hobbies">' +
    s.items.map((it) => `<li><i class="${esc(it.icon)}"></i> ${esc(it.label)}</li>`).join("") +
    "</ul></section>";

  const renderResume = (s) =>
    cardOpen(s) +
    `<p>${esc(s.text)}</p>
     <a href="${esc(s.file)}" download class="resume-download"><i class="fas fa-download"></i> Download Resume</a></section>`;

  /* ---------- Assemble page in this order ---------- */
  const sections = [
    { data: P.about, render: renderAbout },
    { data: P.experience, render: renderTimeline },
    { data: P.education, render: renderTimeline },
    { data: P.skills, render: renderSkills },
    { data: P.projects, render: renderProjects },
    { data: P.awards, render: renderAwards },
    { data: P.hobbies, render: renderHobbies },
    { data: P.resume, render: renderResume },
  ].filter((x) => x.data); // drop any section removed from data.js

  document.getElementById("sections").innerHTML = sections.map((x) => x.render(x.data)).join("");

  // Build nav from the same section list.
  document.getElementById("navLinks").innerHTML = sections
    .map((x) => `<a href="#${esc(x.data.id)}"><i class="${esc(x.data.icon)}"></i> <span>${esc(x.data.nav)}</span></a>`)
    .join("");

  /* ---------- Interactions ---------- */
  // Theme toggle with persistence + system preference.
  (function () {
    const root = document.documentElement;
    const btn = document.getElementById("themeToggle");
    const icon = btn.querySelector("i");
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    apply(stored || (prefersDark ? "dark" : "light"));
    btn.addEventListener("click", () => {
      const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      apply(next);
      localStorage.setItem("theme", next);
    });
    function apply(theme) {
      root.setAttribute("data-theme", theme);
      icon.className = theme === "dark" ? "fas fa-sun" : "fas fa-moon";
    }
  })();

  // Reveal cards on scroll.
  const reveal = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("reveal");
          reveal.unobserve(e.target);
        }
      }),
    { threshold: 0.12 }
  );
  document.querySelectorAll(".card").forEach((c) => reveal.observe(c));

  // Highlight active nav link while scrolling.
  const navAnchors = document.querySelectorAll("#navLinks a");
  const spy = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting)
          navAnchors.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === "#" + e.target.id));
      }),
    { rootMargin: "-45% 0px -50% 0px" }
  );
  document.querySelectorAll("section[id]").forEach((s) => spy.observe(s));

  document.getElementById("year").textContent = new Date().getFullYear();
})();
