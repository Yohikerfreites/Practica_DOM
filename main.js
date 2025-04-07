const logo = "./assets/img/logo1.jpg";
const placeholder = "./assets/img/placeholder.jpg";


const bMoviesInicio = [
  {
    name: "Plan 9 from Outer Space",
    price: 10,
    year: 1959,
    stars: 3,
    seller: "Cult Cinema",
    image: "https://m.media-amazon.com/images/I/A1d8ujv9nfL._SL1500_.jpg"
  },
  // Añade aquí al menos 9 productos más para tener un total de 10 productos
  // puedes cambiar los campos de cada objeto si es necesario para tu diseño...
  {
    name: "Manos: The Hands of Fate",
    price: 8,
    year: 1966,
    stars: 2,
    seller: "Cult Cinema",
    image: "https://m.media-amazon.com/images/I/81qlYReoEqL._SL1500_.jpg"
  },
  {
    name: "Robot Monster",
    price: 9,
    year: 1953,
    stars: 2,
    seller: "Cult Cinema",
    image: "https://m.media-amazon.com/images/I/81-mxcUF-XL._SL1500_.jpg"
  },
  {
    name: "Troll 2",
    price: 7,
    year: 1990,
    stars: 1,
    seller: "Cult Cinema",
    image: "https://m.media-amazon.com/images/I/81ULFdc+gcL._SL1500_.jpg"
  },
  {
    name: "The Toxic Avenger",
    price: 11,
    year: 1994,
    stars: 4,
    seller: "Cult Cinema",
    image: "https://m.media-amazon.com/images/I/71583GaKm+L._SL1099_.jpg"
  },
  {
    name: "Basket Case",
    price: 6,
    year: 1982,
    stars: 2,
    seller: "Cult Cinema",
    image: "https://m.media-amazon.com/images/I/91NfgM3JBNL._SL1500_.jpg"
  },
  {
    name: "Attack of the Killer Tomatoes!",
    price: 8,
    year: 1978,
    stars: 3,
    seller: "Cult Cinema",
    image: "https://m.media-amazon.com/images/I/71d01DMt5CL._SL1500_.jpg"
  },
  {
    name: "Evil Dead",
    price: 10,
    year: 1981,
    stars: 4,
    seller: "Cult Cinema",
    image: "https://m.media-amazon.com/images/I/71DWK8yyEPL._AC_SL1200_.jpg"
  },
  {
    name: "Ilsa, She Wolf of the SS",
    price: 7,
    year: 1975,
    stars: 1,
    seller: "Cult Cinema",
    image: "https://m.media-amazon.com/images/I/711GEvfKkaL._SL1500_.jpg"
  },
  {
    name: "Death Bed: The Bed That Eats",
    price: 5,
    year: 1977,
    stars: 2,
    seller: "Cult Cinema",
    image: "https://image.tmdb.org/t/p/w1280/7AVD6kE9NA15YLLJaEDINfgHBh0.jpg"
  },
  {
    name: "Chopping Mall",
    price: 9,
    year: 1986,
    stars: 2,
    seller: "Cult Cinema",
    image: "https://m.media-amazon.com/images/I/61dotKIsPKL._AC_SL1500_.jpg"
  },
  {
    name: "Caltiki, the Immortal Monster",
    price: 8,
    year: 1959,
    stars: 2,
    seller: "Cult Cinema",
    image: "https://m.media-amazon.com/images/I/71o2Beon7gL._SL1126_.jpg"
  },
  {
    name: "Night of the Living Dead",
    price: 10,
    year: 1968,
    stars: 4,
    seller: "Cult Cinema",
    image: "https://m.media-amazon.com/images/I/81gbr-PJPmL._SL1500_.jpg"
  },
  {
    name: "Queen of Blood",
    price: 6,
    year: 1966,
    stars: 1,
    seller: "Cult Cinema",
    image: "https://m.media-amazon.com/images/I/81BzLcT+a5L._SL1500_.jpg"
  },
  {
    name: "The Brain That Wouldn't Die",
    price: 7,
    year: 1952,
    stars: 2,
    seller: "Cult Cinema",
    image: "https://m.media-amazon.com/images/S/pv-target-images/3a6e4251312b71aa65e4586b00077d6334da01b6dd2568742210fbea60c1da89.jpg"
  },
  {
    name: "Santa Claus Conquers the Martians",
    price: 8,
    year: 1964,
    stars: 3,
    seller: "Cult Cinema",
    image: "https://m.media-amazon.com/images/M/MV5BMjE4OTg3MTU2Ml5BMl5BanBnXkFtZTcwOTM2NDIwNw@@._V1_.jpg"
  },
  {
    name: "Blood Feast",
    price: 5,
    year: 1963,
    stars: 1,
    seller: "Cult Cinema",
    image: "https://m.media-amazon.com/images/I/51c0dewTgjL._AC_UF894,1000_QL80_.jpg"
  },
  {
    name: "The Room",
    price: 12,
    year: 2003,
    stars: 1,
    seller: "Cult Cinema",
    image: "https://m.media-amazon.com/images/M/MV5BYmNkMThiODYtZTAzMC00ODJkLTg5MmEtMWIyMGFlZDlkYmNlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
  },
  {
    name: "The Last Man on Earth",
    price: 9,
    year: 1964,
    stars: 3,
    seller: "Cult Cinema",
    image: "https://m.media-amazon.com/images/M/MV5BY2E2MTMzYzUtYjBlOC00YmM1LTk3MGMtZWY0NDAxOGE5NzYxXkEyXkFqcGc@._V1_.jpg"
  },
  {
    name: "The Beast of Yucca Flats",
    price: 6,
    year: 1961,
    stars: 1,
    seller: "Cult Cinema",
    image: "https://m.media-amazon.com/images/M/MV5BYzhlZWYxZjUtNTI1ZS00NjhkLTliNzAtNjZjZDViZjcwNTE2XkEyXkFqcGc@._V1_.jpg"
  }
];

let bMovies = [
  {
    name: "Plan 9 from Outer Space",
    price: 10,
    year: 1959,
    stars: 3,
    seller: "Cult Cinema",
    image: "https://m.media-amazon.com/images/I/A1d8ujv9nfL._SL1500_.jpg"
  },
  // Añade aquí al menos 9 productos más para tener un total de 10 productos
  // puedes cambiar los campos de cada objeto si es necesario para tu diseño...
  {
    name: "Manos: The Hands of Fate",
    price: 8,
    year: 1966,
    stars: 2,
    seller: "Cult Cinema",
    image: "https://m.media-amazon.com/images/I/81qlYReoEqL._SL1500_.jpg"
  },
  {
    name: "Robot Monster",
    price: 9,
    year: 1953,
    stars: 2,
    seller: "Cult Cinema",
    image: "https://m.media-amazon.com/images/I/81-mxcUF-XL._SL1500_.jpg"
  },
  {
    name: "Troll 2",
    price: 7,
    year: 1990,
    stars: 1,
    seller: "Cult Cinema",
    image: "https://m.media-amazon.com/images/I/81ULFdc+gcL._SL1500_.jpg"
  },
  {
    name: "The Toxic Avenger",
    price: 11,
    year: 1994,
    stars: 4,
    seller: "Cult Cinema",
    image: "https://m.media-amazon.com/images/I/71583GaKm+L._SL1099_.jpg"
  },
  {
    name: "Basket Case",
    price: 6,
    year: 1982,
    stars: 2,
    seller: "Cult Cinema",
    image: "https://m.media-amazon.com/images/I/91NfgM3JBNL._SL1500_.jpg"
  },
  {
    name: "Attack of the Killer Tomatoes!",
    price: 8,
    year: 1978,
    stars: 3,
    seller: "Cult Cinema",
    image: "https://m.media-amazon.com/images/I/71d01DMt5CL._SL1500_.jpg"
  },
  {
    name: "Evil Dead",
    price: 10,
    year: 1981,
    stars: 4,
    seller: "Cult Cinema",
    image: "https://m.media-amazon.com/images/I/71DWK8yyEPL._AC_SL1200_.jpg"
  },
  {
    name: "Ilsa, She Wolf of the SS",
    price: 7,
    year: 1975,
    stars: 1,
    seller: "Cult Cinema",
    image: "https://m.media-amazon.com/images/I/711GEvfKkaL._SL1500_.jpg"
  },
  {
    name: "Death Bed: The Bed That Eats",
    price: 5,
    year: 1977,
    stars: 2,
    seller: "Cult Cinema",
    image: "https://image.tmdb.org/t/p/w1280/7AVD6kE9NA15YLLJaEDINfgHBh0.jpg"
  },
  {
    name: "Chopping Mall",
    price: 9,
    year: 1986,
    stars: 2,
    seller: "Cult Cinema",
    image: "https://m.media-amazon.com/images/I/61dotKIsPKL._AC_SL1500_.jpg"
  },
  {
    name: "Caltiki, the Immortal Monster",
    price: 8,
    year: 1959,
    stars: 2,
    seller: "Cult Cinema",
    image: "https://m.media-amazon.com/images/I/71o2Beon7gL._SL1126_.jpg"
  },
  {
    name: "Night of the Living Dead",
    price: 10,
    year: 1968,
    stars: 4,
    seller: "Cult Cinema",
    image: "https://m.media-amazon.com/images/I/81gbr-PJPmL._SL1500_.jpg"
  },
  {
    name: "Queen of Blood",
    price: 6,
    year: 1966,
    stars: 1,
    seller: "Cult Cinema",
    image: "https://m.media-amazon.com/images/I/81BzLcT+a5L._SL1500_.jpg"
  },
  {
    name: "The Brain That Wouldn't Die",
    price: 7,
    year: 1952,
    stars: 2,
    seller: "Cult Cinema",
    image: "https://m.media-amazon.com/images/S/pv-target-images/3a6e4251312b71aa65e4586b00077d6334da01b6dd2568742210fbea60c1da89.jpg"
  },
  {
    name: "Santa Claus Conquers the Martians",
    price: 8,
    year: 1964,
    stars: 3,
    seller: "Cult Cinema",
    image: "https://m.media-amazon.com/images/M/MV5BMjE4OTg3MTU2Ml5BMl5BanBnXkFtZTcwOTM2NDIwNw@@._V1_.jpg"
  },
  {
    name: "Blood Feast",
    price: 5,
    year: 1963,
    stars: 1,
    seller: "Cult Cinema",
    image: "https://m.media-amazon.com/images/I/51c0dewTgjL._AC_UF894,1000_QL80_.jpg"
  },
  {
    name: "The Room",
    price: 12,
    year: 2003,
    stars: 1,
    seller: "Cult Cinema",
    image: "https://m.media-amazon.com/images/M/MV5BYmNkMThiODYtZTAzMC00ODJkLTg5MmEtMWIyMGFlZDlkYmNlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
  },
  {
    name: "The Last Man on Earth",
    price: 9,
    year: 1964,
    stars: 3,
    seller: "Cult Cinema",
    image: "https://m.media-amazon.com/images/M/MV5BY2E2MTMzYzUtYjBlOC00YmM1LTk3MGMtZWY0NDAxOGE5NzYxXkEyXkFqcGc@._V1_.jpg"
  },
  {
    name: "The Beast of Yucca Flats",
    price: 6,
    year: 1961,
    stars: 1,
    seller: "Cult Cinema",
    image: "https://m.media-amazon.com/images/M/MV5BYzhlZWYxZjUtNTI1ZS00NjhkLTliNzAtNjZjZDViZjcwNTE2XkEyXkFqcGc@._V1_.jpg"
  }
];


const header = () => {
  const container1 = document.querySelector("header");
  container1.innerHTML = `
  <nav>
  <img src="${logo}" alt="Logo de Cult Movies"/>
  <button id="btnTheme" class="light">Tema</button>
  <ul class="nav-list">
      <li><a href="#">50s</a></li>
        <li><a href="#">60s</a></li>
        <li><a href="#">70s</a></li>
        <li><a href="#">80s</a></li>
        <li><a href="#">90s</a></li>
        <li><a href="#">2000s</a></li>
    </ul>
    </nav>
  `;
};

const aside = () => {
  const containerAside = document.querySelector("aside");
  containerAside.innerHTML = `
  <button id="menu-order"> Ordenar por</button>
      <ul class="buttons">
        <li id="inicio"><button>Inicio</button></li>
        <li id="order-nombre"><button>Por nombre</button></li>
        <li id="order-año"><button>Por año</button></li>
        <li id="order-precio"><button>Por precio</button></li>
        <li id="order-estrellas"><button>Por estrellas</button></li>
      </ul>
  `
};

const main = () => {
  const container2 = document.querySelector("main");
  container2.className = "main-aside";
  container2.innerHTML = "";
  for (const bMovie of bMovies) {
    const article = document.createElement("article");
    article.innerHTML = `
    <img src="${bMovie.image ? bMovie.image : placeholder}" alt="${bMovie.name} poster"/>
    <h2>${bMovie.name}</h2>
    <h3>${bMovie.year} - ${bMovie.stars} Stars</h3>
    <p> Price ${bMovie.price}</p>
    `;
    container2.appendChild(article);
  }
};
const footer = () => {
  const container3 = document.querySelector("footer");
  const date = new Date();
  const year = date.getFullYear();
  container3.innerHTML = `
  <p>Copyright ${year} - Cult Movies</p>
  `;
};


// Cargamos las funciones al completar la carga del DOM

window.addEventListener("DOMContentLoaded", () => {
  header();
  aside();
  main();
  main();
  footer();

  document.querySelector("#btnTheme").addEventListener("click", () => {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
      document.querySelector("#btnTheme").textContent = "🌚";
    } else {
      document.querySelector("#btnTheme").textContent = "🌞";

    }
  });

  document.querySelector("#menu-order").addEventListener("click", () => {
    document.querySelector(".buttons").classList.toggle("show");
  });

  document.querySelector("#inicio").addEventListener("click", () => {
    bMovies.length = 0;
    bMovies = [
      {
        name: "Plan 9 from Outer Space",
        price: 10,
        year: 1959,
        stars: 3,
        seller: "Cult Cinema",
        image: "https://m.media-amazon.com/images/I/A1d8ujv9nfL._SL1500_.jpg"
      },
      // Añade aquí al menos 9 productos más para tener un total de 10 productos
      // puedes cambiar los campos de cada objeto si es necesario para tu diseño...
      {
        name: "Manos: The Hands of Fate",
        price: 8,
        year: 1966,
        stars: 2,
        seller: "Cult Cinema",
        image: "https://m.media-amazon.com/images/I/81qlYReoEqL._SL1500_.jpg"
      },
      {
        name: "Robot Monster",
        price: 9,
        year: 1953,
        stars: 2,
        seller: "Cult Cinema",
        image: "https://m.media-amazon.com/images/I/81-mxcUF-XL._SL1500_.jpg"
      },
      {
        name: "Troll 2",
        price: 7,
        year: 1990,
        stars: 1,
        seller: "Cult Cinema",
        image: "https://m.media-amazon.com/images/I/81ULFdc+gcL._SL1500_.jpg"
      },
      {
        name: "The Toxic Avenger",
        price: 11,
        year: 1994,
        stars: 4,
        seller: "Cult Cinema",
        image: "https://m.media-amazon.com/images/I/71583GaKm+L._SL1099_.jpg"
      },
      {
        name: "Basket Case",
        price: 6,
        year: 1982,
        stars: 2,
        seller: "Cult Cinema",
        image: "https://m.media-amazon.com/images/I/91NfgM3JBNL._SL1500_.jpg"
      },
      {
        name: "Attack of the Killer Tomatoes!",
        price: 8,
        year: 1978,
        stars: 3,
        seller: "Cult Cinema",
        image: "https://m.media-amazon.com/images/I/71d01DMt5CL._SL1500_.jpg"
      },
      {
        name: "Evil Dead",
        price: 10,
        year: 1981,
        stars: 4,
        seller: "Cult Cinema",
        image: "https://m.media-amazon.com/images/I/71DWK8yyEPL._AC_SL1200_.jpg"
      },
      {
        name: "Ilsa, She Wolf of the SS",
        price: 7,
        year: 1975,
        stars: 1,
        seller: "Cult Cinema",
        image: "https://m.media-amazon.com/images/I/711GEvfKkaL._SL1500_.jpg"
      },
      {
        name: "Death Bed: The Bed That Eats",
        price: 5,
        year: 1977,
        stars: 2,
        seller: "Cult Cinema",
        image: "https://image.tmdb.org/t/p/w1280/7AVD6kE9NA15YLLJaEDINfgHBh0.jpg"
      },
      {
        name: "Chopping Mall",
        price: 9,
        year: 1986,
        stars: 2,
        seller: "Cult Cinema",
        image: "https://m.media-amazon.com/images/I/61dotKIsPKL._AC_SL1500_.jpg"
      },
      {
        name: "Caltiki, the Immortal Monster",
        price: 8,
        year: 1959,
        stars: 2,
        seller: "Cult Cinema",
        image: "https://m.media-amazon.com/images/I/71o2Beon7gL._SL1126_.jpg"
      },
      {
        name: "Night of the Living Dead",
        price: 10,
        year: 1968,
        stars: 4,
        seller: "Cult Cinema",
        image: "https://m.media-amazon.com/images/I/81gbr-PJPmL._SL1500_.jpg"
      },
      {
        name: "Queen of Blood",
        price: 6,
        year: 1966,
        stars: 1,
        seller: "Cult Cinema",
        image: "https://m.media-amazon.com/images/I/81BzLcT+a5L._SL1500_.jpg"
      },
      {
        name: "The Brain That Wouldn't Die",
        price: 7,
        year: 1952,
        stars: 2,
        seller: "Cult Cinema",
        image: "https://m.media-amazon.com/images/S/pv-target-images/3a6e4251312b71aa65e4586b00077d6334da01b6dd2568742210fbea60c1da89.jpg"
      },
      {
        name: "Santa Claus Conquers the Martians",
        price: 8,
        year: 1964,
        stars: 3,
        seller: "Cult Cinema",
        image: "https://m.media-amazon.com/images/M/MV5BMjE4OTg3MTU2Ml5BMl5BanBnXkFtZTcwOTM2NDIwNw@@._V1_.jpg"
      },
      {
        name: "Blood Feast",
        price: 5,
        year: 1963,
        stars: 1,
        seller: "Cult Cinema",
        image: "https://m.media-amazon.com/images/I/51c0dewTgjL._AC_UF894,1000_QL80_.jpg"
      },
      {
        name: "The Room",
        price: 12,
        year: 2003,
        stars: 1,
        seller: "Cult Cinema",
        image: "https://m.media-amazon.com/images/M/MV5BYmNkMThiODYtZTAzMC00ODJkLTg5MmEtMWIyMGFlZDlkYmNlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
      },
      {
        name: "The Last Man on Earth",
        price: 9,
        year: 1964,
        stars: 3,
        seller: "Cult Cinema",
        image: "https://m.media-amazon.com/images/M/MV5BY2E2MTMzYzUtYjBlOC00YmM1LTk3MGMtZWY0NDAxOGE5NzYxXkEyXkFqcGc@._V1_.jpg"
      },
      {
        name: "The Beast of Yucca Flats",
        price: 6,
        year: 1961,
        stars: 1,
        seller: "Cult Cinema",
        image: "https://m.media-amazon.com/images/M/MV5BYzhlZWYxZjUtNTI1ZS00NjhkLTliNzAtNjZjZDViZjcwNTE2XkEyXkFqcGc@._V1_.jpg"
      }
    ];
    main();
  });

  document.querySelector("#order-nombre").addEventListener("click", () => {
    bMovies.sort((a, b) => a.name.localeCompare(b.name));
    main();
  });

  document.querySelector("#order-año").addEventListener("click", () => {
    bMovies.sort((a, b) => a.year - b.year);
    main();
  });

  document.querySelector("#order-precio").addEventListener("click", () => {
    bMovies.sort((a, b) => a.price - b.price);
    main();
  });

  document.querySelector("#order-estrellas").addEventListener("click", () => {
    bMovies.sort((a, b) => a.stars - b.stars);
    main();
  });

});
