let result = 0;
let letter = "";
let question;

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




  
   

   
     
  
   











