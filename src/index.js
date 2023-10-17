import {fetchBreeds, fetchCatByBreed} from "./cat-api";

const breedSelect = document.querySelector('.breed-select');
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

function responseFormatting (a) {
    const itemInfo = a.map(
        ({url, breeds:{0:{name, description, temperament}}}) => {
            return `<img class = "img" src = '${url}' alt ='${name}'/>
                    <div class = "text-info">
                    <h1>${name}</h1>
                    <p>${description}</p>
                    <p><b>Temperament: </b>${temperament}</p>
                    </div>`
        }
    ).join("");
    catInfo.innerHTML = itemInfo;
}

breedSelect.addEventListener("change", () => {
const breedId = breedSelect.value;
fetchCatByBreed(breedId)
.then((breed) => responseFormatting(breed))
.catch((error) => console.log(error));
});