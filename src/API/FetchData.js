import axios from 'axios';

axios.default.Base_URL = "https://pixabay.com/api/";
axios.default.params = {
    key: "30790248-497145c5d3b0c6576ca9c953f",
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12
}
export const FetchData = async (textSearch, page) => {
             const responce = await axios.get(`?q=${textSearch}&${page}`);
    return responce.data;         
}

export function needValues(data) {
    return data.map(({ id, tags, largeImageURL, webformatURL }) => ({
      id,
      tags,
      largeImageURL,
      webformatURL,
    }));
  }