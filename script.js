$( document ).ready(function() {



$('#button2').click(function(){
  $('#jquery-div').load("jquery.txt");
  });

$("#button3").click(function(){
  $.ajax({url: "jquery2.txt", success: function(result){
        $("#jquery-2").html(result);
    }});
});

$("#button4").click(function(){
  $('#json').getJSON("data.json");
});

$("#button5").click(function(){
  $('#json2').load("data.json");
});


});
