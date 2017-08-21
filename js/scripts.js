//business logic

function List(first, second, third, fourth){
  this.first = first;
  this.second = second;
  this.third = third;
  this.fourth = fourth;
};

List.prototype.listItem = function () {
return this.first + " " + this.second + " " + this.third + " " + this.fourth;
};



//user interface
$(document).ready(function(){
  $("#to-do-form").submit(function (event) {
    event.preventDefault();

    var first = $("#first").val();
    var second = $("#second").val();
    var third = $("#third").val();
    var fourth = $("#fourth").val();

    var newList = new List(first, second, third, fourth);

    $("#addingItems").append("<li><span class='items'>" + newList.first + "</span></li>");

    $(".items").last().click(function() {
      $("#showItems").show();
      $("#showItems h2").text(newList.first);
      $(".first").text(newList.first);
      $(".second").text(newList.second);
      $(".third").text(newList.third);
      $(".fourth").text(newList.fourth);
      //$("ul#showItems").append("<li><span class='items'>" + newList.listItem + "</span></li>");
    });
    $("input#first").val("");
    $("input#second").val("");
    $("input#third").val("");
    $("input#fourth").val("");

  });
});
