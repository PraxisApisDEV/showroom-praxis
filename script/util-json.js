const jsonCategoriasURL = "./resource/json/categoria-productos.json";
var standProcesoDeNegocio = "";
var standEcomerceSeguridad = "";
var standOperacionesComerciales = "";



const jsonProductsURL = "./resource/json/products.json";
var productRecognizeMe = "";
var productChatbot = "";
var productCMpay = "";
var productChaski = "";
var productFirmaDigital = "";                    
var productApi = "";
var productOnboarding = "";                  
var productMarketplace = "";
    
    
    async function loadJSON(url) {
     try {
       const response = await fetch(url);
       if (!response.ok) {
         throw new Error(`HTTP error! status: ${response.status}`);
       }
       const jsonData = await response.json();
       return jsonData;
     } catch (error) {
       console.error("Failed to fetch JSON:", error);
       return null;
     }
   }

   async function getStandFromJSON(dataC,numItem) {
        return dataC.categorias[numItem];
   }
   async function getProductFromJSON(dataP,numItem) {        
        return dataP.productos[numItem];
   }