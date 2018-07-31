var request = superagent;
var API_URL = 'https://restcountries.eu/rest/v2/all'
var container = document.querySelector('.countries-container');


request
.get(API_URL)
.then(function (response){
  var paises = response.body;

  paises.forEach(function(pais) {
    var nombre = pais.name;
    var bandera = pais.flag;
    var capital = pais.capital;


    var div = document.createElement('div')
    div.setAttribute("class", "country-card");
    container.appendChild(div);

    var allDataInfo = '<img class="country-flag" src="'+ bandera +'" alt="flag"><h4 class="country-name">' + nombre + '</h4><p class="country-capital">' + capital + '</p>'
    div.innerHTML = allDataInfo;
  })
});
