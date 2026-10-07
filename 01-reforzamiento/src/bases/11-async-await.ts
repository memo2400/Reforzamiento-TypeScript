import type { GiphyRandomResponse } from "../data/giphy.response";      // aqui las dos importaciones son tipyes



const API_KEY = "gRgNqw4yeIKx10AFZVloyMry7cSrFVMQ";

const myRequest = fetch (`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`);

const getRandomGifUrl = async () => {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`,
    );

    // el punto json es otra promesa, por eso se usara await, desestructuro la respuesta
    // evitar data.data  
    const { data } : GiphyRandomResponse= await response.json();

    return data.images.original.url;

}

getRandomGifUrl().then( (url) =>{ CreateImage (url)} )

const CreateImage = (url: string) => {
    const imgElement = document.createElement('img');
    imgElement.src = url;
    document.body.append(imgElement);

}
