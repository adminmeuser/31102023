// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("Delete");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
  
  var spanEdit = document.createElement("SPAN");
  var txtEdit = document.createTextNode("Edit");
  spanEdit.className = "edit";
  spanEdit.appendChild(txtEdit);
  myNodelist[i].appendChild(spanEdit);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Click on an "Edit" button to edit the current list item
var edit = document.getElementsByClassName("edit");
for (i = 0; i < edit.length; i++) {
  edit[i].onclick = function() {
    var div = this.parentElement;
    var text = div.innerText.trim(); // Get the current item's text
    var input = document.getElementById("myInput");
    input.value = text; // Set the input field with the item's text for editing
    div.style.display = "none"; // Hide the current list item
  }
}

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("Delete");
  
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
  
   var span = document.createElement("SPAN");
  var txt = document.createTextNode("Edit");
  
  span.className = "edit";
  span.appendChild(txt);
  li.appendChild(span);
var edit = document.getElementsByClassName("edit");
for (i = 0; i < edit.length; i++) {
  edit[i].onclick = function() {
    var div = this.parentElement;
    var text = div.innerText.trim(); // Get the current item's text
    var input = document.getElementById("myInput");
    input.value = text; // Set the input field with the item's text for editing
    div.style.display = "none"; // Hide the current list item
  }
}
 
}