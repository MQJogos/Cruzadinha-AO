var myWords = ["FOGÃO", "BALÃO", "PIÃO", "SABÃO", "CORAÇÃO", "ANÃO","LIMÃO","FEIJÃO","LEÃO","VIOLÃO"];
$(document).ready(function(){
    arrangeGame();                   
});
function arrangeGame()
{
  $.each(myWords, function(key, item){
      $("#hint").append("<p>" + item + "</p>");
  })
}
