// === SLAYT GÖSTERİSİ ===
let currentSlide = 0; // Şu an gösterilen slaytın indeksi
const slides = document.querySelectorAll('.slide'); // Tüm slaytları seç

// Belirtilen indeksteki slaytı göster
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active'); // Tüm slaytlardan "active" sınıfı kaldırılır
    if (i === index) {
      slide.classList.add('active'); // Yalnızca belirtilen slayta "active" eklenir
    }
  });
}

// Slaytları ileri veya geri değiştir
function changeSlide(step) {
  // Yeni slayt indeksi hesaplanır (döngüsel olarak)
  currentSlide = (currentSlide + step + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Slaytları her 5 saniyede bir otomatik değiştir
setInterval(() => {
  changeSlide(1); // Bir sonraki slayta geç
}, 5000);

// Sayfa yüklendiğinde ilk slayt gösterilsin
showSlide(currentSlide);


// === SEPET İŞLEMLERİ ===

// Sepete ürün ekleme fonksiyonu
function sepeteEkle(urunAdi) {
  const sepetListesi = document.getElementById("sepetListesi"); // Sepet UL elementini al

  const li = document.createElement("li"); // Yeni bir liste elemanı oluştur
  li.textContent = urunAdi; // Ürün adını yaz

  const silBtn = document.createElement("button"); // Silme butonu oluştur
  silBtn.textContent = "Sil"; 
  silBtn.onclick = () => li.remove(); // Tıklanınca eleman silinir

  li.appendChild(silBtn); // Sil butonunu liste elemanına ekle
  sepetListesi.appendChild(li); // Liste elemanını sepete ekle
}

// Sepeti tamamen temizleme fonksiyonu
function sepetiTemizle() {
  const sepetListesi = document.getElementById("sepetListesi"); // Sepet UL elementini al
  sepetListesi.innerHTML = ""; // Tüm içerikleri temizle
}