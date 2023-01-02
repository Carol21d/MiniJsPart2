// export function sum( a, b) {
//     return a + b;
// }





//dividir el numero del dni entre 23
//ejemplo 12345678
//nos quedamos con el resto de la division
//dividimos 12345678 /23 =536768(cociente) y 14 (resto) el 14 pertenece a la letra Z
//Buscamos la letra a la que corresponda
//solucion 12345678Z

//RESTO	0	1	2	3	4	5	6	7	8	9	10	11	12	13	14	15	16	17	18	19	20	21	22
//LETRA	T	R	W	A	G	M	Y	F	P	D	X	B	N	J	Z	S	Q	V	H	L	C	K	E

let result = 0;
let letter = "";
let question;


do {
    try {
        calculateLetter();
    } catch (error) {
        alert("eroore")
    }
  
  
    question = prompt("do u want y /n");
} while (question ==="y");


function calculateLetter() {
    let personDni = document.getElementById("number-dni").value;
    if (Number(personDni) == personDni) {
      personDni = Number(personDni);
      if (personDni >= 0 && personDni <= 99999999) {
        result = personDni % 23;
        letter = [
          "T",
          "R",
          "W",
          "A",
          "G",
          "M",
          "Y",
          "F",
          "P",
          "D",
          "X",
          "B",
          "N",
          "J",
          "Z",
          "S",
          "Q",
          "V",
          "H",
          "L",
          "C",
          "K",
          "E",
        ];
        letter = letter[result];
      }
      document.getElementById("salida").innerHTML = `the number of Dni is : ${personDni}  and Its letter is ${letter}`;
    }
   }
   
   
     
  
   












