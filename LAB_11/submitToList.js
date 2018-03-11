$(function(){
  alert("Document Ready");

  $('#searchform').submit(function(){
    var searchterms = $("searchterms").val();
    addItemToList("example");
    return false;
  });
});

function addItemToList (item){
  $('#results').append("<li>" + item + "</li>");
}
