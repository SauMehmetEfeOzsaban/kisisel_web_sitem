function formKontrol() { 
  // adsoyad kısmı için değer aldım ve boşlukları kırptım
  let adsoyad = document.getElementById("adsoyad").value.trim();
  // email kısmı için değer aldım ve boşlukları kırptım
  let email = document.getElementById("email").value.trim();
  // telefon kısmı için değer aldım ve boşlukları kırptım
  let telefon = document.getElementById("telefon").value.trim();
  // şehir kısmı için değer aldım
  let sehir = document.getElementById("sehir").value;
  // mesaj (textarea) kısmı için değer aldım ve boşlukları kırptım
  let mesaj = document.getElementById("mesaj").value.trim();

  let errors = [];  // hata mesajlarını tutmak için boş dizi oluşturdum

  // ad soyad kısmı boş mu diye kontrol eder
  if (adsoyad === "") {
    errors.push("Ad Soyad boş olamaz.");
  }

  // regex yapısı ile e-posta adresinin doğruluğu kontrol edilir
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    errors.push("Geçerli bir e-posta adresi giriniz.");
  }

  // telefon kısmının rakamlardan oluştuğunu ve 10-15 arası karakter içerdiğini kontrol eder
  const telefonRegex = /^\+?\d{10,15}$/;
  if (!telefonRegex.test(telefon)) {
    errors.push("Telefon sadece rakamlardan oluşmalı ve 10-15 haneli olmalı.");
  }

  // şehir kısmı boş mu diye kontrol eder
  if (sehir === "") {
    errors.push("Lütfen bir şehir seçiniz.");
  }

  // mesaj alanı boş mu diye kontrol eder
  if (mesaj === "") {
    errors.push("Mesaj alanı boş bırakılamaz.");
  }

  // cinsiyet radio buttonlarından birinin seçilmiş olup olmadığını kontrol eder
  let cinsiyetSecildi = document.querySelector('input[name="cinsiyet"]:checked');
  if (!cinsiyetSecildi) {
    errors.push("Lütfen bir cinsiyet seçiniz.");
  }

  // ilgi alanı checkboxlarından en az birinin seçilmiş olup olmadığını kontrol eder
  let ilgiSecili = document.querySelectorAll('input[name="ilgi[]"]:checked');
  if (ilgiSecili.length === 0) {
    errors.push("En az bir ilgi alanı seçiniz.");
  }

  return errors;  // tüm hata mesajlarını döndürür
}

window.onload = function () {
  // kontrolBtn id'li butona tıklanınca formKontrol fonksiyonunu çağır ve sonucu göster
  document.getElementById("kontrolBtn").addEventListener("click", function () {
    let errors = formKontrol();
    if (errors.length > 0) {
      alert("Form Hataları:\n" + errors.join("\n"));  // hata varsa alert ile listeler
    } else {
      alert("Form JavaScript kontrolünden başarıyla geçti!");  // hata yoksa başarı mesajı
    }
  });

  // gonderbtn id'li butona tıklanınca formKontrol fonksiyonunu çağır ve sonucu kontrol et
  document.getElementById("gonderbtn").addEventListener("click", function (e) {
    let errors = formKontrol();
    if (errors.length > 0) {
      e.preventDefault();  // hata varsa formun submit olmasını engeller
      alert("Form Hataları:\n" + errors.join("\n"));  // hataları alert ile gösterir
    } else {
      alert("Form JavaScript kontrolünden başarıyla geçti!");  // hata yoksa başarılı mesaj
      // form action ile php sayfasına gider, çünkü e.preventDefault() yok
    }
  });
}