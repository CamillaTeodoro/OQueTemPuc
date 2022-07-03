function readData(){
    let strData = localStorage.getItem('db1');
    let objData = {};

    if(strData){
        objData = JSON.parse(strData);
    }else{
        objData = { 
            restaurant: [
                            {
                                'picture': 'https://cdn.pixabay.com/photo/2019/07/10/18/59/logo-4329288_960_720.png',
                                'id': 1,
                                'email': 'restauranteNova_praca@novapraca.com',
                                'password': '123',
                                'name': 'Restaurante nova praça',
                                'address1': 'Rua Olinda, n: 140º',
                                'address2': '',
                                'beginHour': '8Am',
                                'endingHour': '10Pm',
                                'ioLocation': [true,false],
                                'biography': 'Almoço sem balança, saladas, carnes, salgados.',
                                OpenDays: [false, true, true, true, true, false, false] 
                            },
                            {
                                'picture': 'https://cdn.pixabay.com/photo/2019/06/27/21/14/logo-4303138_960_720.png',
                                'id': 2,
                                'email': 'marioBar@novapraca.com',
                                'password': '123',
                                'name': 'Bar do mario',
                                'address1': 'Ao lado do prédio 34',
                                'address2': '',
                                'beginHour': '8Am',
                                'endingHour': '10Pm',
                                'ioLocation': [true,false],
                                'biography': 'Açaí, sorvetes, vitaminas e sucos.',
                                OpenDays: [false, true, true, true, true, false, false] 
                            },
                            {
                                'picture': 'https://cdn.pixabay.com/photo/2017/08/12/11/28/cocktail-2634115_960_720.jpg',
                                'id': 3,
                                'email': 'comidaDoce@novapraca.com',
                                'password': '123',
                                'name': 'Restaurante comida doce',
                                'address1': 'Rua teixeira dias',
                                'address2': '',
                                'beginHour': '8Am',
                                'endingHour': '10Pm',
                                'ioLocation': [true,false],
                                'biography': 'Sanduiches naturais, sucos e salgados.',
                                OpenDays: [false, true, true, true, true, false, false] 
                            }
                        ]
        };
        saveData_1(objData);
    }
    return objData;
}

function saveData_1(data){
    localStorage.setItem('db1', JSON.stringify(data));
}

function saveData_2(data){
    localStorage.setItem('db2', JSON.stringify(data));
}

function readPeople(){
    let strPeople = localStorage.getItem('db2');
    let object = {};
    if(strPeople){
        object = JSON.parse(strPeople)
    }else{
       object = {
            people: [
                    {'id': generateUUID(), 'email': 'Lucas_martins@.com','password': '123'},
                    {'id': generateUUID(), 'email': 'Pedro_oliveira@.com','password': '132'},
                    {'id': generateUUID(), 'email': 'teste123','password': '123'}

                ]
       };
       saveData_2(object);
    }
    return object;
}

function readProduct ( ){
    let data = localStorage.getItem('pi_produto');
    let object = {};
    if(data){
        object = JSON.parse(data);
        return object;
    }
}

function saveData_3(data) {
    localStorage.setItem("pi_produto", JSON.stringify(data));
}

function readProdutos(){
    let str = localStorage.getItem('pi_produto');
    let objData = {};

    if(str){
        objData = JSON.parse(str);
    }else{
    let produtos_inicial = {
        data: [
          {
            id: 1,
            nome: "Pão de Queijo",
            id_rest: 1,
            preco: 2.59,
            descricao: "Pão de Queijo comum, 100g",
            urlFoto:
              "https://images.unsplash.com/photo-1598142982901-df6cec10ae35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cCVDMyVBM28lMjBkZSUyMHF1ZWlqb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
          },
          {
            id: 2,
            nome: "Coxinha",
            id_rest: 2,
            preco: 4.59,
            descricao: "Coxinha de frango, 100g",
            urlFoto:
              "https://media.istockphoto.com/photos/drumsticks-picture-id926773634?s=612x612",
          },
          {
            id: 3,
            nome: "Pastel Assado",
            id_rest: 1,
            preco: 4.69,
            descricao: "Pastel assado de carne, 100g",
            urlFoto:
              "https://images.pexels.com/photos/12267750/pexels-photo-12267750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          },
          {
            id: 4,
            nome: "Cachorro Quente",
            id_rest: 1,
            preco: 8.99,
            descricao: "Cachorro quente completo. Gratis um copo de refrigerante.",
            urlFoto:
              "https://images.unsplash.com/photo-1599599810694-b5b37304c041?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
          },
          {
            id: 5,
            nome: "Misto Quente",
            id_rest: 3,
            preco: 5.59,
            descricao: "Misto Quente de queijo com presunto",
            urlFoto:
              "https://images.unsplash.com/photo-1581574303858-f00f95088f7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          },
          {
            id: 6,
            nome: "Macarrão a bolonhesa",
            id_rest: 2,
            preco: 10.99,
            descricao: "Macarrão com molho de carne.",
            urlFoto:
              "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
          },
          {
            id: 7,
            nome: "Tortinha de frango",
            id_rest: 2,
            preco: 5.99,
            descricao: "Tortinha de frango com catupiry",
            urlFoto:
              "https://images.unsplash.com/photo-1612477491914-a2f46ef8586e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1191&q=80",
          },
          {
            id: 8,
            nome: "Prato do dia",
            id_rest: 3,
            preco: 17.99,
            descricao: "DE segunda a sexta. Cada dia um prato diferente.",
            urlFoto:
              "https://images.unsplash.com/photo-1585975754487-25489eabf36a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          }
        ]
      };
      saveData_3(produtos_inicial);
    }   
}

function generateUUID() { // Public Domain/MIT
    var d = new Date().getTime();//Timestamp
    var d2 = (performance && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16;//random number between 0 and 16
        if(d > 0){//Use timestamp until depleted
            r = (d + r)%16 | 0;
            d = Math.floor(d/16);
        } else {//Use microseconds since page-load if supported
            r = (d2 + r)%16 | 0;
            d2 = Math.floor(d2/16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}