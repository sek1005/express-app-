const express = require('express');
const app = express();
const port = 5000;
// const welcome = (req, res) => {
//     res.send("Welcome to Express");
//   };
  
//   app.get("/", welcome);

// const welcomeName = (req, res) => {
//     res.send(`Welcome ${req.params.name}`);
//   };
  
//   app.get("/users/:name", welcomeName);

// app.listen(port, (err) => {
//     if (err) {
//       console.error('Something bad happened');
//     } else {
//       console.log(`Server is listening on ${port}`);
//     }
//   });

//   const cocktails = [
//     {
//       id: 1,
//       name: "Margarita",
//     },
//     {
//       id: 2,
//       name: "Mojito",
//     },
//     {
//       id: 3,
//       name: "Cuba Libre",
//     },
//   ];
  
//   const getCocktails = (req, res) => {
//     res.status(200).json(cocktails);
//   };
  
//   app.get("/api/cocktails", getCocktails);

const movies = [
    {
      id: 1,
      title: "Citizen Kane",
      director: "Orson Wells",
      year: "1941",
      color: false,
      duration: 120,
    },
    {
      id: 2,
      title: "The Godfather",
      director: "Francis Ford Coppola",
      year: "1972",
      color: true,
      duration: 180,
    },
    {
      id: 3,
      title: "Pulp Fiction",
      director: "Quentin Tarantino",
      year: "1994",
      color: true,
      duration: 180,
    },
  ];
  // const welcome = (req, res) => {
  //       res.send("Welcome to my favourite movie list");
  //     };
  //     app.get("/", welcome );
  
      // const getmovies = (req, res) => {
      //   res.status(200).json(movies);
      
      // };
app.get("/api/movies?limit=2",(req, res) => {
  res.json(movies)
  console.log(req.query)
 });
      // const idmovies = (req, res) => {
      //   const reqId = parseInt(req.params.id);
      //   const movieid = movies.find(movie => movie.id === reqId);
      //       if (movieid) {
      //        res.status(200).json(movieid);   
      //       }
      //       else {
      //           res.status(404).json({ message: 'Not Found' });
      //         }
      //     };
      // app.get("/api/movies/:id", idmovies );
      
      
  app.listen(port, (err) => {
    if (err) {
      console.error("Something bad happened");
    } else {
      console.log(`Server is listening on ${port}`);
    }
  });