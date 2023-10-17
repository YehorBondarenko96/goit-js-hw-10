import {fetchBreeds, fetchCatByBreed} from "./cat-api";
import axios from "axios";

axios.defaults.headers.common["x-api-key"] = "live_gONgQo0r8pRVrAhrA5QTR1Ww1FRbzow4GXfRe46tMqFj9qa5gaIVBGIl5OgXa2OU";

const breedSelect = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');
const catInfo = document.querySelector('.cat-info');

fetchBreeds()
.then((breeds) => contentSelect (breeds))
.catch((error) => console.log(error));
    
function contentSelect (breeds){
    const item = breeds.map(
        ({id, name}) => {
            return `<option 
            value = "${id}">${name}
            </option>`
        }
    ).join("");
    breedSelect.innerHTML = item;
};

breedSelect.addEventListener("change", () => {
const breedId = breedSelect.value;
console.log(breedId);
fetchCatByBreed(breedId)
.then((breed) => catInfo.prepend(breed))
.catch((error) => console.log(error));
});