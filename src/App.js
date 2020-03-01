import React, {useState, useEffect} from 'react';
import fetch from "node-fetch";

function App() {

  const [animalImages, setAnimalImages] = useState([]);

  const key = '15419233-8d28ff99c4a3abd7ff68c5e3b';

  function getImages(color, noun) {
    fetch(`https://pixabay.com/api/?key=${key}&q=${color}+${noun}&image_type=photo`)
    .then(res => res.json())
    .then(json => {
      console.log(json)

      setAnimalImages(previousData => {
        if (previousData) {
          console.log("previous data exists");
          return json.hits.concat(previousData);
        } else {
          return json.hits;
        }
      });

    })
  }
 

  useEffect(() => {
    getImages("yellow", "animal");
    getImages("red", "rock");
    getImages("green", "plant");
    getImages("happy", "cat");
  }, [])

  return (
    <div className="App container">
      <h1>Pix 3</h1>
      {animalImages.map((animal, index) => 
      <img 
        key={index} 
        src={animal.previewURL} 
        alt="animal" />
      )}

    </div>
  );
}

export default App;
