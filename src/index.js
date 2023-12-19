// Crea un nuevo array que contenga solo los títulos de las películas.

function getTitles(movies) {
  if (!movies.length) return null
  const movieTitles = movies.map(({ title }) => title)
  return movieTitles
}

// Devuelve el título y el director de cada película.

function getTitlesAndDirectors(movies) {
  if (!movies.length) return null
  return movies.map(({ title, director }) => ({ title, director }))
}

// Imprime el título de cada película que fue lanzada después del año 2000.

function getTitlesAfter2000(movies) {
  if (!movies.length) return null
  return movies.filter(({ year }) => year > 2000).map(({ title }) => title)
}

// Crea un nuevo array que contenga objetos con el título de la película y el año de lanzamiento.

function getTitlesAndYears(movies) {
  if (!movies.length) return null
  return movies.map(({ title, year }) => ({ title, year }))
}

// Crea un nuevo array que contenga el número de géneros de cada película.

function getNumberOfGenres(movies) {
  if (!movies.length) return null
  return (numberOfMovies = movies.map(({ genres }) => genres?.length || 0))
}

// Crea un nuevo array que contenga solo las películas lanzadas después del año 2000.

function filterMoviesAfter2000(movies) {
  return movies.filter(({ year }) => year > 2000)
}

// Crea un nuevo array que contenga solo las películas dirigidas por ‘Christopher Nolan’.

function filterNolanMovies(movies) {
  return movies.filter(
    ({ director }) =>
      director === "Christopher Nolan" || director === "Christopher nolan"
  )
}

// Crea un nuevo array que contenga solo las películas que son del género ‘Drama’.

function filterDramaMovies(movies) {
  return movies.filter(({ genres }) => genres.includes("Drama"))
}

// Ordena las películas por año de lanzamiento en orden ascendente Y si son iguales por el título.

function sortByYear(movies) {
  if (!movies.length) return null
  return movies.sort(
    (a, b) => a.year - b.year || a.title.localeCompare(b.title)
  )
}

// Ordena las películas por el número de géneros en orden descendente, si son iguales por el año y si son del mismo año por el título.

function sortByNumberOfGenres(movies) {
  if (!movies.length) return null
  return movies.sort((a, b) => b.genres.length - a.genres.length)
}

// Ordena las películas por el nombre del director en orden alfabético.

function sortByDirector(movies) {
  if (!movies.length) return null
  return movies.sort((a, b) => a.director.localeCompare(b.director))
}

// Devuelve la suma total de todos los géneros de las películas.

function getTotalNumberOfGenres(movies) {
  const totalGenres = movies.reduce((acc, curr) => {
    return acc + curr.genres.length
  }, 0)
  return totalGenres
}

// Encuentra la película con el título más largo.

function getMovieWithLongestTitle(movies) {
  let longestTitledMovie = ""
  for (const { title } of movies) {
    if (title.length > longestTitledMovie.length) longestTitledMovie = title
  }
  return longestTitledMovie
  //    return movies.reduce(
  //      (acc, curr) =>
  //        curr.title.length > acc.title.length ? { title: curr.title } : acc,
  //      { title: "" }
  //    ).title
}

// Encuentra el número de películas lanzadas cada año.

function getNumberOfMoviesPerYear(movies) {
  // Traducir con reduce...
  if (!movies.length) return null
  //   const moviesDictionary = {}
  //   for (const { year } of movies) {
  //     moviesDictionary[year] = (moviesDictionary[year] || 0) + 1
  //   }
  //   return moviesDictionary

  return movies.reduce((acc, curr) => {
    acc[curr.year] = (acc[curr.year] || 0) + 1
    return acc
  }, {})
}

// Encuentra la primera película dirigida por ‘Quentin Tarantino’.

function findFirstTarantinoMovie(movies) {
  if (!movies.length) return null
  return movies.find(({ director }) => director === "Quentin Tarantino")
}

// Encuentra la primera película que es del género ‘Adventure’.

function findFirstAdventureMovie(movies) {
  if (!movies.length) return null
  return movies.find((movie) => movie.genres.includes("Adventure"))
}

// Encuentra la primera película lanzada antes de 2000.

function findFirstMovieBefore2000(movies) {
  if (!movies.length) return null
  return movies.find((movie) => movie.year < 2000)
}

// Encuentra el número de películas dirigidas por ‘Christopher Nolan’ que son del género ‘Drama’.

function getNumberOfNolanDramaMovies(movies) {
  let dramaCounter = 0
  for (const { genres, director } of movies) {
    if (genres.includes("Drama") && director === "Christopher Nolan")
      dramaCounter++
  }
  return dramaCounter

  // FORMA ALTERNATIVA DE SACAR ESTE EJERCICIO CON REDUCE:

  //   return movies.reduce((acc, curr) => {
  //     if (curr.genres.includes("Drama") && curr.director === "Christopher Nolan")
  //       acc++
  //     return acc
  //   }, 0)

  // FORMA ALTERNATIVA CON FILTER
  //   return movies.filter(
  //     (movie) =>
  //       movie.director === "Christopher Nolan" && movie.genres.includes("Drama")
  //   ).length
}

// Encuentra el título de la película más antigua que es del género ‘Sci-Fi’.

function getTitleOfOldestSciFiMovie(movies) {
  if (!movies.length) return null
  let oldestMovie = ""
  let oldestYear = Infinity
  for (const { year, genres, title } of movies) {
    if (genres.includes("Sci-Fi") && year < oldestYear) {
      oldestYear = year
      oldestMovie = title
    }
  }
  return oldestMovie
  // FORMA ALTERNATIVA CON REDUCE para resolve estos ejercicios:

  //   return movies.reduce((acc, curr) => {
  //     if ((curr.genres.includes("Sci-Fi") && curr.year < acc.year) || !acc.year)
  //       acc = { year: curr.year, title: curr.title }
  //     return acc
  //   }, {}).title
}

// Encuentra el número de géneros únicos en todas las películas.

function getNumberOfUniqueGenres(movies) {
  if (!movies.length) return 0
  const uniqueMovies = new Set()
  for (const movie of movies) {
    for (genre of movie.genres) uniqueMovies.add(genre)
  }
  return uniqueMovies.size
}

// Encuentra el director que ha dirigido más películas.

function getDirectorWithMostMovies(movies) {
  if (!movies.length) return null
  const moviesDictionary = {}
  let mostFrequentDirector = ""
  let highestFrequency = 0
  for ({ director } of movies) {
    moviesDictionary[director] = (moviesDictionary[director] || 0) + 1
    if (moviesDictionary[director] > highestFrequency) {
      highestFrequency = moviesDictionary[director]
      mostFrequentDirector = director
    }
  }
  return mostFrequentDirector
}

// Encuentra el año con el mayor número de películas lanzadas.

function getYearWithMostMovies(movies) {
  if (!movies.length) return null
  const moviesDictionary = {}
  let highestMovieRateYear = ""
  let highestMovieFrequency = 0
  for ({ year } of movies) {
    moviesDictionary[year] = (moviesDictionary[year] || 0) + 1
    if (moviesDictionary[year] > highestMovieFrequency) {
      highestMovieRateYear = year
      highestMovieFrequency = moviesDictionary[year]
    }
  }
  return highestMovieRateYear
}
