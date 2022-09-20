$(document).ready(function() {
    setTimeout(function() {
        $(".content").fadeOut(1500);
    },3000);
    setTimeout(function() {
        $(".cont2").fadeIn(1500);
    },0000);
});

function actual() {
        //saludo="Hola";
         fecha=new Date(); //Actualizar fecha.
         hora=fecha.getHours(); //hora actual
         minuto=fecha.getMinutes(); //minuto actual
         segundo=fecha.getSeconds(); //segundo actual
         if (hora<10) { //dos cifras para la hora
             hora="0"+hora;
             }
        if (hora > 0 && hora <= 12) { //dos cifras para la hora
            meridiano = "AM";
        }else if(hora > 12 && hora <= 24){
            meridiano="PM";
            switch (hora) {
                case 12:
                    var hora = "12"
                    break;
                case 13:
                    var hora = "01"
                    break;
                case 14:
                    var hora = "02"
                    break;  
                case 15:
                    var hora = "03"
                    break;
                case 16:
                    var hora = "04"
                    break;
                case 17:
                    var hora = "05"
                    break;
                case 18:
                    var hora = "06"
                    break;  
                case 19:
                    var hora = "07"
                    break;
                case 20:
                    var hora = "08"
                    break;
                case 21:
                    var hora = "09"
                    break;
                case 22:
                    var hora = "10"
                    break;
                case 23:
                    var hora = "11"
                    break;
                case 24:
                    var hora = "00"
                    break;
                default:
                    break;
            }
        }
         if (minuto<10) { //dos cifras para el minuto
             minuto="0"+minuto;
             }
         if (segundo<10) { //dos cifras para el segundo
             segundo="0"+segundo;
             }
         //devolver los datos:
        const anioActual = fecha.getFullYear();
        const hoy = fecha.getDate();
        var mesActual = fecha.getMonth() + 1;
        switch (mesActual) {
            case 1:
                var mesActual = "en"
                break;
            case 2:
                var mesActual = "feb"
                break;
            case 3:
                var mesActual = "mar"
                break;  
            case 4:
                var mesActual = "abr"
                break;
            case 5:
                var mesActual = "may"
                break;
            case 6:
                var mesActual = "jun"
                break;
            case 7:
                var mesActual = "jul"
                break;  
            case 8:
                var mesActual = "agto"
                break;
            case 9:
                var mesActual = "sept"
                break;
            case 10:
                var mesActual = "oct"
                break;
            case 11:
                var mesActual = "nov"
                break;
            case 12:
                var mesActual = "dic"
                break;
            default:
                break;
        }
         mihoraActual = hora +":"+minuto+"  "+ meridiano;	
         mireloj = hoy +" de "+ mesActual +" del "+ anioActual + " || " + mihoraActual;
         return mireloj; 
         }

function actualizar() { //función del temporizador
    mihora=actual(); //recoger hora actual
    mireloj=document.getElementById("reloj"); //buscar elemento reloj
    mireloj.innerHTML=mihora; //incluir hora en elemento
        }
setInterval(actualizar,1000); //iniciar temporizador