import React, { Component } from "react";

class TicTacToe extends Component {
  state = {
    squares: [null, null, null, null, null, null, null, null, null],
    lines: [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ],
    playerWin: false,
    aiWin: false,
    draw: false,
    endGame: false,
    moves: 0
  };

  checkWinner = (squares, moves) => {
    const lines = this.state.lines;
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] === "X" && squares[b] === "X" && squares[c] === "X") {
        this.setState({
          playerWin: true,
          endGame: true
        });
      } else if (
        squares[a] === "O" &&
        squares[b] === "O" &&
        squares[c] === "O"
      ) {
        this.setState({
          aiWin: true,
          endGame: true
        });
      } else if (moves >= 9) {
        this.setState({
          draw: true,
          endGame: true
        });
      }
    }
  };

  aiMove = (squares, moves) => {
    if (this.state.moves < 2) {
      if (squares[4] === null) {
        squares[4] = "O";
        moves += 1;
        this.setState({
          squares,
          moves
        });
      } else if (squares[0] === null) {
        squares[0] = "O";
        moves += 1;
        this.setState({
          squares,
          moves
        });
      } else if (squares[2] === null) {
        squares[2] = "O";
        moves += 1;
        this.setState({
          squares,
          moves
        });
      }
    } else {
      if (squares[0] === "X" && squares[1] === "X" && squares[2] === null) {
        squares[2] = "O";
        moves += 1;
        this.setState({
          squares,
          moves
        });
      } else if (
        squares[1] === "X" &&
        squares[2] === "X" &&
        squares[0] === null
      ) {
        squares[0] = "O";
        moves += 1;
        this.setState({
          squares,
          moves
        });
      } else if (
        squares[0] === "X" &&
        squares[3] === "X" &&
        squares[6] === null
      ) {
        squares[6] = "O";
        moves += 1;
        this.setState({
          squares,
          moves
        });
      } else if (
        squares[0] === "X" &&
        squares[4] === "X" &&
        squares[8] === null
      ) {
        squares[8] = "O";
        moves += 1;
        this.setState({
          squares,
          moves
        });
      } else if (
        squares[1] === "X" &&
        squares[4] === "X" &&
        squares[7] === null
      ) {
        squares[7] = "O";
        moves += 1;
        this.setState({
          squares,
          moves
        });
      } else if (
        squares[3] === "X" &&
        squares[4] === "X" &&
        squares[5] === null
      ) {
        squares[5] = "O";
        moves += 1;
        this.setState({
          squares,
          moves
        });
      } else if (
        squares[4] === "X" &&
        squares[5] === "X" &&
        squares[3] === null
      ) {
        squares[3] = "O";
        moves += 1;
        this.setState({
          squares,
          moves
        });
      } else if (
        squares[4] === "X" &&
        squares[2] === "X" &&
        squares[6] === null
      ) {
        squares[6] = "O";
        moves += 1;
        this.setState({
          squares,
          moves
        });
      } else if (
        squares[2] === "X" &&
        squares[5] === "X" &&
        squares[8] === null
      ) {
        squares[8] = "O";
        moves += 1;
        this.setState({
          squares,
          moves
        });
      } else if (
        squares[3] === "X" &&
        squares[6] === "X" &&
        squares[0] === null
      ) {
        squares[0] = "O";
        moves += 1;
        this.setState({
          squares,
          moves
        });
      } else if (
        squares[4] === "X" &&
        squares[7] === "X" &&
        squares[1] === null
      ) {
        squares[1] = "O";
        moves += 1;
        this.setState({
          squares,
          moves
        });
      } else if (
        squares[4] === "X" &&
        squares[8] === "X" &&
        squares[0] === null
      ) {
        squares[0] = "O";
        moves += 1;
        this.setState({
          squares,
          moves
        });
      } else if (
        squares[4] === "X" &&
        squares[6] === "X" &&
        squares[2] === null
      ) {
        squares[2] = "O";
        moves += 1;
        this.setState({
          squares,
          moves
        });
      } else if (
        squares[6] === "X" &&
        squares[7] === "X" &&
        squares[8] === null
      ) {
        squares[8] = "O";
        moves += 1;
        this.setState({
          squares,
          moves
        });
      } else if (
        squares[7] === "X" &&
        squares[8] === "X" &&
        squares[6] === null
      ) {
        squares[6] = "O";
        moves += 1;
        this.setState({
          squares,
          moves
        });
      } else if (
        squares[5] === "X" &&
        squares[8] === "X" &&
        squares[2] === null
      ) {
        squares[2] = "O";
        moves += 1;
        this.setState({
          squares,
          moves
        });
      } else if (
        squares[0] === "X" &&
        squares[6] === "X" &&
        squares[3] === null
      ) {
        squares[3] = "O";
        moves += 1;
        this.setState({
          squares,
          moves
        });
      } else if (
        squares[1] === "X" &&
        squares[7] === "X" &&
        squares[4] === null
      ) {
        squares[4] = "O";
        moves += 1;
        this.setState({
          squares,
          moves
        });
      } else if (
        squares[2] === "X" &&
        squares[8] === "X" &&
        squares[5] === null
      ) {
        squares[5] = "O";
        moves += 1;
        this.setState({
          squares,
          moves
        });
      } else if (
        squares[0] === "X" &&
        squares[2] === "X" &&
        squares[1] === null
      ) {
        squares[1] = "O";
        moves += 1;
        this.setState({
          squares,
          moves
        });
      } else if (
        squares[3] === "X" &&
        squares[5] === "X" &&
        squares[4] === null
      ) {
        squares[4] = "O";
        moves += 1;
        this.setState({
          squares,
          moves
        });
      } else if (
        squares[6] === "X" &&
        squares[8] === "X" &&
        squares[7] === null
      ) {
        squares[7] = "O";
        moves += 1;
        this.setState({
          squares,
          moves
        });
      } else if (moves > 2 && moves <= 7) {
        if (squares[0] === null && squares[3] === "X") {
          squares[0] = "O";
          moves += 1;
          this.setState({
            squares,
            moves
          });
        } else if (squares[2] === null && squares[5] === "X") {
          squares[2] = "O";
          moves += 1;
          this.setState({
            squares,
            moves
          });
        } else if (squares[6] === null) {
          squares[6] = "O";
          moves += 1;
          this.setState({
            squares,
            moves
          });
        } else if (squares[8] === null) {
          squares[8] = "O";
          moves += 1;
          this.setState({
            squares,
            moves
          });
        } else if (squares[0] === null) {
          squares[0] = "O";
          moves += 1;
          this.setState({
            squares,
            moves
          });
        }
      }
    }
    this.checkWinner(squares, moves);
  };

  handleClick = e => {
    let squares = [...this.state.squares];
    let moves = this.state.moves;
    if (squares[e.target.value] === null) {
      squares[e.target.value] = "X";
      moves += 1;
      this.setState({
        squares,
        moves
      });

      this.checkWinner(squares, moves);
      this.aiMove(squares, moves);
    }
  };

  reset = () => {
    this.setState({
      squares: [null, null, null, null, null, null, null, null, null],
      lines: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ],
      playerWin: false,
      aiWin: false,
      draw: false,
      endGame: false,
      moves: 0
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.reset}> RESET </button>
        <div className="game">
          {this.state.playerWin ? <p>Zwycięża gracz!</p> : null}
          {this.state.aiWin ? <p>Zwycięża komputer!</p> : null}
          {this.state.draw ? <p>Remis</p> : null}
          <div className="row">
            <button
              onClick={this.handleClick}
              value={0}
              disabled={this.state.endGame}
            >
              {this.state.squares[0]}
            </button>
            <button
              onClick={this.handleClick}
              value={1}
              disabled={this.state.endGame}
            >
              {" "}
              {this.state.squares[1]}
            </button>
            <button
              onClick={this.handleClick}
              value={2}
              disabled={this.state.endGame}
            >
              {" "}
              {this.state.squares[2]}
            </button>
          </div>
          <div className="row">
            <button
              onClick={this.handleClick}
              value={3}
              disabled={this.state.endGame}
            >
              {" "}
              {this.state.squares[3]}
            </button>
            <button
              onClick={this.handleClick}
              value={4}
              disabled={this.state.endGame}
            >
              {" "}
              {this.state.squares[4]}
            </button>
            <button
              onClick={this.handleClick}
              value={5}
              disabled={this.state.endGame}
            >
              {" "}
              {this.state.squares[5]}
            </button>
          </div>
          <div className="row">
            <button
              onClick={this.handleClick}
              value={6}
              disabled={this.state.endGame}
            >
              {" "}
              {this.state.squares[6]}
            </button>
            <button
              onClick={this.handleClick}
              value={7}
              disabled={this.state.endGame}
            >
              {" "}
              {this.state.squares[7]}
            </button>
            <button
              onClick={this.handleClick}
              value={8}
              disabled={this.state.endGame}
            >
              {" "}
              {this.state.squares[8]}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default TicTacToe;
