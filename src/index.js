console.log('%c HI', 'color: firebrick')


document.addEventListener("DOMContentLoaded", () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    const dogImageContainer = document.getElementById("dog-image-container");
    const dogBreedsList = document.getElementById("dog-breeds");
    
  
    fetch(imgUrl)
      .then(response => response.json())
      .then(data => {
        // Iterate through the array of images and add them to the DOM
        data.message.forEach(imageUrl => {
          const imgElement = document.createElement("img");
          imgElement.style.width = "250px"
          imgElement.style.height = "250px"
          imgElement.src = imageUrl;
          dogImageContainer.appendChild(imgElement);
        });
      })
      .catch(error => console.error("Error fetching dog images:", error));
