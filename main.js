$(document).ready(function () {
  // Function to fetch and display images
  function fetchAndDisplayImages() {
    // Fetch new images
    $.ajax({
      url: "https://dog.ceo/api/breeds/image/random/12",
      dataType: "json",
    }).then(function (data) {
      console.log(data);
      data.message.forEach(function (imageUrl) {
        var $imageWrapper = $("<div class='image-wrapper'></div>");
        var $image = $("<img>").attr("src", imageUrl).attr("alt", "Dog Image");
        $imageWrapper.append($image);
        $("#dogImageContainer").append($imageWrapper);
      });
    });
  }

  // Trigger image fetching function when the page loads
  fetchAndDisplayImages();

  // Event listener for the button to fetch and display new images
  $("#getDog").on("click", function () {
    // Clear existing images
    $("#dogImageContainer").empty();
    // Fetch and display new images
    fetchAndDisplayImages();
  });
});
