let totalVidas = 0;
let palabraSecreta = '';
let listaLetrasIncorrectas = [];
let palabraEncontrada = [];
let palabraEncontradaTemp = [];
const abecedario = "QWERTYUIOPASDFGHJKLÑZXCVBNM";
//const listaPalabras = ["HTML", "JAVASCRIPT", "PROGRAMACION", "ALURA", "ORACLE", "CSS", "DESARROLLO", "PROGRAMADOR", "TEGNOLOGIA", "BANNER", "BACKUP", "COOKIES", "DOMINIO", "EMAIL", "MARKETING", "GIGABYTE", "HARDWARE", "HOSTING", "METADATOS", "SOFTWARE", "SPAM", "WEB", "WEBINAR"];
const listaPalabras = ["html", "jaivaiscrimespt", "probergraimaicimesobern", "ailufatrai", "oberraiclenter", "css", "dentersairroberllober", "probergraimaidoberr", "tentergnoberlobergimesai", "bainnenterr", "baickufatp", "coberoberkimesenters", "dobermimesnimesober", "entermaiimesl", "mairkentertimesng", "gimesgaibytenter", "hairdwairenter", "hoberstimesng", "mentertaidaitobers", "soberftwairenter", "spaim", "wenterb", "wenterbimesnair"];
const listAhorcados = ["img/horca7.png","img/horca6.png","img/horca5.png","img/horca4.png","img/horca3.png","img/horca2.png","img/horca1.png","img/horca1.png"]

function DesencriptarPalabra(textoRecibido) {
    textoRecibido = textoRecibido.replace(/enter/gi, "e");
    textoRecibido = textoRecibido.replace(/imes/gi, "i");
    textoRecibido = textoRecibido.replace(/ai/gi, "a");
    textoRecibido = textoRecibido.replace(/ober/gi, "o");
    textoRecibido = textoRecibido.replace(/ufat/gi, "u");
    
    return textoRecibido.toUpperCase();
}