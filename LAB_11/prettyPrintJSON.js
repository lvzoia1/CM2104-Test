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

function prettyprintJSON(jsondata) {
  var pretty = JSON.stringify(jsondata, null, 4);
  $('#resultsbox').append("<pre>" + pretty + "</pre>");
}
