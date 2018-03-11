$(function(){
  alert("Document Ready");

  $('#searchform').submit(function(){
    var searchterms = $("searchterms").val();
    getResultsFromOMDB(searchterms);
    return false;
  });
});

function getResultsFromOMDB(searchterms) {
  var url = "http://www.omdbapi.com/?apikey=8dbb4272&s=" + searchterms;
  $.getJSON(url, function(jsondata) {
    printJSON(jsondata);
  });
}

function addResultTitles(jsondata) {
  var htmlstring = "";
  for (var i=0; i<10; i++) {
    var title = jsondata.Search[i].Title;
    htmlstring += "<li>" + title + "</li>";
  }

  $("#results").html(htmlstring);

}
