/*Articulos de la tienda*/
const categoria1 = "Prendas";
let prenda1 = "Remera Azul Bomberos";
let prenda2 = "Gorra Bomberos";
let prenda3 = "Camisa Bomberos";

const categoria2 = "Equipo de proteccion";
let equipoProteccion1 = "Guantes Incendio";
let equipoProteccion2 = "Llave de ajustar uniones";
let equipoProteccion3 = "Navaja de Rescate";

const categoria3 = "Articulos Varios";
let varios1 = "Taza Bomberos";
let varios2 = "Medias Bomberos";
let varios3 = "Cuadro de Bomberos";

let inputUser;

const filtrarCategoria = () => {
  inputUser = prompt("1- Prendas\n2-Equipo de protección\n3-Articulos Varios");
  switch (inputUser) {
    case "1":
      alert("Los articulos que hay de esta categoria son: \n" + prenda1 + "\n" + prenda2 + "\n" + prenda3);
      break;
    case "2":
      alert("Los articulos que hay de esta categoria son: \n" + equipoProteccion1 + "\n" + equipoProteccion2 + "\n" + equipoProteccion3);
      break;
    case "3":
      alert("Los articulos que hay de esta categoria son: \n" + varios1 + "\n" + varios2 + "\n" + varios3);
      break;
  }
};

let buscar = true;

while(buscar) {
  inputUser = prompt("¿Ver todos los productos o filtrar por categoria?\n1-Ver Todo\n2-Filtrar");

  if(inputUser == 1) {
    filtrarCategoria();
    break;
  }
  else if (inputUser == 2) {
    alert("Todos nuestros productos " + prenda1 + "\n" + prenda2 + "\n" + prenda3 + "\n" + equipoProteccion1 + "\n" + equipoProteccion2 + "\n" + equipoProteccion3 + "\n" + varios1 + "\n" + varios2 + "\n" + varios3 + "\n");
    break;
  }
  else {
    inputUser = prompt("Ha incertado una opción invalida ¿Desea intentar de vuelta?\n1-Si\n2-No")

    if(inputUser == 2) {
      buscar = false;
    }
  }
}



