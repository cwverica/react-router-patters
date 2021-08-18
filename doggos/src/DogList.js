import React from 'react';
import { Link } from 'react-router-dom';

function DogList({ doggos }) {

    const [dog, setDog] = useState('');

    function changeLink(evt) {
        setDog(evt.target.value)
    }


    return (
        <div className="DogList-main">

            <label htmlFor="dogz">Hi, here are the doggos you can view!</label>
            <br />
            <select name="dogz" id="dogz" onChange={changeLink}>
                {doggos.dogs.map(dog => {
                    return (
                        <option value={dog.name}>{dog.name}</option>
                    )
                })}
            </select>
            <br />
            <Link to={`/dogs/${dog}`}>View {dog ? dog : 'doggo'}!</Link>
        </div>
    )

}

export default DogList;