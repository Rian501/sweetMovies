console.log("Main JS is connected");

//using JS make Hello World appear on DOM as an <h3>

let myHeading = document.createElement("h3");
myHeading.setAttribute("id", "helloHeading")
myHeading.textContent = "SOME SWEET MOVIES";

let bodyContainer = document.querySelector("#contentContainer");
// let bodyContainer = document.getElementById("contentContainer");

bodyContainer.appendChild(myHeading);

//MOVIES - create array of Movie Titles (3 or 4)

let myMovies = ["Robin Hood", "The Little Mermaid", "The Secret of NIMH", "The Nightmare Before Christmas"]

//iterate over these movies and put them on the DOM


// myMovies.forEach(function(movie) {
//   //create an element
//   let movieElement = document.createElement("h5");
//   //add textContent to that element
//   movieElement.textContent = movie;
//   //append that element to bodyContainer
//   bodyContainer.appendChild(movieElement);
// })

//reassign value of your array to contain objects (with a name property and release date property) rather than strings

myMovies = [
  {
    name: "Robin Hood",
    releaseDate: 1973,
    url: "https://www.imdb.com/title/tt0070608"
  },
  {
    name: "The Little Mermaid",
    releaseDate: 1989,
    url:"https://www.imdb.com/title/tt0097757"
  },
  {
    name: "The Secret of NIMH",
    releaseDate: 1982,
    url: "https://www.imdb.com/title/tt0084649/"
  },
  {
    name: "The Nightmare Before Christmas",
    releaseDate: 1993,
    url: "https://www.imdb.com/title/tt0107688"
  }
]



myMovies.forEach(function (movie) {
  console.log(movie);
  //create elements
  let movieTitleElement = document.createElement("h4");
  let movieDateElement = document.createElement("p");
  let movieUrlElement = document.createElement("a");

  //a tag gets some special attributes, HREF being necessary to function!
  movieUrlElement.setAttribute("href", movie.url);
  movieUrlElement.setAttribute("target", "_blank");

  //add textContent to elements
  movieUrlElement.textContent = "Check it out on IMDB";
  movieTitleElement.textContent = movie.name;
  // movieTitleElement.textContent = `${movie.name}, from ${movie.releaseDate}`;
  movieDateElement.textContent = `Released in: ${movie.releaseDate}`;

  //append the elements to bodyContainer
  bodyContainer.appendChild(movieTitleElement);
  bodyContainer.appendChild(movieDateElement);
  bodyContainer.appendChild(movieUrlElement);
})



//link below the release date that when clicked will lead to the IMDB page for that movie

