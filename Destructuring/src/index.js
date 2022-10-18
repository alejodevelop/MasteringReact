// import animals, { useAnimals } from './data';


// console.log(animals);

// const [cat, dog] = animals;
// var cat = animals[0];
// var dog = animals[1];

// console.log(cat);
// console.log(dog);

// console.log(useAnimals(cat));

// const [animal, makeSound] = useAnimals(cat);
// console.log(animal);
// makeSound();

// const { name, sound } = cat;

// cat.name
// cat.sound

// console.log(name);
// console.log(sound);

// se le asigna un nombre diferente al momento de referirse al elemento con ese nombre dentro del objeto
// const { name: dogName, sound: dogSound } = dog;

// console.log(dogName);
// console.log(dogSound);


// changing the value of atributes inside the object cat 
// const { name = "Fluffy", sound = "purr" } = cat;

// console.log(name);
// console.log(sound);

// const { name, sound, feedingRequirements: { food, water } } = cat;

// console.log(food);
// console.log(water);

import React from 'react';
import ReactDOM from 'react-dom';
import cars from './practice';


const [honda, tesla] = cars;

const { coloursByPopularity: [teslaTopColour] } = tesla;

const { coloursByPopularity: [hondaTopColour] } = honda;

const { speedStats: { topSpeed: teslaTopSpeed } } = tesla;

const { speedStats: { topSpeed: hondaTopSpeed } } = honda;



// CHALLENGE: uncomment the code below and see the car stats rendered
// import React from "react";
// import ReactDOM from "react-dom";

ReactDOM.render(
    <table>
        <tr>
            <th>Brand</th>
            <th>Top Speed</th>
        </tr>
        <tr>
            <td>{tesla.model}</td>
            <td>{teslaTopSpeed}</td>
            <td>{teslaTopColour}</td>
        </tr>
        <tr>
            <td>{honda.model}</td>
            <td>{hondaTopSpeed}</td>
            <td>{hondaTopColour}</td>
        </tr>
    </table>,
    document.getElementById("root")
);
