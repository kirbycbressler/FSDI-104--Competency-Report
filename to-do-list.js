function addItemToList() {
  // get value of item id input
  yourItem = $("#item").val();
  // console.log(yourItems);
  $("#your-item").text(yourItem);
  $("#item").val("");
}

function remove() {
  console.log("remove");
  $("#your-item").hide();
}