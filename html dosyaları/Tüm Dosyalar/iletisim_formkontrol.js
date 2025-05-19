window.onload = function () {
  document.getElementById("kontrolBtn").addEventListener("click", function () {  // kontrolBtn id li butona tıklanınca çalısan kodlarım burada
    let adsoyad = document.getElementById("adsoyad").value.trim(); //ad soyad kısmı için değer aldım
    let email = document.getElementById("email").value.trim(); //email kısmı için değer aldım
    let telefon = document.getElementById("telefon").value.trim();//telefon kısmı için değer aldım
    let sehir = document.getElementById("sehir").value;   //Şehir kısmı için değer aldım
    let mesaj = document.getElementById("mesaj").value.trim(); // mesaj için (textarea) kısmı için değer aldım

    let errors = [];  //hata kısmı için bir errors adlı dizi oluşturdum bu dizi hataları tutacak

    if (adsoyad === "") {            //ad soyad kısmı boş mu diye kontrol eder
      errors.push("Ad Soyad boş olamaz.");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;   //regex yapısı ile emailin doğruluğu kontrol edilir
    if (!emailRegex.test(email)) {
      errors.push("Geçerli bir e-posta adresi giriniz.");
    }

    const telefonRegex = /^[0-9]{10,15}$/;   // telefon kısmının rakamlardan oluştuğunu ve 10-15 arası karakter içermesi kontrolunu yapıyor
    if (!telefonRegex.test(telefon)) {
      errors.push("Telefon sadece rakamlardan oluşmalı ve 10-15 haneli olmalı.");
    }

    if (sehir === "") {   // şehir kısmı boşluğunu kontrol eder
      errors.push("Lütfen bir şehir seçiniz.");
    }

    if (mesaj === "") {  //mesaj kısmının boşluğunu kontrol ediyor
      errors.push("Mesaj alanı boş bırakılamaz.");
    }

    // cinsiyet kısmının boş olu olmamısnı kontrol ediyor
    let cinsiyetSecildi = document.querySelector('input[name="cinsiyet"]:checked');  
    if (!cinsiyetSecildi) {
      errors.push("Lütfen bir cinsiyet seçiniz.");
    }

    // ilgi alanı kısmının boşluğunu kontrol ediyor
    let ilgiSecili = document.querySelectorAll('input[name="ilgi[]"]:checked');
    if (ilgiSecili.length === 0) {
      errors.push("En az bir ilgi alanı seçiniz.");
    }

    //eğer hata varsa errors adlı diziye ekler ve sıralar hata yoksa mesaj verdim
    if (errors.length > 0) {
      alert("Form Hataları:\n" + errors.join("\n"));
    } else {
      alert("Form JavaScript kontrolünden başarıyla geçti!");
    }
  });
};