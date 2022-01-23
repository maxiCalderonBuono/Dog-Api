

const getBreeds = async () => {
  
    const url =  "https://api.thedogapi.com/v1/breeds"

    const res = await fetch(url);

    if(!res.ok) {

        const {status, url} = res

        throw new Error (`${status}- fetching ${url}` )
    }

    const breeds = await res.json();

    return breeds


};

export default getBreeds;
