import React from 'react';
import {connect} from 'react-redux';

import GuessInput from './guess-input';
import Feedback from './feedback';
import GuessCount from './guess-count';
import PrevGuesses from './prev-guesses';
import NavBar from './nav-bar';
import { fetchRecord } from '../actions';

import {Grid, Col, Row} from 'react-bootstrap';

export class Game extends React.Component {
    constructor(props) {
        super(props);
        // console.log('game props: ', props)

    }
    componentDidMount(){
        // console.log('guessed numbers length: ', this.props.guessedNumbers.length);
        // console.log('fetched record: ', this.props.dispatch(fetchRecord()));
    }
    render() {
        return (
            <div>
                <Grid>
                    <Row>
                        <NavBar/>
                    </Row>
                    <Row>
                        <h1 id="title">HOT or COLD</h1>
                    </Row>
                    <Row>
                        <Feedback feedback={this.props.feedback} record={this.props.record}/>
                    </Row>
                    <Row>
                        <GuessInput/>
                    </Row>
                    <Row>
                        <GuessCount count={this.props.count}/>
                        <PrevGuesses guessedNumbers={this.props.guessedNumbers}/>
                    </Row>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({count: state.count, feedback: state.feedback, guessedNumbers: state.guessedNumbers, record: state.record});

export default connect(mapStateToProps)(Game)

//component with html layout
//nav bar at top with 2 elements: WHAT? (left) and +NEW GAME (right)
//title HOT or COLD
//container for the game elements
//feedback element banner
//guess input field
//guess count field
//prev guesses displayed in <ul>
