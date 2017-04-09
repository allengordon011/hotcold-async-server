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

    }
    // componentWillMount(){
    //     this.props.dispatch(fetchRecord());
    // }
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
