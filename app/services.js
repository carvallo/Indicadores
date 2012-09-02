App.Services = (function(lng, app, undefined) {
var url = 'http://api.sbif.cl/api-sbif/recursos/uf';
var data = {
    apikey: '7ffa755829aa5027614aab57516a7e413805a01e',
    formato: 'json' 
    };
var getUF=lng.Service.get(url, data, function(response) {
var valor=response.UFs[0].Valor;

lng.dom('#valor').text(valor);


});


   return {
	getUF: getUF
    }

})(LUNGO, App);


