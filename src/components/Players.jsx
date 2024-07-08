import React from "react";
import PropTypes from "prop-types";
function Players({ imgUrl, playerName, country, rank, hand, age }) {
  return (
    <div id="player-item">
      <img src={imgUrl} alt="" />
      <h1> {playerName}</h1>
      <h3> {country}</h3>
      <h4> RANK: {rank} 🌟</h4>
      <h4>Hand: {hand}</h4>
      <h4>Age: {age}</h4>
    </div>
  );
}
Players.defaultProps = {
  imgUrl:
    "https://cdn3d.iconscout.com/3d/premium/thumb/fencing-5353107-4468769.png?f=webp",
  playerName: "N/A",
  country: "Nan",
  rank: "Nan",
  hand: "L/R",
  age: "Nan",
};

Players.propTypes = {
  imgUrl: PropTypes.string,
  playerName: PropTypes.string,
  country: PropTypes.string,
  rank: PropTypes.number,
  hand: PropTypes.string,
  age: PropTypes.number,
};
export default Players;
