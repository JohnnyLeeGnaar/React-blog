import React from "react";
import { Link } from "react-router-dom";

const Post = props => {
  return (
    <div>
      <h2>{props.match.params.number}</h2>
      <Link to="/posts">{"go back"}</Link>
    </div>
  );
};

export default Post;

/*
const Player = (props) => {
  const player = PlayerAPI.get(
    parseInt(props.match.params.number, 10)
  )
  if (!player) {
    return <div>Sorry, but the player was not found</div>
  }
  return (
    <div>
      <h1>{player.name} (#{player.number})</h1>
      <h2>Position: {player.position}</h2>
      <Link to='/roster'>Back</Link>
    </div>
  )
}

export default Player
*/
