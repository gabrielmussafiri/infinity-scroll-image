const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

// Unsplash API
const count = 10;
const apiKey = "gEDhKsntG9VWma0H4WHXDBtng-yXarmgpY0ZMeK_Xjg";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get Photos from Unsplash API

async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    // Catch Error Here
  }
}

// On load
getPhotos();
