import { useParams } from "react-router";

export default function DogDetails({ doggos }) {

    const { name } = useParams();

    const dog = doggos.dogs.filter(dog => dog.name === name)[0]

    return (
        <>
            <h1>HI!</h1>
            <img src={`./../imgs/${dog.src}`} /><br />
            <p> This is {dog.name}. They are {dog.age} years old.{dog.facts.map(fact => ` ${fact}`)}</p>
        </>
    )
}
