
    // Function to fetch images from API
    function fetchImages(query) {
      const apiKey = ' yIKH6aePyN7IkBwYJVSIgXMQh6os1wjkhWF5HcpsVs7g3TAxaGwrqkgj';
      const apiUrl = `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}`;
      
      fetch(apiUrl, {
        headers: {
          Authorization: `Bearer ${apiKey}`
        }
      })
      .then(response => response.json())
      .then(data => {
        displayImages(data.photos);
      })
      .catch(error => console.error('Error fetching images:', error));
    }

    // Function to display images in the gallery
    function displayImages(photos) {
      const imageGallery = document.getElementById("imageGallery");
      imageGallery.innerHTML = "";

      photos.forEach(photo => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.setAttribute("data-id", photo.id);
        card.innerHTML = `
          <img src="${photo.src.medium}" alt="${photo.photographer}">
           <p>${photo.photographer}</p>
          <p>ID: ${photo.id}</p>
          <button onclick="hideCard('${photo.id}')">Hide</button>
          <button onclick="showDetail('${photo.id}')">Details</button>
        `;
        imageGallery.appendChild(card);
      });
    }

    // Function to hide a card
    function hideCard(photoId) {
      const card = document.querySelector(`[data-id="${photoId}"]`);
      if (card) {
        card.style.display = "none";
      }
    }


    // // Event listener for Load Images button
     document.getElementById("loadImagesButton").addEventListener("click", function() {
       const query = document.getElementById("searchInput").value.trim();
       if (query) {
         fetchImages(query);
       } else {
         alert("Please enter a search query.");
       }
    });

    // Event listener for Load Secondary Images button
    document.getElementById("loadSecondaryImagesButton").addEventListener("click", function() {
      const query = "your-secondary-query";
      fetchImages(query);
    });
 
