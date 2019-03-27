import React, { Component } from 'react';
import { Image, Button, Container, Col, Row, Modal } from 'react-bootstrap';
import cats from './cats';
import monsters from './monsters';
import './Home.css';

class Home extends Component {
    constructor(props) {
        super(props)

        this.handleKittyClose = this.handleKittyClose.bind(this);
        this.handleKittyShow = this.handleKittyShow.bind(this);
        this.handleMonsterClose = this.handleMonsterClose.bind(this);
        this.handleMonsterShow = this.handleMonsterShow.bind(this);

        this.state = {
            cats_array: {cats},
            monsters_array: {monsters},
            kitty_show: false,
            monster_show: false,
            kitty_number: 0,
            monster_number: 0
        }
    }

    componentDidMount() {
        this.getNewPair();
    }

    getNewPair() {
        const kitty_min = 0;
        const kitty_max = 12; 
        const monster_min = 0;
        const monster_max = 11;
        const kitty_rand = Math.round(kitty_min + Math.random() * (kitty_max - kitty_min));
        const monster_rand = Math.round(monster_min + Math.random() * (monster_max - monster_min));
        this.setState({
            kitty_number: kitty_rand,
            monster_number: monster_rand
        });
    }

    handleKittyClose() {        
        this.setState({ kitty_show: false });
        this.getNewPair();
    }

    handleMonsterClose() {
        this.setState({ monster_show: false });
        this.getNewPair();
    }

    handleKittyShow() {
        this.setState({ kitty_show: true });
    }

    handleMonsterShow() {
        this.setState({ monster_show: true });
    }

    render() {
        console.log(this.state.kitty_number);
        console.log(this.state.monster_number);
        return(
            <div className="Home">
                <Container>
                    <Row>
                        <Col className="pictures"><Image src={this.state.cats_array.cats[this.state.kitty_number].cat_url} thumbnail className='cat-pic' /></Col> 
                        <Col className="pictures"><Image src={this.state.monsters_array.monsters[this.state.monster_number].monster_url} thumbnail className='monster-pic' /></Col>
                    </Row>
                    <Row className="buttons">
                        <Col><Button variant="success" onClick={this.handleKittyShow}>Save the kitty!</Button></Col>
                        <Col><Button variant="danger" onClick={this.handleMonsterShow}>Save the monster!</Button></Col>
                    </Row>
                </Container>
                <Modal show={this.state.kitty_show} onHide={this.handleKittyClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.state.cats_array.cats[this.state.kitty_number].name} SAVED!!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>You&apos;re such a good person for saving the kitty!</Modal.Body>
                </Modal>
                <Modal show={this.state.monster_show} onHide={this.handleMonsterClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>HOW COULD YOU?!?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>I can&apos;t believe you saved the monster! You&apos;re the monster!</Modal.Body>
                </Modal>
            </div>
        );
    }
}

export default Home;