




/** --- funcio TEXT VERMELL ---
* Arguments:  'resposta': es el valor de la resposta,
*             'arrValorsPossibles': array de valors que fan que el color del text sigui VERMELL
*/
export function colorText (resposta, arrValorsPossibles, color){
  let colorFinal="black"
  if (arrValorsPossibles.find(function(element){ return element == resposta})) colorFinal = color;
  return colorFinal
}

export function respSiNo (camp){
  if (camp == true) camp = "true"
  if (camp == false) camp = "false"

  //console.log("respSino: " + camp)
  if (camp == null){
    return ""
  } else {
    return camp == "true" ? "Sí" : "No"
  }
}

export function respText (camp){
  return camp ? camp : ""
}
