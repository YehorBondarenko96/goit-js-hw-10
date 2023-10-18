import axios from "axios";

axios.defaults.headers.common["x-api-key"] = "live_gONgQo0r8pRVrAhrA5QTR1Ww1FRbzow4GXfRe46tMqFj9qa5gaIVBGIl5OgXa2OU";


export const error = document.querySelector('.error');
export const loader = document.querySelector('.loader');
export const breedSelect = document.querySelector('.breed-select');
export const catInfo = document.querySelector('.cat-info');


loader.classList.add("visually-hidden");

export const errorLoader = () => {
    breedSelect.classList.add("visually-hidden");
    catInfo.classList.add("visually-hidden");
    loader.classList.add("visually-hidden");
    error.classList.remove("visually-hidden")
};



export const fetchBreeds = () =>
    axios.get("https://api.thecatapi.com/v1/breeds")
    .then(
        (response) => {
            if (!response.data){
                throw new 
                Error(errorLoader());
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
                Error(errorLoader());
            } else if (response.data.length === 0){
                errorLoader();
            } else {
            return response.data;
            }
        }
    );