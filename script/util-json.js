const jsonStandsLogosURL = "resource/json/stand-logos.json";
var standRecognizeMe = "";
var standChatbot = "";
var standCMpay = "";
var standChaski = "";
var standFirmaDigital = "";                    
var standApi = "";
var standOnboarding = "";                  
var standMarketplace = "";


const jsonProductsURL = "resource/json/products.json";
var productRecognizeMe = "";
var productChatbot = "";
var productCMpay = "";
var productChaski = "";
var productFirmaDigital = "";                    
var productApi = "";
var productOnboarding = "";                  
var productMarketplace = "";


    function initJSONData(){                                    
             
        // Load JSON Products
        loadJSON(jsonProductsURL).then((dataP) => {
            if (dataP) {
                // Process your JSON data here
                console.log("JSON Products:", dataP);
                console.log("JSON products.length:", dataP.products.length);
                     
                for(let j=0;j<dataP.products.length;j++) {
                    getProductFromJSON(dataP,j).then((product) => {
                        if (product) {
                            switch(j){
                                case 0:
                                    productRecognizeMe = product;
                                    break;
                                case 1:
                                    productChatbot = product;
                                    break;
                                case 2:
                                    productCMpay = product;
                                    break;
                                case 3:
                                    productChaski = product;
                                    break;
                                case 4:
                                    productFirmaDigital = product;
                                    break;
                                case 5:
                                    productApi = product;
                                    break;
                                case 6:
                                    productOnboarding = product;
                                    break;
                                case 7:
                                    productMarketplace = product;
                                    break;
                            }
                        }
                    });
                }
            }
        });
    }
    
    
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

   async function getStandFromJSON(dataS,numItem) {
        return dataS.stands[numItem];
   }
   async function getProductFromJSON(dataP,numItem) {        
        return dataP.products[numItem];
   }