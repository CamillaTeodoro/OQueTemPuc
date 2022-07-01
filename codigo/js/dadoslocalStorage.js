function readData(){
    let strData = localStorage.getItem('db1');
    let objData = {};

    if(strData){
        objData = JSON.parse(strData);
    }else{
        objData = { 
            restaurant: [
                            {
                                'id': 1,
                                'email': 'restauranteNova_praca@novapraca.com',
                                'password': '123',
                                'name': 'Restaurante nova praça',
                                'address1': 'Rua Olinda, n: 140º',
                                'address2': '',
                                'beginHour': '8Am',
                                'endingHour': '10Pm',
                                'ioLocation': [true,false],
                                OpenDays: [false, true, true, true, true, false, false] 
                            },
                            {
                                'id': 2,
                                'email': 'marioBar@novapraca.com',
                                'password': '123',
                                'name': 'Bar do mario',
                                'address1': 'Ao lado do prédio 34',
                                'address2': '',
                                'beginHour': '8Am',
                                'endingHour': '10Pm',
                                'ioLocation': [true,false],
                                OpenDays: [false, true, true, true, true, false, false] 
                            },
                            {
                                'id': 3,
                                'email': 'comidaDoce@novapraca.com',
                                'password': '123',
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