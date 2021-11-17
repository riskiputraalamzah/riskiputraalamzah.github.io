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
function linkTargetBlank(param) {
  switch (param) {
    case "cv":
      window.open(
        "https://www.cakeresume.com/s--hJk_CpuzkZok1zlWusZ35g--/riski-alamzah",
        "_blank"
      );
      break;
    case "hireMe":
      window.open(
        "https://api.whatsapp.com/send?phone=6282233361877&text=Hai,%20I%20Want%20to%20collaborate%20with%20you!!!",
        "_blank"
      );
      break;
    default:
      window.location.reload();
  }
}
