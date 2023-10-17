export const fetchBreeds = () =>
    fetch("https://api.thecatapi.com/v1/breeds")
    .then(
        (response) => {
            if (!response.ok){
                throw new 
                Error(response.status);
            }
            return response.json();
        }
    );

    export const fetchCatByBreed = (breedId) =>
    fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
    .then(
        (response) => {
            if (!response.ok){
                throw new
                Error(response.status);
            }
            return response.json();
        }
    );
    
    
