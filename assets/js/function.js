function JS(query) {
  let result = "";
  result = query ? document.querySelectorAll(query) : "Element tidak ditemukan";
  result = result.length > 1 ? result : result[0];
  return result;
}
