$(function(){
  alert("Document Ready");

  $('#searchform').submit(function(){
    addItemToList("example");
    return false;
  });
});

function addItemToList (item){
  $('#results').append("<li>" + item + "</li>");
}
