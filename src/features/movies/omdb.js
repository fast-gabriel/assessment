const baseUri = 'https://www.omdbapi.com/?apikey=7d3b58e2&type=movie';
const missingPosterUrl = 'https://www.2queue.com/2queue/wp-content/uploads/sites/6/tdomf/4299/movie-poster-coming-soon.png';

export async function search(searchTerm, pageNumber = 1) {
  const url = `${baseUri}&s=${encodeURIComponent(searchTerm)}`;

  const response = await fetch(url);
  const { Search, Response, totalResults } = await response.json();

  if (Response !== 'True') {
    return {
      totalResults: 0,
      movies: []
    };
  }

  return {
    movies: Search.map(movie => {
      if (movie.Poster === 'N/A') {
        movie.Poster = missingPosterUrl
      }
      return movie;
    }),
    totalResults
  };
}
