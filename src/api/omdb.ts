import axios from "axios";

export async function getMovies() {
  try {
    const response = await axios.get(
      "http://www.omdbapi.com/?apikey=d572c55e&s=batman"
    );
    return response.data.Search;
  } catch (error) {
    console.error(error);
  }
}

export async function getDetailMovie(id: string) {
  try {
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=d572c55e&i=${id}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
