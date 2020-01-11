// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".pick-topic").on("click", function(event) {
    const id = $(this).data("id");
    const topic = $(this).val();

    $.get(`/topic/${id}`)
    .then(function(q) {
      console.log("loading topic ", q);
      $("#topicDetails").html(q.toString())
    });
  });


  $(".pick-supermarket").on("click", function(event) {
    const id = $(this).data("id");
    const newSleep = $(this).data("newsleep");

    const newSleepState = {
      sleepy: newSleep
    };

    // Send the PUT request.
    $.ajax(`/api/cats/${id}`, {
      type: "PUT",
      data: newSleepState
    }).then(function() {
      console.log("changed sleep to", newSleep);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    const newCat = {
      name: $("#ca")
        .val()
        .trim(),
      sleepy: $("[name=sleepy]:checked")
        .val()
        .trim()
    };

    // Send the POST request.
    $.ajax("/api/cats", {
      type: "POST",
      data: newCat
    }).then(function() {
      console.log("created new cat");
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".delete-cat").on("click", function(event) {
    const id = $(this).data("id");

    // Send the DELETE request.
    $.ajax(`/api/cats/${id}`, {
      type: "DELETE"
    }).then(function() {
      console.log("deleted cat", id);
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
