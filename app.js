const players = [
  { name: "Guil", score: 50, id: 1 },
  { name: "Treasure", score: 85, id: 2 },
  { name: "Ashley", score: 95, id: 3 },
  { name: "James", score: 80, id: 4 },
]

const Header = (props) => (
  <header>
    <h1>{ props.title }</h1>
    <span className="stats">Players: { props.totalPlayers }</span>
  </header>
);

class Player extends React.Component {
  render() {
    const { name, score } = this.props;
    return (
      <div className="player">
        <span className="player-name">{ name }</span>

        <Counter score={score} />
      </div>
    );
  }
};

class Counter extends React.Component {
  render() {
    const { score } = this.props;

    return (
      <div className="counter">
        <button className="counter-action decrement"> - </button>
        <span className="counter-score">{ score }</span>
        <button className="counter-action increment"> + </button>
      </div>
    );
  }
};

class App extends React.Component {
  render() {
    const { initialPlayers } = this.props;
    return (
      <div className="scoreboard">
        <Header title="Scoreboard" totalPlayers={initialPlayers.length} />

        {
          initialPlayers.map(player =>
            <Player
              key={player.id.toString()}
              name={player.name}
              score={player.score}
            />
          )
        }
      </div>
    );
  }
};

ReactDOM.render(
  <App initialPlayers={players} />,
  document.getElementById('root'),
);
