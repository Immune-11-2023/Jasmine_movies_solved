describe('Tests for array methods', function () {
  const emptyMovies = [];
  const movies = [
    {
      director: 'Christopher Nolan',
      year: 2010,
      genres: ['Sci-Fi', 'Thriller'],
      title: 'Inception',
    },
    {
      director: 'Quentin Tarantino',
      year: 1994,
      genres: ['Crime', 'Drama'],
      title: 'Pulp Fiction',
    },
    {
      director: 'Peter Jackson',
      year: 2001,
      genres: ['Adventure', 'Drama', 'Fantasy'],
      title: 'The Lord of the Rings: The Fellowship of the Ring',
    },
    {
      director: 'David Fincher',
      year: 1999,
      genres: ['Drama'],
      title: 'Fight Club',
    },
    {
      director: 'Robert Zemeckis',
      year: 1994,
      genres: ['Drama', 'Romance'],
      title: 'Forrest Gump',
    },
  ];

  it('getTitles should return the titles of the movies', function () {
    expect(getTitles(movies)).toEqual([
      'Inception',
      'Pulp Fiction',
      'The Lord of the Rings: The Fellowship of the Ring',
      'Fight Club',
      'Forrest Gump',
    ]);
    expect(getTitles(emptyMovies)).toBeNull();
  });

  it('getTitlesAndDirectors should return the titles and directors of the movies', function () {
    expect(getTitlesAndDirectors(movies)).toEqual([
      { title: 'Inception', director: 'Christopher Nolan' },
      { title: 'Pulp Fiction', director: 'Quentin Tarantino' },
      {
        title: 'The Lord of the Rings: The Fellowship of the Ring',
        director: 'Peter Jackson',
      },
      { title: 'Fight Club', director: 'David Fincher' },
      { title: 'Forrest Gump', director: 'Robert Zemeckis' },
    ]);
    expect(getTitlesAndDirectors(emptyMovies)).toBeNull();
  });

  it('getTitlesAfter2000 should return the titles of the movies released after the year 2000', function () {
    expect(getTitlesAfter2000(movies)).toEqual([
      'Inception',
      'The Lord of the Rings: The Fellowship of the Ring',
    ]);
    expect(getTitlesAfter2000(emptyMovies)).toBeNull();
  });

  it('getNumberOfGenres should return the number of genres of each movie', function () {
    expect(getNumberOfGenres(movies)).toEqual([2, 2, 3, 1, 2]);
    expect(getNumberOfGenres(emptyMovies)).toBeNull();
  });
  it('EXTRA: getNumberOfGenres should return the number of genres of each movie', function () {
    expect(
      getNumberOfGenres([
        {
          director: '',
          year: 0,
          genres: [],
          title: '',
        },
        {
          director: 'Quentin Tarantino',
          year: 1994,
          genres: ['Crime', 'Drama'],
          title: 'Pulp Fiction',
        },
        {
          director: 'Peter Jackson',
          year: 2001,
          genres: ['Adventure', 'Drama', 'Fantasy'],
          title: 'The Lord of the Rings: The Fellowship of the Ring',
        },
        {
          director: 'David Fincher',
          year: 1999,
          genres: ['Drama'],
          title: 'Fight Club',
        },
        {
          director: 'Robert Zemeckis',
          year: 1994,
          genres: ['Drama', 'Romance'],
          title: 'Forrest Gump',
        },
      ])
    ).toEqual([0, 2, 3, 1, 2]);
    expect(
      getNumberOfGenres([
        {
          director: 'Christopher Nolan',
          year: 2010,
          genres: ['Sci-Fi', 'Thriller'],
          title: 'Inception',
        },
        {
          director: 'Quentin Tarantino',
          year: 1994,
          title: 'Pulp Fiction',
        },
        {
          director: 'Peter Jackson',
          year: 2001,
          genres: ['Adventure', 'Drama', 'Fantasy'],
          title: 'The Lord of the Rings: The Fellowship of the Ring',
        },
        {
          director: 'David Fincher',
          year: 1999,
          genres: ['Drama'],
          title: 'Fight Club',
        },
        {
          director: 'Robert Zemeckis',
          year: 1994,
          genres: ['Drama', 'Romance'],
          title: 'Forrest Gump',
        },
      ])
    ).toEqual([2, 0, 3, 1, 2]);
  });

  it('filterMoviesAfter2000 should return the movies released after the year 2000', function () {
    expect(filterMoviesAfter2000(movies)).toEqual([
      {
        director: 'Christopher Nolan',
        year: 2010,
        genres: ['Sci-Fi', 'Thriller'],
        title: 'Inception',
      },
      {
        director: 'Peter Jackson',
        year: 2001,
        genres: ['Adventure', 'Drama', 'Fantasy'],
        title: 'The Lord of the Rings: The Fellowship of the Ring',
      },
    ]);
    expect(filterMoviesAfter2000(emptyMovies)).toEqual([]);
  });

  it('filterNolanMovies should return the movies directed by Christopher Nolan', function () {
    expect(filterNolanMovies(movies)).toEqual([
      {
        director: 'Christopher Nolan',
        year: 2010,
        genres: ['Sci-Fi', 'Thriller'],
        title: 'Inception',
      },
    ]);
    expect(filterNolanMovies(emptyMovies)).toEqual([]);
  });
  it('EXTRA: filterNolanMovies should return the movies directed by Christopher Nolan.', function () {
    expect(
      filterNolanMovies([
        {
          director: 'Christopher nolan',
          year: 2010,
          genres: ['Sci-Fi', 'Thriller'],
          title: 'Inception',
        },
        {
          director: 'Quentin Tarantino',
          year: 1994,
          genres: ['Crime', 'Drama'],
          title: 'Pulp Fiction',
        },
        {
          director: 'Peter Jackson',
          year: 2001,
          genres: ['Adventure', 'Drama', 'Fantasy'],
          title: 'The Lord of the Rings: The Fellowship of the Ring',
        },
        {
          director: 'David Fincher',
          year: 1999,
          genres: ['Drama'],
          title: 'Fight Club',
        },
        {
          director: 'Robert Zemeckis',
          year: 1994,
          genres: ['Drama', 'Romance'],
          title: 'Forrest Gump',
        },
      ])
    ).toEqual([
      {
        director: 'Christopher nolan',
        year: 2010,
        genres: ['Sci-Fi', 'Thriller'],
        title: 'Inception',
      },
    ]);
  });
  it('filterDramaMovies should return drama movies', function () {
    expect(filterDramaMovies(movies)).toEqual([
      {
        director: 'Quentin Tarantino',
        year: 1994,
        genres: ['Crime', 'Drama'],
        title: 'Pulp Fiction',
      },
      {
        director: 'Peter Jackson',
        year: 2001,
        genres: ['Adventure', 'Drama', 'Fantasy'],
        title: 'The Lord of the Rings: The Fellowship of the Ring',
      },
      {
        director: 'David Fincher',
        year: 1999,
        genres: ['Drama'],
        title: 'Fight Club',
      },
      {
        director: 'Robert Zemeckis',
        year: 1994,
        genres: ['Drama', 'Romance'],
        title: 'Forrest Gump',
      },
    ]);
    expect(filterDramaMovies(emptyMovies)).toEqual([]);
  });

  it('sortByYear should sort the movies by release year in ascending order', function () {
    expect(sortByYear([...movies])).toEqual([
      {
        director: 'Robert Zemeckis',
        year: 1994,
        genres: ['Drama', 'Romance'],
        title: 'Forrest Gump',
      },
      {
        director: 'Quentin Tarantino',
        year: 1994,
        genres: ['Crime', 'Drama'],
        title: 'Pulp Fiction',
      },
      {
        director: 'David Fincher',
        year: 1999,
        genres: ['Drama'],
        title: 'Fight Club',
      },
      {
        director: 'Peter Jackson',
        year: 2001,
        genres: ['Adventure', 'Drama', 'Fantasy'],
        title: 'The Lord of the Rings: The Fellowship of the Ring',
      },
      {
        director: 'Christopher Nolan',
        year: 2010,
        genres: ['Sci-Fi', 'Thriller'],
        title: 'Inception',
      },
    ]);
    expect(sortByYear(emptyMovies)).toBeNull();
  });

  it('sortByNumberOfGenres should sort the movies by the number of genres in descending order', function () {
    expect(sortByNumberOfGenres([...movies])).toEqual([
      {
        director: 'Peter Jackson',
        year: 2001,
        genres: ['Adventure', 'Drama', 'Fantasy'],
        title: 'The Lord of the Rings: The Fellowship of the Ring',
      },
      {
        director: 'Christopher Nolan',
        year: 2010,
        genres: ['Sci-Fi', 'Thriller'],
        title: 'Inception',
      },
      {
        director: 'Quentin Tarantino',
        year: 1994,
        genres: ['Crime', 'Drama'],
        title: 'Pulp Fiction',
      },
      {
        director: 'Robert Zemeckis',
        year: 1994,
        genres: ['Drama', 'Romance'],
        title: 'Forrest Gump',
      },
      {
        director: 'David Fincher',
        year: 1999,
        genres: ['Drama'],
        title: 'Fight Club',
      },
    ]);
    expect(sortByNumberOfGenres(emptyMovies)).toBeNull();
  });

  it("sortByDirector should sort the movies by the director's name in alphabetical order", function () {
    expect(sortByDirector([...movies])).toEqual([
      {
        director: 'Christopher Nolan',
        year: 2010,
        genres: ['Sci-Fi', 'Thriller'],
        title: 'Inception',
      },
      {
        director: 'David Fincher',
        year: 1999,
        genres: ['Drama'],
        title: 'Fight Club',
      },
      {
        director: 'Peter Jackson',
        year: 2001,
        genres: ['Adventure', 'Drama', 'Fantasy'],
        title: 'The Lord of the Rings: The Fellowship of the Ring',
      },
      {
        director: 'Quentin Tarantino',
        year: 1994,
        genres: ['Crime', 'Drama'],
        title: 'Pulp Fiction',
      },
      {
        director: 'Robert Zemeckis',
        year: 1994,
        genres: ['Drama', 'Romance'],
        title: 'Forrest Gump',
      },
    ]);
    expect(sortByDirector(emptyMovies)).toBeNull();
  });
  it('getTotalNumberOfGenres should return the total number of genres in all movies', function () {
    expect(
      getTotalNumberOfGenres([
        {
          director: 'David Fincher',
          year: 1999,
          genres: ['Drama'],
          title: 'Fight Club',
        },
      ])
    ).toBe(1);
    expect(getTotalNumberOfGenres(movies)).toBe(10);
    expect(getTotalNumberOfGenres(emptyMovies)).toBe(0);
  });

  it('getMovieWithLongestTitle should return the movie with the longest title', function () {
    expect(getMovieWithLongestTitle(movies)).toBe(
      'The Lord of the Rings: The Fellowship of the Ring'
    );
    expect(getMovieWithLongestTitle(emptyMovies)).toBe('');
  });

  it('getNumberOfMoviesPerYear should return the number of movies released each year', function () {
    expect(getNumberOfMoviesPerYear(movies)).toEqual({
      1994: 2,
      1999: 1,
      2001: 1,
      2010: 1,
    });
    expect(getNumberOfMoviesPerYear(emptyMovies)).toBeNull();
  });

  it('findFirstMovieByTarantino should return the first movie directed by Quentin Tarantino', function () {
    expect(findFirstTarantinoMovie(movies)).toEqual({
      director: 'Quentin Tarantino',
      year: 1994,
      genres: ['Crime', 'Drama'],
      title: 'Pulp Fiction',
    });
    expect(findFirstTarantinoMovie(emptyMovies)).toBeNull();
  });

  it('findFirstAdventureMovie should return the first adventure movie', function () {
    expect(findFirstAdventureMovie(movies)).toEqual({
      director: 'Peter Jackson',
      year: 2001,
      genres: ['Adventure', 'Drama', 'Fantasy'],
      title: 'The Lord of the Rings: The Fellowship of the Ring',
    });
    expect(findFirstAdventureMovie(emptyMovies)).toBeNull();
  });

  it('findFirstMovieBefore2000 should return the first movie released before the year 2000', function () {
    expect(findFirstMovieBefore2000(movies)).toEqual({
      director: 'Quentin Tarantino',
      year: 1994,
      genres: ['Crime', 'Drama'],
      title: 'Pulp Fiction',
    });
    expect(findFirstMovieBefore2000(emptyMovies)).toBeNull();
  });

  it('getNumberOfNolanDramaMovies should return the number of movies directed by Christopher Nolan that are of the Drama genre', function () {
    expect(getNumberOfNolanDramaMovies(movies)).toBe(0);
    expect(getNumberOfNolanDramaMovies(emptyMovies)).toBe(0);
  });

  it('getTitleOfOldestSciFiMovie should return the title of the oldest movie that is of the Sci-Fi genre', function () {
    expect(getTitleOfOldestSciFiMovie(movies)).toBe('Inception');
    expect(getTitleOfOldestSciFiMovie(emptyMovies)).toBeNull();
  });

  it('getNumberOfUniqueGenres should return the number of unique genres in all movies', function () {
    expect(getNumberOfUniqueGenres(movies)).toBe(7);
    expect(getNumberOfUniqueGenres(emptyMovies)).toBe(0);
  });

  it('getDirectorWithMostMovies should return the director who has directed the most movies', function () {
    expect(getDirectorWithMostMovies(movies)).toBe('Christopher Nolan');
    expect(getDirectorWithMostMovies(emptyMovies)).toBeNull();
  });

  it('getYearWithMostMovies should return the year with the most movies released', function () {
    expect(getYearWithMostMovies(movies)).toBe(1994);
    expect(getYearWithMostMovies(emptyMovies)).toBeNull();
  });
});
