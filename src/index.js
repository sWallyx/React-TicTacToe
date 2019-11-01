/* Import React elements */
import React from 'react';
import ReactDOM from 'react-dom';

/* Import CSS file */
import './index.css';

class Square extends React.Component {
    // TODO: remove the constructor
    constructor(props) {
      super(props);
      this.state = {
        value: null,
      };
    }
  
    render() {
      // TODO: use onClick={this.props.onClick}
      // TODO: replace this.state.value with this.props.value
      return (
        <button className="square" onClick={() => this.setState({value: 'X'})}>
          {this.state.value}
        </button>
      );
    }
  }

class Board extends React.Component {

    /* Add constructor */
    constructor(props) {
        super(props);
        /* Add a constructor to the Board and set the Board’s initial state to contain an array of 9 nulls corresponding to the 9 squares */
        this.state = {
            squares: Array(9).fill(null),
        };

        /* This later with info will look like this:
        [
            'O', null, 'X',
            'X', 'X', 'O',
            'O', null, null,
        ]
        */
    }

    renderSquare(i) {
        return <Square value={this.state.squares[i]} />;
    }

    render() {
        const status = 'Next player: X';

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
