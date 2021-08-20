import React from 'react';
import { Link } from 'react-router-dom';

export default function ColorList({ getColors }) {

    const colorList = getColors();

    return (
        <div>
            <div>
                <form>
                    <h2>Add a new color!?!?!</h2><br />
                    <Link to="/colors/new">
                        Add one!
                    </Link>
                </form>
            </div>
            <div>
                <h3>
                    Your current colors are:
                </h3>
                {colorList ? colorList.map(color => <><Link to={`/colors/${color.name}`}>{color.name}</Link><br /></>) :
                    "You don't have any colors yet!"}
            </div>
        </div>
    )

}