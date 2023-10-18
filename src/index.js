import {fetchBreeds, fetchCatByBreed, breedSelect, catInfo, error, loader, errorLoader} from "./cat-api";
import SlimSelect from 'slim-select';

loader.textContent = "";

breedSelect.classList.add("visually-hidden");
loader.classList.remove("visually-hidden");
error.classList.add("visually-hidden");


fetchBreeds()
.then((breeds) => {
    breedSelect.classList.remove("visually-hidden");
    loader.classList.add("visually-hidden");
    contentSelect (breeds)})
.catch(() => errorLoader());
    
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
    loader.classList.remove("visually-hidden");
    catInfo.classList.add("visually-hidden");
const breedId = breedSelect.value;
fetchCatByBreed(breedId)
.then((breed) => {
    loader.classList.add("visually-hidden");
    catInfo.classList.remove("visually-hidden");
    responseFormatting(breed)})
.catch(() => errorLoader());
});

const list = new SlimSelect({
    select: breedSelect,
    placeholder: 'Choose a breed',
    showSearch: false,
});