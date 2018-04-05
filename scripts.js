document.addEventListener("DOMContentLoaded", function () {

    // Create the div container
    var div = document.createElement("div");
    div.className = "header-container"; // className is an attribute, not a method

    // Create the h1, create it's text, and append the text to the header.
    var h1 = document.createElement("h1");
    var h1Text = document.createTextNode("This is an h1");
    h1.appendChild(h1Text);
    
    // Append the h1 to the div
    div.appendChild(h1);
    document.body.appendChild(div);

    // Create the h2, create it's text, append the text to the header, and append the header to the div.
    var h2 = document.createElement("h2");
    var h2Text = document.createTextNode("This is an h2");
    h2.appendChild(h2Text);
    div.appendChild(h2);

    // Create the h3, create it's text, append the text to the header, and append the header to the div.
    var h3 = document.createElement("h3");
    var h3Text = document.createTextNode("This is an h3");
    h3.appendChild(h3Text);
    div.appendChild(h3);

    // Create the h4, create it's text, append the text to the header, and append the header to the div.
    var h4 = document.createElement("h4");
    var h4Text = document.createTextNode("This is an h4");
    h4.appendChild(h4Text);
    div.appendChild(h4);

    // Create the h5, create it's text, append the text to the header, and append the header to the div.
    var h5 = document.createElement("h5");
    var h5Text = document.createTextNode("This is an h5");
    h5.appendChild(h5Text);
    div.appendChild(h5);

    // Create the h6, create it's text, append the text to the header, and append the header to the div.
    var h6 = document.createElement("h6");
    var h6Text = document.createTextNode("This is an h6");
    h6.appendChild(h6Text);
    div.appendChild(h6);

    // Give each header it's own class
    h1.className = "h1";
    h2.className = "h2";
    h3.className = "h3";
    h4.className = "h4";
    h5.className = "h5";
    h6.className = "h6";

    // Create an array of colors
    var colors = ["red", "orange", "yellow", "green", "blue", "purple", "black", "pink"];

    // Change color of h1 randomly when double clicked
    h1.addEventListener("dblclick", function(){
        var num = Math.floor(Math.random() * colors.length);
        h1.style.color = colors[num];
    });

    var currentNumber = 1;
    function addListItem() {
        // Can we create a list item without creating an unordered list? YES! 
        var li = document.createElement("li");
        var liText = document.createTextNode("This is list item " + currentNumber);
        li.appendChild(liText);
        li.addEventListener("click", function(){
            var num = Math.floor(Math.random() * colors.length);
            li.style.color = colors[num];
        });
        li.addEventListener("dblclick", function() {
            document.body.removeChild(li);
        });
        document.body.appendChild(li);
        currentNumber++;
    }

    var button = document.getElementById("addItemButton");
    button.addEventListener("click", addListItem);



});