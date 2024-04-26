//Definir el arreglo de palabras
const palabras=["DUELO","ESCARAPELA","CALIFORNIA","TURNO","ESCOGER","CALCULADORA","FAMOSO","IGUAL","CEBOLLA","CERCADO","MANOS","TIGRE","TABERNA"]

const btn = document.querySelector('#jugar');
const imagen = document.querySelector('#imagen');
const imagen2 = document.querySelector('#escenario')

//Escuchar Eventos
btn.addEventListener("click",comenzar);

// btn.addEventListener("click",hola());

//Cuando tenemos un funcion con los parentesis =>   hola()
//Al momento de cargar la información, lee la funcion obligatoriamente
// Pero si solo se llama a la funcion sin el uso de los paretecis   =>  hola
// Al ejectuar el codigo no lo llmará hasta que el usuario haga el llamado

function id(str) {
    return document.getElementById(str);
}
//VARAIBLES GLOBALES
let palabraElegida;
let cant_error=0;
let cant_aciertos=0;

function limpiar() {
    imagen2.width=imagen2.width;
}

function comenzar(){
    // imagen.src='src/img0.png'; //COMENTADO

    limpiar();
    ahorcado(0);
    
    //Al momento de iniciar el juego, el boton quede deshabilitado
    btn.disabled=true;
    //Inicializamos las variables globales en CERO
    cant_error=0;
    cant_aciertos=0;

    //Identificamos la cantidad de palabras en el array
    const Npalabras = palabras.length;

    const valorInferior = 0;
    const amplitud = Npalabras - valorInferior;
    //Muestra un datos entre el CERO y el UNO al usar el => Math.random
    //FLOOR redondea al inferior
    const Naleatorio = Math.floor(Math.random() * amplitud) + valorInferior;
    
    //Palabra elegida
    palabraElegida = palabras[Naleatorio];

    //Cantidad de letras que tiene la PALABRA ELEGIDA
    var CantPalabraElegida = palabraElegida.length;

    //
    const parrafo = id('word_to_find');
    parrafo.innerHTML='';

    for (let i = 0; i < btn_letras.length; i++) {
        btn_letras[i].disabled=false;   
    }
    document.querySelector('#resultado').innerHTML="";

    for (let i = 0; i < CantPalabraElegida; i++) {
        //Crea elemenot SPAN
        const span = document.createElement('span');
        //Agrega el elemnto span la cantidad de letras que tiene la palabra
        parrafo.appendChild(span);
    }
    console.log(palabraElegida);
    // salida = console.log(palabraElegida+" tiene "+CantPalabraElegida+" letras")
    // return salida;
}

const btn_letras = document.querySelectorAll('#letras button')


for (let i = 0; i < btn_letras.length; i++) {
    btn_letras[i].addEventListener('click',clickTeclas);
}


function clickTeclas(event) {
    //Regresa un Array
    const spans = document.querySelectorAll('#word_to_find span');

    const button = event.target; //Que botton fue llamada
    button.disabled=true;
    
    const letra = button.innerHTML; //Le  tiene el botton llamado
    console.log("elegida "+palabraElegida+" : "+letra);

    let acerto = false;

    for (let i = 0; i < palabraElegida.length; i++) {
        if (letra==palabraElegida[i]) {
            // la variable i corresponde a la misma posicion de la letra
            spans[i].innerHTML=letra;
            cant_aciertos++;
            acerto=true;
        }
    }

    if(acerto==false){
            cant_error++;
            ahorcado(cant_error);//NUEVA LINEA
            // const el_nombre_imagen = `src/img${cant_error}.png`;     //COMENTADO
            // const imagen = id('imagen');
            // imagen.src =el_nombre_imagen;        //COMENTADO

    }

    if(cant_error==7){
        id('resultado').innerHTML="FIN DEL JUEGO: La palabra era: "+palabraElegida;
        id('resultado').style.backgroundColor="cyan";
        id('resultado').style.padding="5px";
        id('resultado').style.color="red";
        game_over();
    }else if(cant_aciertos==palabraElegida.length){
        id('resultado').innerHTML="¡GANASTE FELICIDADES!";
        id('resultado').style.color="blue";
        id('resultado').style.padding="5px";
        id('resultado').style.backgroundColor="yellow";
        // id('resultado').style.;
        game_over();
    }
    
    console.log("La letra "+letra+" en la palabra : "+palabraElegida+" ¿Existe? "+ acerto);
    
}


function game_over(){
    for (let i = 0; i < btn_letras.length; i++) {
        btn_letras[i].disabled=true;   
    }
    btn.disabled=false;
    ahorcado(0);

}

game_over();


function ahorcado(intento){
        
    let escena = document.querySelector('#escenario');
    // escena.style.background = "";
    
    let contexto = escena.getContext("2d");
    //Mencionamos que vamos a pintar
    contexto.beginPath();
    //Nos ubicamos en que PUNTO INICIAL que pretendemos empezar a pintar
    contexto.moveTo(100,600); // contexto.moveTo(EJE X,EJE Y);
    //Cual sera el DIBUJO
    contexto.lineTo(300,600);
    // contexto.lineTo(300,100);
    //Definimos el ANCHO de la linea por dibujar
    contexto.lineWidth=20;
    //Definimos el COLOR de la linea por dibujar
    contexto.strokeStyle="yellow";
    //Finalmente mandamos a que se DIBUJE
    contexto.stroke();
    
    // =========================== LINEA
    
    contexto.beginPath();
    contexto.moveTo(200,600);
    contexto.lineTo(200,100);
    contexto.stroke();
    
    // =========================== LINEA
    contexto.beginPath();
    contexto.moveTo(190,100);
    contexto.lineTo(350,100);
    contexto.stroke();
    
    // =========================== LINEA
    contexto.beginPath();
    contexto.moveTo(350,90);
    contexto.lineTo(350,170);
    contexto.stroke();
    
    // ================================== 
    // =========INICIAR A MORIR========== 
    // ==================================
    switch (intento) {
        case 1:
        // =========================== CURVA
        // =========================== CABEZA
        // contexto.arc(Eje X,Eje Y, RADIO,);
        contexto.beginPath();
        contexto.strokeStyle="black";
        contexto.arc(350,190,31,0,Math.PI*2);
        contexto.stroke();
        break;
        
        case 2:
            // =========================== CURVA
            // =========================== CABEZA
            // contexto.arc(Eje X,Eje Y, RADIO,);
            contexto.beginPath();
            contexto.strokeStyle="black";
            contexto.arc(350,190,31,0,Math.PI*2);
            contexto.stroke();
            // =========================== TRONCO
            contexto.beginPath();
            contexto.moveTo(350,210);
            contexto.lineTo(350,400);
            contexto.stroke();
            
        
        break;
        
        case 3:
            // =========================== CURVA
            // =========================== CABEZA
            // contexto.arc(Eje X,Eje Y, RADIO,);
            contexto.beginPath();
            contexto.strokeStyle="black";
            contexto.arc(350,190,31,0,Math.PI*2);
            contexto.stroke();
            
            // =========================== TRONCO
            contexto.beginPath();
            contexto.moveTo(350,210);
            contexto.lineTo(350,400);
            contexto.stroke();

            // =========================== BRAZO IZQUIERDO
            contexto.beginPath();
            contexto.moveTo(350,310);
            contexto.lineTo(260,250);
            contexto.stroke();

        break;

        case 4:
            // =========================== CURVA
            // =========================== CABEZA
            // contexto.arc(Eje X,Eje Y, RADIO,);
            contexto.beginPath();
            contexto.strokeStyle="black";
            contexto.arc(350,190,31,0,Math.PI*2);
            contexto.stroke();
            
            // =========================== TRONCO
            contexto.beginPath();
            contexto.moveTo(350,210);
            contexto.lineTo(350,400);
            contexto.stroke();

            // =========================== BRAZO IZQUIERDO
            contexto.beginPath();
            contexto.moveTo(350,310);
            contexto.lineTo(260,250);
            contexto.stroke();
            // =========================== BRAZO DERECHO
            contexto.beginPath();
            contexto.moveTo(350,310);
            contexto.lineTo(450,250);
            contexto.stroke();
        break;

        case 5:
            // =========================== CURVA
            // =========================== CABEZA
            // contexto.arc(Eje X,Eje Y, RADIO,);
            contexto.beginPath();
            contexto.strokeStyle="black";
            contexto.arc(350,190,31,0,Math.PI*2);
            contexto.stroke();
            
            // =========================== TRONCO
            contexto.beginPath();
            contexto.moveTo(350,210);
            contexto.lineTo(350,400);
            contexto.stroke();

            // =========================== BRAZO IZQUIERDO
            contexto.beginPath();
            contexto.moveTo(350,310);
            contexto.lineTo(260,250);
            contexto.stroke();
            // =========================== BRAZO DERECHO
            contexto.beginPath();
            contexto.moveTo(350,310);
            contexto.lineTo(450,250);
            contexto.stroke();

            // =========================== PIERNA IZQUIERDO
            contexto.beginPath();
            contexto.moveTo(350,400);
            contexto.lineTo(260,550);
            contexto.stroke();

        break;

        case 6:
            // =========================== CURVA
            // =========================== CABEZA
            // contexto.arc(Eje X,Eje Y, RADIO,);
            contexto.beginPath();
            contexto.strokeStyle="black";
            contexto.arc(350,190,31,0,Math.PI*2);
            contexto.stroke();
            
            // =========================== TRONCO
            contexto.beginPath();
            contexto.moveTo(350,210);
            contexto.lineTo(350,400);
            contexto.stroke();
            
            // =========================== BRAZO IZQUIERDO
            contexto.beginPath();
            contexto.moveTo(350,310);
            contexto.lineTo(260,250);
            contexto.stroke();
            // =========================== BRAZO DERECHO
            contexto.beginPath();
            contexto.moveTo(350,310);
            contexto.lineTo(450,250);
            contexto.stroke();

            // =========================== PIERNA IZQUIERDO
            contexto.beginPath();
            contexto.moveTo(350,400);
            contexto.lineTo(260,550);
            contexto.stroke();
            
            // =========================== PIERNA DERECHO
            contexto.beginPath();
            contexto.moveTo(350,400);
            contexto.lineTo(450,550);
            contexto.stroke();
            break;
            case 7:
                // =========================== CURVA
                // =========================== CABEZA
                // contexto.arc(Eje X,Eje Y, RADIO,);
                contexto.beginPath();
                contexto.strokeStyle="black";
                contexto.arc(350,190,31,0,Math.PI*2);
                contexto.stroke();
            
            // =========================== TRONCO
            contexto.beginPath();
            contexto.moveTo(350,210);
            contexto.lineTo(350,400);
            contexto.stroke();
            
            // =========================== BRAZO IZQUIERDO
            contexto.beginPath();
            contexto.moveTo(350,310);
            contexto.lineTo(260,250);
            contexto.stroke();
            // =========================== BRAZO DERECHO
            contexto.beginPath();
            contexto.moveTo(350,310);
            contexto.lineTo(450,250);
            contexto.stroke();
            
            // =========================== PIERNA IZQUIERDO
            contexto.beginPath();
            contexto.moveTo(350,400);
            contexto.lineTo(260,550);
            contexto.stroke();
            
            // =========================== PIERNA DERECHO
            contexto.beginPath();
            contexto.moveTo(350,400);
            contexto.lineTo(450,550);
            contexto.stroke();
            
            // =========================== MUERTE
            contexto.beginPath();
            contexto.strokeStyle="red";
            contexto.moveTo(230,240);
            contexto.lineTo(470,240);
            contexto.stroke();

        break;
    
        default:
        break;
    }
    
    // // =========================== CURVA
    // // =========================== CABEZA
    // // contexto.arc(Eje X,Eje Y, RADIO,);
    // contexto.beginPath();
    // contexto.arc(350,190,31,0,Math.PI*2);
    // contexto.stroke();
    
    // // =========================== TRONCO
    // contexto.beginPath();
    // contexto.moveTo(350,210);
    // contexto.lineTo(350,400);
    // contexto.stroke();

    // // =========================== BRAZO IZQUIERDO
    // contexto.beginPath();
    // contexto.moveTo(350,310);
    // contexto.lineTo(260,250);
    // contexto.stroke();
    // // =========================== BRAZO DERECHO
    // contexto.beginPath();
    // contexto.moveTo(350,310);
    // contexto.lineTo(450,250);
    // contexto.stroke();

    // // =========================== PIERNA IZQUIERDO
    // contexto.beginPath();
    // contexto.moveTo(350,400);
    // contexto.lineTo(260,550);
    // contexto.stroke();
    // // =========================== PIERNA DERECHO
    // contexto.beginPath();
    // contexto.moveTo(350,400);
    // contexto.lineTo(450,550);
    // contexto.stroke();
    
}