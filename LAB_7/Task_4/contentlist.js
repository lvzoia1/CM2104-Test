function addContent () {
	item = "hewey";
	item = "dewey";
	item = "louie";
	// add a list of items to the content div
	var items = ["hewey", "dewey", "louie"];

	// build the html string for a <ul> list
	var items_html = "<ul>";
	for (var i=0; i < items.length; i++) {
		item = items[i];
		items_html += "<li>" + item + "</li>";
	}
	items_html += "</ul>";

	// using javascript
	// 1. find the content div
	// 2. modify its html attribute by adding items_html
	function goAgain () {
		document.getElementById('content');
		var newPara = document.createElement("p");
		var text = document.createTextNode(items_html);
		newPara.appendChild(text);
		document.body.appendChild(newPara);
	}
}
