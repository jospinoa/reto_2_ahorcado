(() => {
    document.getElementById("txtNuevaPalabra").addEventListener("keydown", (event) => {
      let getLetra = event.key.toUpperCase();
      let teclasEspeciales = [8, 35, 36, 37, 39, 46];

      if (!abecedario.includes(getLetra)) {
        if (!teclasEspeciales.includes(event.keyCode)) {
          event.preventDefault();
          return;
        }
      }
    });

    document.getElementById("txtRecibePalabra").addEventListener("keydown", (event) => {
        if (totalVidas <= 0) {
            alert("El juego ha terminado");
            return;
        }

        let getLetra = event.key.toUpperCase();

        if (!abecedario.includes(getLetra)) {
            event.preventDefault();
            return;
        }

        document.getElementById("txtRecibePalabra").value = "";
        //pregunta si la letra existe en la palabra secreta
        if (palabraSecreta.includes(getLetra)) {
            DibujarLetraCorrecta(getLetra);
            return;
        }

        DibujarLetraIncorrecta(getLetra);
    });

    document.getElementById("btnJugar").addEventListener("click", () => {
        EmpezarJuego();
    });

    document.getElementById("btnNuevoJuego").addEventListener("click", () => {
        EmpezarJuego();
    });

    document.getElementById("btnSalirJuego").addEventListener("click", () => {
        location.reload();
    });

    document.getElementById("btnCancelarGuardarPalabra").addEventListener("click", () => {
        location.reload();
    });

    document.getElementById("frmNuevaPalabra").addEventListener("submit", (event) => {
      event.preventDefault();
      let nuevaPalabra = document.getElementById("txtNuevaPalabra").value;
      listaPalabras.push(nuevaPalabra.toUpperCase());
      document.getElementById("txtNuevaPalabra").value = "";
      EmpezarJuego(nuevaPalabra.toUpperCase());
    });

  document.getElementById("btnNuevaPalabra").addEventListener("click", () => {
    document.getElementById("zonaBotonesJuego").style.display = "none";
    document.getElementById("zonaNuevaPalabra").style.display = "";
  });
})();

function LimpiarPantalla() {
  document.getElementById("zonaBotonesJuego").style.display = "none";
  document.getElementById("zonaNuevaPalabra").style.display = "none";
  document.getElementById("zonaJuego").style.display = "";
  document.getElementById("listLetrasIncorrectas").innerHTML = "";
  document.getElementById("txtRecibePalabra").value = "";
  document.getElementById("imgAhorcado").innerHTML = "";
  document.getElementById("tempPalabraEncontrada").innerHTML = "";

  totalVidas = 0;
  palabraEncontrada = [];
  palabraEncontradaTemp = [];
  listaLetrasIncorrectas = [];
}

function EmpezarJuego(establecerPalabra = null) {
  LimpiarPantalla();
  GenerarPalabra(establecerPalabra);
}
// En caso que la letra sea parte de la palabra secreta
function DibujarLetraCorrecta(getLetra) {
    let tempPalabraCompleta = "";

    for (let index = 0; index < palabraSecreta.length; index++) {
        //comprobamos la posición en que se encuentra la letra
        if (getLetra === palabraSecreta[index]) {
            palabraEncontrada[index] = getLetra;
            palabraEncontradaTemp[index] = "<span class='letraSecreta'> "+ getLetra +" </span>";
        } 
        
        tempPalabraCompleta = palabraEncontrada.join("");
        
        if (tempPalabraCompleta === palabraSecreta) {
            FinJuego(true);
            break;
        }
    }

    document.getElementById("tempPalabraEncontrada").innerHTML = palabraEncontradaTemp;
}
//En caso que la letra No sea parte de la palabra secreta
function DibujarLetraIncorrecta(getLetra) {
  // solo en caso que no se haya presionado la letra anteriormente
  if (!listaLetrasIncorrectas.includes(getLetra)) {
    totalVidas--;
    listaLetrasIncorrectas.push(getLetra);
    DibujarHorca();
    MostrarTotalVidas(totalVidas);
    document.getElementById("listLetrasIncorrectas").innerHTML = listaLetrasIncorrectas;

    if (totalVidas <= 0) {
      FinJuego();
    }
  }
}
//En caso que se presione una letra equivocada
function DibujarHorca() {
  const srcImagen = listAhorcados[totalVidas];
  document.getElementById("imgAhorcado").innerHTML = '<img src="' + srcImagen + '">';
}
//Cuando se hayan agotado las opciones permitidas (vidas)
function FinJuego(ganador = null) {
    
    totalVidas = 0;

    if (ganador) {
        document.getElementById("tempPalabraEncontrada").innerHTML = palabraEncontradaTemp;
        document.getElementById("imgAhorcado").innerHTML = '<img src="img/ganador.png" alt="joa">';
        return;
    }

    document.getElementById("tempPalabraEncontrada").innerHTML = "La palabra secreta era : " + palabraSecreta;
}
// Genera una palabra nueva aleatoreamente
function GenerarPalabra(establecerPalabra = null) {
    if (establecerPalabra) {
        palabraSecreta = establecerPalabra;
    } else {
        const totalPalabra = listaPalabras.length;
        const indexPalabra = Math.floor(Math.random() * totalPalabra);
        palabraSecreta = DesencriptarPalabra(listaPalabras[indexPalabra]);
    }

    if (palabraSecreta.length > 7) {
        totalVidas = 7;
    } else {
        totalVidas = palabraSecreta.length;
    }
    
    for (let index = 0; index < palabraSecreta.length; index++) {
        document.getElementById("tempPalabraEncontrada").innerHTML += "<span class='letraSecreta'> </span>";
        palabraEncontradaTemp[index] = "<span class='letraSecreta'> </span>";
    }

    MostrarTotalVidas(totalVidas);
}
//Actualiza la cantidad de intentos faltantes
function MostrarTotalVidas(vidas = 0) {
    if (vidas < 0) {
        vidas = 0;
    }

    document.getElementById("tempMostrarTotalVidas").innerHTML = vidas;
}