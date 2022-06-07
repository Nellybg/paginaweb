const url = "https://api.cmfchile.cl/api-sbifv3/recursos_api/dolar?"
const params = "apikey=0fd1eb302753378e23301bc4517444eede4e4e0c&formato=json"
const http = new XMLHttpRequest();


function onRequestHandler(){
    console.log(http.readyState)
    if(http.readyState == 4 && http.status == 200) {
        console.log('otra cosa');
        var price_USD = document.getElementById('price-usd');
        var USDPrice = '<p>USD: ' + http.responseText + '</p>';
        //alert(http.responseText);
        price_USD.innerHTML += USDPrice;
    }
    else{
        console.log('aqui');
        var price_USD = $document.getElementById('price-usd');
        var USDPrice =  http.responseText;
        //alert(http.responseText);
        price_USD.innerHTML += USDPrice;
        console.log()
       // $('#price_usd').text
    }
}


http.addEventListener("load", onRequestHandler);
http.open("GET", url+params)
http.send();


