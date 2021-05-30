JS(".dropdown.bahasa a.dropdown-item").forEach((language) => {
  language.addEventListener("click", function (e) {
    //   mengambil nama function sesuai id element lalu mengoper argumen berisi query target
    const pilihBahasa = e.target.getAttribute("id");
    gantiBahasa(window[pilihBahasa]());
    // console.log(JS("#about #who-am-i span.mark-title"));
  });
});

function gantiBahasa(bahasa) {
  //   for (let index = 0; index < bahasa.length; index++) {
  //     if (getTarget()[index].nama == bahasa[index].nama) {
  //       JS(getTarget()[index].query).innerHTML = bahasa[index].value;
  //     }
  //   }
  getTarget().forEach((el) => {
    bahasa.forEach((bhs) => {
      if (el.nama == bhs.nama) {
        JS(el.query).innerHTML = bhs.value;
      }
    });
  });
}

function getTarget() {
  return [
    {
      nama: "logo",
      query: ".my-nav .logo",
    },
    {
      nama: "link-pertama",
      query: ".link-menu[href='#introducing']",
    },
    {
      nama: "link-kedua",
      query: ".link-menu[href='#about']",
    },
    {
      nama: "link-ketiga",
      query: ".link-menu[href='#skill']",
    },
    {
      nama: "link-keempat",
      query: ".link-menu[href='#experience']",
    },
    {
      nama: "link-kelima",
      query: ".link-menu[href='#contact']",
    },
    {
      nama: "label-bahasa",
      query: ".dropdown.bahasa button",
    },
    {
      nama: "sapaan",
      query: ".sapaan",
    },
    {
      nama: "kamu-siapa",
      query: ".text-introducing .sapaan2",
    },
    {
      nama: "cv",
      query: ".container-cv span",
    },
    {
      nama: "judul-about",
      query: "#about .line-mark-title",
    },
    {
      nama: "sub-judul-about-1",
      query: "#about .owl-item:not(.cloned) #who-am-i span.mark-title",
    },
  ];
}

function id() {
  return [
    {
      nama: "logo",
      value: "Portofolio Saya",
    },
    {
      nama: "link-pertama",
      value: "Pengenalan",
    },
    {
      nama: "link-kedua",
      value: "Tentang",
    },
    {
      nama: "link-ketiga",
      value: "Kemampuan",
    },
    {
      nama: "link-keempat",
      value: "Pengalaman",
    },
    {
      nama: "link-kelima",
      value: "Kontak",
    },
    {
      nama: "label-bahasa",
      value: "Bahasa",
    },
    {
      nama: "sapaan",
      value: "Halo, nama saya",
    },
    {
      nama: "kamu-siapa",
      value: "Saya seorang",
    },
    {
      nama: "cv",
      value: "Dapatkan CV",
    },
    {
      nama: "judul-about",
      value: "Tentang Saya",
    },
    {
      nama: "sub-judul-about-1",
      value: "Siapa Saya",
    },
  ];
}
function en() {
  return [
    {
      nama: "logo",
      value: "My Portofolio",
    },
    {
      nama: "link-pertama",
      value: "Introduction",
    },
    {
      nama: "link-kedua",
      value: "About",
    },
    {
      nama: "link-ketiga",
      value: "Skill",
    },
    {
      nama: "link-keempat",
      value: "Experience",
    },
    {
      nama: "link-kelima",
      value: "Contact",
    },
    {
      nama: "label-bahasa",
      value: "Language",
    },
    {
      nama: "sapaan",
      value: "Hello, my name is",
    },

    {
      nama: "kamu-siapa",
      value: "I'm a",
    },
    {
      nama: "cv",
      value: "Get Cv",
    },
    {
      nama: "judul-about",
      value: "About Me",
    },
    {
      nama: "sub-judul-about-1",
      value: "Who Am I",
    },
  ];
}
