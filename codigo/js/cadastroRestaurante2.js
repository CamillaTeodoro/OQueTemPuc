const LOGIN_URL = "cadastroproduto.html";

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

function createObject(email, password, name, address1, address2, beginHour,
                        endingHour, ioLocation, arrayOpenDays){
    let object = 
    {   
        'id': generateUUID(),
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
    sessionStorage.setItem('id', object.id);
    return object;
}

function removeData(){
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('password');
}  

function pushData(){
    let data = readData();   
    let email = sessionStorage.getItem('email');
    let password = sessionStorage.getItem('password');
    removeData();
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
    saveData_1(data);
    
    // reset form
    document.querySelector("#form_restaurante").reset();
    window.location.href = LOGIN_URL;
}

// config buttons
document.getElementById('button').addEventListener('click', pushData);