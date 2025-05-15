document.addEventListener("DOMContentLoaded", function () {
  const butonlar = document.querySelectorAll(".filtreler button");
  const urunler = document.querySelectorAll(".urun");

  butonlar.forEach(function (buton) {
    buton.addEventListener("click", function () {
      const kategori = buton.getAttribute("data-kategori");

      urunler.forEach(function (urun) {
        if (kategori === "hepsi" || urun.dataset.kategori === kategori) {
          urun.style.display = "block";
        } else {
          urun.style.display = "none";
        }
      });
    });
  });
});
