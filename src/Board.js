var locked = false;

function makeBoard(boardSize)
{
  var htm = "<table>"
  for (i = 0; i < boardSize; i++) 
  { 
    htm += '<tr id= "row' + i + '">';
     for (j = 0; j < boardSize; j++)
     {
      htm += '<td class="square square' + (j + (i * boardSize)) + '" id="' + (j + (i * boardSize)) + '" align = "center"style="background-color:#66CD00;font-size:400%;width:100px;border-radius:25px;height:100px;border:3px solid #000;margin: 10px;"></td>'
     } 
  }
  htm += "</table>"
  return htm;
}
function getWinner(json_text)
{
  var json_return;
  $.get('https://shielded-basin-3765.herokuapp.com/get_winner',json_text, function(text) {

    json_return = text;
    winner = (JSON.parse(json_return))['winner'];
    console.log(winner);
    over = false;
    if (winner != 'continue')
    {
      if (winner === "")
        $("#display").text("Everybody wins! Press 'Reset' to play again!");
      else
        $("#display").text("'" + winner + "'s win the game! Press 'Reset' to play again!");  
      return true;  
    }

    return false;
  });
}


