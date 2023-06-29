const API_URL = "https://api.themoviedb.org/3";
const API_KEY = "9b33f5d9a5751882a7ce784a73447ec7";

export const getPopularMovies = async () => {
  const response = await fetch(
    `${API_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
  );
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${API_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1`
  );
  const data = await response.json();
  return data.results;
};
