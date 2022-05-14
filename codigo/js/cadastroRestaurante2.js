function readData(){
    let strData = localStorage.getItem('db');
    let objData = {};

    if(strData){
        objData = JSON.parse(strData);
    }else{
        objData = { 
            restaurant: [
                            {
                                'email': 'restauranteNova_praca@novapraca.com',
                                'senha': '123',
                                'name': 'Restaurante nova praça',
                                'address1': 'Rua Olinda, n: 140º',
                                'address2': '',
                                'beginHour': '8Am',
                                'endingHour': '10Pm',
                                'ioLocation': [true,false],
                                OpenDays: [false, true, true, true, true, false, false] 
                            },
                            {
                                'email': 'marioBar@novapraca.com',
                                'senha': '123',
                                'name': 'Bar do mario',
                                'address1': 'Ao lado do prédio 34',
                                'address2': '',
                                'beginHour': '8Am',
                                'endingHour': '10Pm',
                                'ioLocation': [true,false],
                                OpenDays: [false, true, true, true, true, false, false] 
                            },
                            {
                                'email': 'comidaDoce@novapraca.com',
                                'senha': '123',
                                'name': 'Restaurante comida doce',
                                'address1': 'Rua teixeira dias',
                                'address2': '',
                                'beginHour': '8Am',
                                'endingHour': '10Pm',
                                'ioLocation': [true,false],
                                OpenDays: [false, true, true, true, true, false, false] 
                            }
                        ]
        };
    }
    saveData(objData);
    return objData;
}

function saveData(data){
    localStorage.setItem('db', JSON.stringify(data));
}


function checkedLocation(){
    array = [2];
    let inLocation = document.querySelector("#ckb_Dentro").checked;
    let outLocation = document.querySelector("#ckb_Fora").checked;
    array[0] = inLocation;
    array[1] = outLocation;
    return array;
}

function checkedDays(array, weekDays){
    for(i = 0; i < weekDays.length; i++){
       array.push(weekDays[i].checked);
    }
    return array;
}

function createObject(email, password, name, address1, address2, beginHour,
                        endingHour, ioLocation, arrayOpenDays){
    let object = 
    {   
        'email': email,
        'password': password,
        'name': name,
        'address1': address1,
        'address2': address2,
        'beginHour': beginHour,
        'endingHour': endingHour,
        'ioLocation': ioLocation,
        'OpenDays': arrayOpenDays
    };
    return object;
}

function pushData(){
    let data = readData();
    
    let email = sessionStorage.getItem('email');
    let password = sessionStorage.getItem('password');
    let name = document.getElementById('inputname').value; 
    let address1 = document.getElementById('inputAddress').value;
    let address2 = document.getElementById('inputAddress2').value;
    
    let beginHour = document.getElementById('inicioFuncionamento').value;
    let endingHour = document.getElementById('FinalFuncionamento').value;
    
    /*Information about the location input radio*/     
    let ioLocation = [];
    ioLocation = checkedLocation();

    /* Open Days*/
    let weekdays = document.querySelectorAll(".weekDays");
    let arrayOpenDays = []; 
    checkedDays(arrayOpenDays, weekdays);

    // create Object and save in localStorage 
    let objectRestaurant = createObject(email, password, name, address1, address2, beginHour, endingHour, ioLocation, arrayOpenDays);
    data.restaurant.push(objectRestaurant);
    saveData(data);
    
    // reset form
    document.querySelector("#form_restaurante").reset();
}

// config buttons
document.getElementById('button').addEventListener('click', pushData);