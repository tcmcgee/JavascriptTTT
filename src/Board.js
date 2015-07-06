function makeBoard(boardSize)
{
  var htm = "<table>"
  for (i = 0; i < boardSize; i++) 
  { 
    htm += '<tr id= "row' + i + '">';
     for (j = 0; j < boardSize; j++)
     {
      htm += '<td class="square square' + (j + (i * boardSize)) + '"align = "center"style="background-color:#66CD00;font-size:400%;width:100px;border-radius:25px;height:100px;border:3px solid #000;margin: 10px;"></td>'
     } 
  }
  htm += "</table>"
  return htm;
}