const API_KEY = "0078c9bd228db13d42af4fdae4c015e8";
const BASE_URL = "https://api.themoviedb.org/3/";

export const getPopularMovies = async () => {
  const response = await fetch(
    `${BASE_URL}/movie/popular?api_key = ${API_KEY}`
  );
  const data = response.json();
  return data.results;
};
export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key = ${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  const data = response.json();
  return data.results;
};
