import React from 'react';
import { useHistory } from 'react-router';

export default function ColorAdd({ getColors, setColors }) {

    const history = useHistory();
    const colorList = getColors();
    const handleSubmit = (evt) => {
        evt.preventDefault();
        const name = document.getElementById("name").value;
        const color = document.getElementById("color").value;

        if (colorList) {
            setColors([...colorList,
            {
                name,
                color
            }]);
        } else {
            setColors([{ name, color }])
        }
        history.push('/colors')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Add a color</h2>
                <br />
                <label htmlFor="name">Color name: </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="e.g.: pink, salmon, bubblegum, etc."
                />
                <label htmlFor="color">Pick your color: </label>
                <input
                    type="color"
                    name="color"
                    id="color"
                />
                <button type="submit" onSubmit={handleSubmit}>Add color!</button>
            </form>
        </div>
    )


}