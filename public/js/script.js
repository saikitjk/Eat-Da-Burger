$(document).ready(function () {
  console.log("Script loaded");
  $("#add").on("click", function () {
    event.preventDefault();

    var burger_name = $("#burger-name").val().trim();
    console.log("User input: " + burger_name + "type: " + typeof burger_name);

    if (burger_name.length === 0) {
      console.log("Please let us know what burger you would like to eat.");
    } else {
      $.ajax("/api/burgers", {
        type: "POST",
        data: { burgerName: burger_name },
      }).then(function () {
        console.log(`Added ${burger_name} as a new Burger!`);
        location.reload();
      });
    }
  });

  $("#burgerGreenButton").on("click", function () {
    var burgerID = $(this).data("id");

    console.log("A burger has been selected");
    $.ajax("/api/burgers/" + burgerID, {
      type: "PUT",
      data: { devoured: true },
    }).then(function () {
      console.log("A burger has been devoured");
      location.reload();
    });
  });
}); //END
