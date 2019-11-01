/* Import React elements */
import React from 'react';
import ReactDOM from 'react-dom';

/* Import CSS file */
import './index.css';

function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

class Board extends React.Component {

    /* Add constructor */
    constructor(props) {
        super(props);
        /* Add a constructor to the Board and set the Board’s initial state to contain an array of 9 nulls corresponding to the 9 squares */
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true, /* Turn control */
        };

        /* This later with info will look like this:
        [
            'O', null, 'X',
            'X', 'X', 'O',
            'O', null, null,
        ]
        */
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        squares[i] = this.state.xIsNext ? 'X' : 'O'; /* Depending on the turn, X or O is placed */
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext, /* Flip's the value on update, so player turn can change */
        });
    }

    renderSquare(i) {
        return <Square value={this.state.squares[i]}
            onClick={() => this.handleClick(i)} />;
    }

    render() {
        /* Text status with user control, on single line if */
        const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

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
