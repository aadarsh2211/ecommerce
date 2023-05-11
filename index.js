
var itemsArray = [];
var form = document.getElementById("myForm");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  var formData = new FormData(form);
  var title = formData.get("title");
  var description = formData.get("description");
  var price = formData.get("price");
  
  itemsArray.push([title,description,price]);

  localStorage.setItem("itemsArray",itemsArray);
  
  form.reset();

});
