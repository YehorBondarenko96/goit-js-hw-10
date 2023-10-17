import {fetchBreeds, fetchCatByBreed, breedSelect, catInfo, error, loader} from "./cat-api";


breedSelect.classList.add("visually-hidden");
loader.classList.remove("visually-hidden");

fetchBreeds()
.then((breeds) => {
    breedSelect.classList.remove("visually-hidden");
    loader.classList.add("visually-hidden");
    contentSelect (breeds)})
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
    loader.classList.remove("visually-hidden");
    catInfo.classList.add("visually-hidden");
const breedId = breedSelect.value;
fetchCatByBreed(breedId)
.then((breed) => {
    loader.classList.add("visually-hidden");
    catInfo.classList.remove("visually-hidden");
    responseFormatting(breed)})
.catch((error) => console.log(error));
});