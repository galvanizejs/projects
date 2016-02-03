$(document).ready(function(){
	

  // Add ( and label) your jQuery code here. 
  

  $("#submitBtn").click(function(){
    var text = $(".textInput").val();
    $("<h3>"+text+"</h3>").insertAfter($(this));
  });
​
  // $(".chex input").change(function(){
  //   if($(this).prop('checked')){
  //     $("h2").removeClass("hidden");
  //   } else {
  //     $("h2").addClass("hidden");
  //   }
  // });
​
  $(".chex input").change(function(){
    $("h2").toggleClass("hidden");
  });
​
  $("tbody").append("<tr><td>Paul</td><td>13</td><td>Hangry</td></tr>")
​
  $("tbody").children().each(function(){
    var hunger = $(this).children("td:nth-child(3)");
    if($(hunger).text() === "Content"){
      $(hunger).css("color", "#629632");
    } else {
      $(hunger).css("color", "#CD2626");
    }
  });
​
  $(".btn-warning").click(function(){
    $("tbody").children().each(function(){
      var weight = $(this).children("td:nth-child(2)");
      if($(weight).text() < 10){
        $(this).remove();
      }
    });
  });
​
  $(".btn-success").click(function(){
    $("tbody").children().each(function(){
      var name = $(this).children("td:nth-child(1)");
      $(name).text($(name).text().toUpperCase());
    });
  });
​
  var string = $("h4").text();
  var array = string.replace(/[\[\]",]/g, "").split(" ");
  $("<ul class='newList'></ul>").insertAfter("h4");
  for(i=0;i<array.length;i++){
    $(".newList").append("<li>"+array[i]+"</li>");
  }
​
  $(".btn-primary").click(function(){
    $("table").toggleClass("hidden");
  });
​
  $("#disableUs input").prop("disabled", true);
​
  $("#disableUs a").click(function(e){
    e.preventDefault();
  });
​
  var wahoo = $(".dropdown").find("option[value='Wahoo!!!']").text();
​
  $("<h3>"+wahoo+"</h3>").insertAfter(".dropdown");
​
​
  $("#add").click(function(){
    $("#alertList").append("<li>New Item</li>");
  });
​
  $("#remove").click(function(){
    $("#alertList").children("li:last-child").remove();
  });
​
  var counter = 0;
  $("#alertList").children().each(function(){
    counter += 1;
  });
  $("#counter").text(counter);
​
  $("#alert").click(function(){
    alert("The list is "+counter+" items long");
  });
​
​
});
