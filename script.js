$( document ).ready(function() {

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "text.txt", true);
  xhttp.send();
}

$('#button2').click(function(){
  $('#jquery-div').load("jquery.txt");
  });
});
