function leDados(){
    let strDados = localStorage.getItem('db');
    let objDados = {};

    if(strDados){
        objDados = JSON.parse(strDados);
    }else{
        objDados = { 
            restaurantes: [
                        {nome: "Bar do cezar", endereco1: '', endereco2: "", horarioInicial: "", horarioFinal: "", 
                        checkDentro: "", checkFora: "", checkSegunda: "", checkTerca: "", checkQuarta: "",
                        checkQuinta: "", checkSexta: "", checkSabado: "", checkDomingo: ""},
                        {nome: "Restaurante Nossa casa", telefone: '5555555555'},
                        {nome: 'Casa do sorvete', telefone: '88888888888'}]
        }
    }
    salvaDados(objDados);
    return objDados;
}
function salvaDados(dados){
    localStorage.setItem('db', JSON.stringify(dados));
}

function incluirDado(){
    let dados = leDados();
    let name = document.getElementById('inputname').value;
    let Address1 = document.getElementById('inputAddress').value;
    let Address2 = document.getElementById('inputAddress2').value;
    let inicio = document.getElementById('inicioFuncionamento').value;
    let final = document.getElementById('FinalFuncionamento').value;
    let dentro = document.querySelector("#ckb_Dentro").checked;
    let fora = document.querySelector("#ckb_Fora").checked;
    let segunda = document.querySelector("#ckb_Segunda").checked; 
    let terca  = document.querySelector("#ckb_Terca").checked; 
    let quarta = document.querySelector("#ckb_Quarta").checked;  
    let quinta = document.querySelector("#ckb_Quinta").checked;
    let sexta  = document.querySelector("#ckb_Sexta").checked;
    let sabado = document.querySelector("#ckb_Sabado").checked; 
    let domingo = document.querySelector("#ckb_Domingo").checked;
    let estabelecimento = {
            'nome' : name,
            'endereco1' : Address1, 
            'endereco2' : Address2,
            'horarioInicial' : inicio,
            'horarioFinal': final,
            'checkDentro': dentro,
            'checkFora' : fora,
            'checkSegunda' : segunda,
            'checkTerca' : terca,
            'checkQuarta' : quarta,
            'checkQuinta' : quinta,
            'checkSexta': sexta,
            'checkSabado' : sabado,
            'checkDomingo' :  domingo
    }
    dados.restaurantes.push(estabelecimento);
    salvaDados(dados);
    document.querySelector("#form_restaurante").reset();
     console.log(name , Address1 , Address2 , inicio, final, dentro , fora, segunda, terca, quarta, quinta, sexta, sabado, domingo);
}

function imprimeDados(){
    let tela = document.querySelector("#tela");
    let strHTML = '';
    let objDados = leDados();
    for(let k = 0; k < objDados.restaurantes.length; k++){
        strHTML += `<p>${objDados.restaurantes[k].nome}  ${objDados.restaurantes[k].telefone}</p>`
        // console.log(k)
    }
    tela.innerHTML = strHTML;
}
// config buttons
//document.querySelector("#carrega").addEventListener('click', imprimeDados);
document.getElementById('button').addEventListener('click', incluirDado);