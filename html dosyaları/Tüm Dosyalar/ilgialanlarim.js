document.addEventListener("DOMContentLoaded", function () {

  // Tarihsel Yerler API'den Veri Çekme
  //yerler adında dizi oluşturdum ve Ülkemizdeki bazı antik yerleri ekledim
  var yerler = ["Ayasofya", "Topkapı_Sarayı", "Truva_Antik_Kenti"];  
  
  // yerler dizisinin her bir öğesi için bir döngü başlatılıyor.
  //yeradi sırasıyla ayasofya troya ve topkaı değerini alıyor
  for (var i = 0; i < yerler.length; i++) {
    var yerAdi = yerler[i];

    // Her yer için ayrı API çağrısı yap
    //fetch fonksiyonu, her bir tarihsel yer için Wikipedia API'sinden bilgi almak amacıyla bir HTTP isteği gönderiyor. 
    fetch("https://tr.wikipedia.org/api/rest_v1/page/summary/" + yerAdi)
      .then(function(response) {
        return response.json();
      })
      .then(function(veri) {
        // Verileri HTML içine ekledim
        var kutu = "<div class='col-md-4'>";
        kutu += "<div class='card mb-3'>";
        
        // apiden gelen bilgide resim olup olmamasına göre resim ekledim
        if (veri.thumbnail && veri.thumbnail.source) {
          kutu += "<img src='" + veri.thumbnail.source + "' class='card-img-top' alt='" + veri.title + "'>";
        }
        
        kutu += "<div class='card-body'>";
        kutu += "<h5 class='card-title'>" + veri.title + "</h5>";
        kutu += "<p>" + veri.extract + "</p>";
        kutu += "<a href='" + veri.content_urls.desktop.page + "' target='_blank' class='btn btn-primary'>Devamını Oku</a>";
        kutu += "</div></div></div>";

        // Oluşturulan HTML kutusu, id="gezi" olan elementin içine eklenir.
        document.getElementById("gezi").innerHTML += kutu;
      })
      //eğer hata varsa bu mesajı verir.
      .catch(function(error) {
        console.log('Tarihsel yer verisi alınırken hata oluştu:', error);
      });
  }

  //Beşiktaş için Türkçe Wikipedia'dan özet veriyi alıyorum
fetch("https://tr.wikipedia.org/api/rest_v1/page/summary/Beşiktaş_J.K.")
  .then(response => response.json())   // Gelen yanıtı JSON formatına çeviriyorum
  .then(data => {    // Veriyi aldıktan sonra ekrana bastırmak için kullanıyorum
     // "futbol" ID'li div'in içeriğini değiştirdim
     // <!-- Ortalamak için Bootstrap sınıfı -->
     //  <!-- ve  API'den gelen resmi ekledim -->
    document.getElementById("futbol").innerHTML = `  
      <!-- Beşiktaş kartı başlangıç -->
      <div class="row justify-content-center">
        <div class="col-lg-8 col-md-10 col-sm-12">
          <div class="card mb-4 d-flex flex-row align-items-center p-3">
           
          <img src="${data.thumbnail.source}" 
                 class="img-fluid rounded" alt="Beşiktaş Logosu" 
                 style="max-width: 150px; margin-right: 20px;">
            <div>
              <h5 class="card-title">${data.title}</h5>
              <p class="card-text">${data.extract}</p>
              <a href="${data.content_urls.desktop.page}" target="_blank" class="btn btn-dark btn-sm">Devamını Oku</a>
            </div>
          </div>
        </div>
      </div>
      
    `;
  });


// BASKETBOL KISMI (Lakers) API KARTI
// Lakers için Türkçe Wikipedia'dan özet veriyi alıyorum
fetch("https://tr.wikipedia.org/api/rest_v1/page/summary/Los_Angeles_Lakers")
  .then(response => response.json())  // Gelen yanıtı JSON formatına çeviriyorum
    // Veriyi aldıktan sonra ekrana bastırmak için kullanıyorum
  .then(data => {
    // kartı ortalamk için bootsrapt kullandım ve apiden gelen resmi eklettirdim
    document.getElementById("basketbol").innerHTML = `
      <!-- Lakers kartı başlangıç -->
      <div class="row justify-content-center">
        <div class="col-lg-8 col-md-10 col-sm-12">
          <div class="card mb-4 d-flex flex-row align-items-center p-3">
            <img src="${data.thumbnail.source}" 
                 class="img-fluid rounded" alt="Lakers Logosu" 
                 style="max-width: 150px; margin-right: 20px;">
            <div>
              <h5 class="card-title">${data.title}</h5>
              <p class="card-text">${data.extract}</p>
              <a href="${data.content_urls.desktop.page}" target="_blank" class="btn btn-warning btn-sm">Devamını Oku</a>
            </div>
          </div>
        </div>
      </div>
      
    `;
  });
});