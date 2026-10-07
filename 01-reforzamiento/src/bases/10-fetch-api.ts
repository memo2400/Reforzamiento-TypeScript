import type { GiphyRandomResponse } from "../data/giphy.response";      // aqui las dos importaciones son tipyes



const API_KEY = "gRgNqw4yeIKx10AFZVloyMry7cSrFVMQ";

const myRequest = fetch (`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`);

// este es modo Enredado
// myRequest.then( (response) => {
//     // console.log(response);
//     response.json().then( (data) => {
//         console.log(data);   
//     })
//     }
// ).catch( (err) => {
//     console.error(err);
//     } 
// )

// al user retornos rapidos, podemos encadenar respuestas then
myRequest.then( (response) => response.json()
).then ( ({data}: GiphyRandomResponse) => {
    // const imageUrl = data.data.images.original.
    const imageUrl = data.images.original.url;
    console.info (imageUrl);
    CreateImage(imageUrl);


} 
)
.catch( (err) => {
    console.error(err);
    }
)

const CreateImage = (url: string) => {
    const imgElement = document.createElement('img');
    imgElement.src = url;

    document.body.append(imgElement);

}
