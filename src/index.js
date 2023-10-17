import {fetchBreeds, fetchCatByBreed} from "./cat-api";

const breedSelect = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
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
    console.log(breeds);
    breedSelect.innerHTML = item;
};

function responseFormatting (a) {
    catInfo.prepend(a)
}

breedSelect.addEventListener("change", () => {
const breedId = breedSelect.value;
console.log(breedId);
fetchCatByBreed(breedId)
.then((breed) => console.log(breed))
.catch((error) => console.log(error));
});