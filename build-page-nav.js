// Intentionally isolated to test 3D. With JavaScript disabled, no page navigation is present.
const slot = document.getElementById("page-nav-slot");
if (slot) {
  const markers = [...document.querySelectorAll('[role="doc-pagebreak"][id]')];
  const nav = document.createElement("nav");
  nav.className = "page-nav";
  nav.setAttribute("aria-label", "Pages");
  const list = document.createElement("ol");
  for (const marker of markers) {
    const item = document.createElement("li");
    const link = document.createElement("a");
    link.href = `#${marker.id}`;
    link.textContent = marker.getAttribute("aria-label") || marker.id;
    item.append(link);
    list.append(item);
  }
  nav.append(list);
  slot.append(nav);
}
