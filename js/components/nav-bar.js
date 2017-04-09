import React from 'react';
import {connect} from 'react-redux';
import { Navbar } from 'react-bootstrap';

import * as actions from '../actions/index';

export class NavBar extends React.Component {
  constructor(props){
    super(props);
    this.newGame = this.newGame.bind(this);
  }
  newGame(event){
    event.preventDefault();
    this.props.dispatch(actions.fetchRecord());
    this.props.dispatch(actions.newGame());
  }
  render() {
    return(
      <Navbar>
        <ul>
        <a href="" onClick={this.newGame}><li>+ NEW GAME</li></a>
        </ul>
    </Navbar>
    )
  }
}

export default connect()(NavBar);
