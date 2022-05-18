const manirathnam = [
  {
    year: 1985,
    moviename: "Pagal Nilavu",
    language: "Tamil",
    poster:
      "https://cdn.dribbble.com/users/2866003/screenshots/11195291/pagal_nilavu-02_4x.jpg",
  },
  {
    year: 1985,
    moviename: "Idaya Kovil",
    language: "Tamil",
    poster:
      "https://cdn.dribbble.com/users/2866003/screenshots/11207533/idaya_kovil-02_4x.jpg",
  },
  {
    year: 1986,
    moviename: "Mouna Ragam",
    language: "Tamil",
    poster:
      "https://cdn.dribbble.com/users/2866003/screenshots/11220787/mouna_ragam-02_4x.jpg",
  },
  {
    year: 1987,
    moviename: "Nayakan",
    language: "Tamil",
    poster:
      "https://cdn.dribbble.com/users/2866003/screenshots/11278017/nayagan-02_grain.jpg",
  },
  {
    year: 1988,
    moviename: "Agni Natchathiram",
    language: "Tamil",
    poster:
      "https://cdn.dribbble.com/users/2866003/screenshots/11315330/agni_nachathiram-02_grain.jpg",
  },
  {
    year: 1990,
    moviename: "Anjali",
    language: "Tamil",
    poster:
      "https://i.pinimg.com/originals/94/67/8b/94678be24c55ce81f62687f6efcaa830.jpg",
  },
  {
    year: 1991,
    moviename: "Thalapathi",
    language: "Tamil",
    poster:
      "https://i.pinimg.com/736x/d5/a6/35/d5a635a983d114a577d0bd4db162d724.jpg",
  },
  {
    year: 1992,
    moviename: "Roja",
    language: "Tamil",
    poster:
      "https://cdn.dribbble.com/users/4126154/screenshots/12162853/dribble_4x.jpg",
  },
  {
    year: 1993,
    moviename: "Thiruda Thiruda",
    language: "Tamil",
    poster:
      "https://cdn.dribbble.com/users/2866003/screenshots/11503535/media/d5faae8e371aecb03ffc12fb230ee900.jpg",
  },
  {
    year: 1995,
    moviename: "Bombay",
    language: "Tamil",
    poster:
      "https://cdn.dribbble.com/users/4126154/screenshots/12163154/dribbble_4x.jpg",
  },
  {
    year: 1997,
    moviename: "Iruvar",
    language: "Tamil",
    poster:
      "https://i.pinimg.com/originals/a3/9b/bd/a39bbda20fe57905a6e7b402b965efc6.jpg",
  },
  {
    year: 1998,
    moviename: "Uyire",
    language: "Tamil",
    poster:
      "https://cdn.dribbble.com/users/4126154/screenshots/12163078/dribble_4x.jpg",
  },
  {
    year: 2000,
    moviename: "Alaipayuthey",
    language: "Tamil",
    poster: "https://pbs.twimg.com/media/EeG3H-wVAAEBk_P.jpg",
  },
  {
    year: 2002,
    moviename: "Kannathil Muthamittal",
    language: "Tamil",
    poster:
      "https://images-na.ssl-images-amazon.com/images/I/71jNMYpogWL._RI_.jpg",
  },
  {
    year: 2004,
    moviename: "Aaytha Ezhuthu",
    language: "Tamil",
    poster:
      "https://cdn.dribbble.com/users/2866003/screenshots/11872228/azhutha_ezhuthu-02_grain.jpg",
  },
  {
    year: 2010,
    moviename: "Raavanan",
    language: "Tamil",
    poster: "https://pbs.twimg.com/media/EVfP8s3UwAEr8d1?format=jpg",
  },
  {
    year: 2013,
    moviename: "Kadal",
    language: "Tamil",
    poster:
      "https://i.pinimg.com/originals/51/08/1f/51081f31665961f9337100e4dfbab0a9.jpg",
  },
  {
    year: 2015,
    moviename: "O Kadhal Kanmani",
    language: "Tamil",
    poster:
      "https://i.pinimg.com/736x/92/47/4f/92474fdde598ec8a1c733d9811f9f91a.jpg",
  },
  {
    year: 2017,
    moviename: "Kaatru Veliyidai",
    language: "Tamil",
    poster:
      "https://mir-s3-cdn-cf.behance.net/projects/404/38464b104990093.Y3JvcCw1MjUxLDQxMDcsMCwxMjIx.jpg",
  },
  {
    year: 2018,
    moviename: "Chekka Chivantha Vaanam",
    language: "Tamil",
    poster:
      "https://i.pinimg.com/564x/63/3b/7b/633b7b23589aa019074bc73324eb5677.jpg",
  },
  {
    year: 2022,
    moviename: "Ponniyin Selvan: I",
    language: "Tamil",
    poster: "https://igimages.gumlet.io/tamil/home/e78y1knvcaugvqb.jpg",
  },
];

console.log(manirathnam.language);




function createmovie(movielist) {
  const movieContainer = document.createElement("div");
  movieContainer.setAttribute("class", "movie-container");
  movieContainer.innerHTML = `
<img src = "${movielist.poster}"
     alt = "${movielist.moviename}"
     class = "movie-poster"
     />
     <div class = "movie-spec">
            <h2 class = "movie-name"> ${movielist.moviename}</h2>
            <p><span> year : </span> ${movielist.year}<p>
            <p><span> language : </span> ${movielist.language}<p>
      </div>
`;

  document.body.append(movieContainer);
}

manirathnam.forEach((movielist) => {
  console.log(movielist);
  createmovie(movielist);
});



