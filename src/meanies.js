import React, { Component } from 'react';
import monsters from './monsters';
import { Image } from 'react-bootstrap';
import './meanies.css';

class Meanies extends Component {
    constructor(props) {
        super(props)
        this.state = {
            monsters_array: {monsters}
        }
    }

    render() {
        return(
            <div>
                <ul className='meanies-list'>
                {this.state.monsters_array.monsters.map((monster, i) =>                    
                    <li key={i}><Image className="meanies-picture" thumbnail src={monster.monster_url} key={i} /> {monster.name}</li>
                    )}
                </ul>
            </div>
        );
    }
}

export default Meanies;