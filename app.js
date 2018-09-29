const Header = (props) => (
  <header>
    <h1>{ props.title }</h1>
    <span className="stats">Players: { props.totalPlayers }</span>
  </header>
);

class Player extends React.Component {
  render() {
    const { name, id, removePlayer } = this.props;

    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
          { name }
        </span>

        <Counter />
      </div>
    );
  }
};

class Counter extends React.Component {
  state = {
    score: 0,
  };

  incrementScore = () => {
    this.setState((prevState) => ({
      score: prevState.score + 1,
    }));
  }

  decrementScore = () => {
    this.setState((prevState) => ({
      score: prevState.score - 1,
    }));
  }

  render() {
    const { score } = this.state;

    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
        <span className="counter-score">{ score }</span>
        <button className="counter-action increment" onClick={this.incrementScore}> + </button>
      </div>
    );
  }
};

class App extends React.Component {
  state = {
    players: [
      { name: "Guil", id: 1 },
      { name: "Treasure", id: 2 },
      { name: "Ashley", id: 3 },
      { name: "James", id: 4 },
    ],
  };

  handleRemovePlayer = (id) => {
    this.setState((prevState) => ({
      players: prevState.players.filter(player => player.id !== id)
    }));
  }

  render() {
    const { players } = this.state;

    return (
      <div className="scoreboard">
        <Header title="Scoreboard" totalPlayers={players.length} />

        {
          players.map(player =>
            <Player
              key={player.id.toString()}
              name={player.name}
              id={player.id}
              removePlayer={this.handleRemovePlayer}
            />
          )
        }
      </div>
    );
  }
};

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
