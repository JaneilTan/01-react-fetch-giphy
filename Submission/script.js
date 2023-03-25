const renderRandomGif = async () => {
  // TODO: Make a fetch request to the Giphy API to get a random GIF

  // TODO: Update the 'src' variable below to be a URL to a GIF from the Giphy API
  const src = "";

  // Update the existing <img> tag with the new src
  const imgEl = document.querySelector("#random-gif");
  imgEl.setAttribute("src", src);
};

// Display a random GIF when the page loads
renderRandomGif();

// Display a random GIF when the button is clicked
const btn = document.querySelector("#fetch-random-gif-btn");
btn.addEventListener("click", renderRandomGif);
