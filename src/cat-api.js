import axios from "axios";

axios.defaults.headers.common["x-api-key"] = "live_gONgQo0r8pRVrAhrA5QTR1Ww1FRbzow4GXfRe46tMqFj9qa5gaIVBGIl5OgXa2OU";


const error = document.querySelector('.error');

export const fetchBreeds = () =>
    axios.get("https://api.thecatapi.com/v1/breeds")
    .then(
        (response) => {
            if (!response.data){
                throw new 
                Error(error.textContent);
            }
            return response.data;
        }
    );

    export const fetchCatByBreed = (breedId) =>
    axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
    .then(
        (response) => {
            if (!response.data){
                throw new
                Error(error.textContent);
            }
            return response.data;
        }
    );
    
    
