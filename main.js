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

$(document).ready(function () {
  // Predefined list of dog breeds
  var dogBreeds = [
    "Labrador Retriever",
    "German Shepherd",
    "Golden Retriever",
    "Bulldog",
    "Beagle",
    "Poodle",
    "Rottweiler",
    "Yorkshire Terrier",
    "Boxer",
    "Dachshund",
    "Siberian Husky",
    "Doberman Pinscher",
    "Great Dane",
    "Shih Tzu",
    "Australian Shepherd",
    // Add more breeds as needed
  ];

  // Function to fetch and display images
  function fetchAndDisplayImages() {
    // Fetch new images
    $.ajax({
      url: "https://dog.ceo/api/breeds/image/random/12",
      dataType: "json",
    }).then(function (data) {
      console.log(data);
      data.message.forEach(function (imageUrl) {
        var breed = getRandomBreed();
        var $imageWrapper = $("<div class='image-wrapper'></div>");
        var $image = $("<img>").attr("src", imageUrl).attr("alt", "Dog Image");
        $imageWrapper.append($image);
        $imageWrapper.attr("data-breed", breed); 
        $("#dogImageContainer").append($imageWrapper);
      });
    });
  }

  // Function to get a random breed from the list
  function getRandomBreed() {
    var randomIndex = Math.floor(Math.random() * dogBreeds.length);
    return dogBreeds[randomIndex];
  }

  // Trigger image fetching function when the page loads
  fetchAndDisplayImages();

  // Event listener for the button to fetch and display new images
  $("#getDog").on("click", function () {
    $("#dogImageContainer").empty();
    fetchAndDisplayImages();
  });

  $(document).ready(function () {
    var randomMessages = [
      "Yay! Here's a dog!",
      "Look, a cute dog!",
      "Another dog to brighten your day!",
      "Who's a good boy? This one!",
      "A fluffy friend just for you!",
      "Doggo alert!",
      "Enjoy this adorable dog!",
      "Woof woof!",
      "Look! Yet another dog!",
      "Such a floof!",
      "A dog a day keeps the blues away!"
      
    ];

    $("#dogImageContainer").on("mouseenter", ".image-wrapper img", function () {
      var randomMessage =
        randomMessages[Math.floor(Math.random() * randomMessages.length)]; // Select random message
      $(this).after("<div class='popover'>" + randomMessage + "</div>");
    });

    // Event listener to hide popover when mouse leaves image
    $("#dogImageContainer").on("mouseleave", ".image-wrapper img", function () {
      $(this).next(".popover").remove();
    });
  });
});
