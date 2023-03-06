const Base_URL = "https://pixabay.com/api/";
const API_Key = "30790248-497145c5d3b0c6576ca9c953f";

export const FetchData = (searchText) => {

    return(
           fetch(`${Base_URL}?key=${API_Key}&q=${searchText}&image_type=photo&orientation=horizontal&per_page=12`)
    )
}