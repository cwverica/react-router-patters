import React from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';

export default function ColorDisplay({ getColors }) {

    const history = useHistory();
    const pColor = useParams().color;
    const colorList = getColors();
    const colorObj = colorList.filter(color => color.name === pColor)[0];
    let style;

    if (colorObj === undefined) {
        history.push('/colors');
        return null;
    } else {
        style = {
            "background-color": colorObj.color,
            "color": "white"
        }

        return (
            <div style={style}>
                <h2> This is the color {colorObj.name}. Isn't it pretty?</h2>
                <br /><br />
                <Link to="/color">Return to home.</Link>
            </div >
        )
    }
}