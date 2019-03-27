import React, { Component } from 'react';
import cats from './cats';
import { Image } from 'react-bootstrap';
import './kitties.css';

class Kitties extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cats_array: {cats}
        }
    }

    render() {
        return(
            <div>
                <ul className='kitties-list'>
                {this.state.cats_array.cats.map((cat, i) =>                    
                    <li key={i}><Image className="kitties-picture" thumbnail src={cat.cat_url} key={i} /> {cat.name}</li>
                    )}
                </ul>
            </div>
        );
    }
}

export default Kitties;