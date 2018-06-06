import React from 'react';
import PropTypes from 'prop-types';

import {Players} from './../api/players';

export default class Player extends React.Component {
	render() {
      return(

		    <div className="item" key ={this.props.player._id}>
		      <p>
		       {this.props.player.name} has {this.props.player.score} points.
		      </p>
			     <button className="button button--round" onClick={() => {
			     	Players.update(this.props.player._id, {$inc: {score: -1}});
			     }}>-1</button>
			     <button className="button button--round" onClick={() => {
			     	Players.update(this.props.player._id, {$inc: {score: +1}});
			     }}>+1</button>
			     <button className="button button--round" onClick={() => 
		     	Players.remove(this.props.player._id)}>X</button>
		    </div>

      );
	}
};

//Set up prop types 

Player.propTypes = {
  // player: React.PropTypes.object.isRequired
  // players: React.PropTypes.array.isRequired for playerlist
};
