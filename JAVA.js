// Sayfa yüklendiğinde çalışacak kod
document.addEventListener("DOMContentLoaded", function () {
  const butonlar = document.querySelectorAll(".filtreler button"); // Tüm filtre butonlarını seç
  const urunler = document.querySelectorAll(".urun"); // Tüm ürünleri seç

  // Her buton için tıklama olayı tanımla
  butonlar.forEach(function (buton) {
    buton.addEventListener("click", function () {
      const kategori = buton.getAttribute("data-kategori"); // Tıklanan butonun kategori bilgisini al

      // Her ürünü kontrol et
      urunler.forEach(function (urun) {
        // Eğer "hepsi" seçildiyse veya ürünün kategorisi butonla eşleşiyorsa göster, değilse gizle
        if (kategori === "hepsi" || urun.dataset.kategori === kategori) {
          urun.style.display = "block"; // Ürünü göster
        } else {
          urun.style.display = "none"; // Ürünü gizle
        }
      });
    });
  });
});