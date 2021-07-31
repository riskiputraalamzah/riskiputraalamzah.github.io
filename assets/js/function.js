function JS(query) {
  let result = "";
  result = query ? document.querySelectorAll(query) : "Element tidak ditemukan";
  result = result.length > 1 ? result : result[0];
  return result;
}
function copyright() {
  let result = "";
  const created = 2021;
  const now = new Date().getFullYear();
  result = now > created ? created + "-" + now : now;
  document.querySelector("span.copy").textContent = result;
}
copyright();
