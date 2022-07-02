window.onload = function listing(){
   
   /*
      List restaurant

   */
    let data = readData();
    let strHTMl = '';
    for(i = 0; i < data.restaurant.length; i++){
        console.log(data.restaurant[i].biography)
        strHTMl += `
                <div class="col-6 bg-white p-1 border border-light border-5">
                <div class="row">
                <div
                    class="col-12 d-flex justify-content-center align-items-center">
                    <img style="max-width:150px;width:100%" src="${data.restaurant[i].picture}" alt="palavra paladar" />
                </div>
                <div class="row">
                    <div class="col-12 mt-2">
                    <h6>${data.restaurant[i].name}</h6>
                    <p>${data.restaurant[i].biography}</p>
                    <p>${data.restaurant[i].address1}</p>
                    </div>
                </div>
                </div>
            </div>`
    }   
    
   document.getElementById('listagem').innerHTML = strHTMl;
   // End Restaurant



   /*
        List product 
   */
    let products = readProduct();
    let strProduct = '';
    console.log(products);
    for( i = (products.data.length) - 1; i >= 0; i--){
        let nome = buscaNome(products.data[i].id_rest);
        let logo = buscaproduto(products.data[i].id_rest)
        strProduct += `
        <div class="card">
            <img
               src=${products.data[i].urlFoto}
               class="card-img-top"
               alt="cachorro quente"
             />
              <div class="card-body">
                 <div class="row">
                   <div class="col-4 d-flex align-items-center">
                    <img
                      src="${logo}"
                       alt="logo restaurante"
                    />
                    </div>
                   <div class="col-8">
                     <h5 class="card-title">${products.data[i].descricao}</h5>
                     <p class="card-text">${products.data[i].preco}</p>
                    <p class="card-text">${nome}</p>
                   </div>
                 </div>
               </div>
            </div> 
        </div>
             `
    }
    console.log("produtos: " + strProduct);
    document.querySelector("#listagemProduto").innerHTML = strProduct;


   // End List    
    //tela.innerHTML = strHTMl;
}   

function buscaproduto(identifica){
    let da = readData();
    let logo;
    for(y = 0; y < da.restaurant.length; y++){
        if(identifica == da.restaurant[y].id){
            logo = da.restaurant[y].picture;
        }
    }
    return logo;
}

function buscaNome(identifica){
    let res = readData();
    let nome;
    let length = res.restaurant.length; 
    for(x = 0; x < length; x++){
         if(identifica == res.restaurant[x].id){
          nome = res.restaurant[x].name;
         }
    }
    return nome;
}