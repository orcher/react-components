import React, { Component } from 'react'
import styled from "styled-components"

const TictactoeMainBox = styled.div`
    display: flex;
    flex-flow: row;
    align-content: flex-start;
    justify-content: center;
    margin: 10px;
`

const GameBox = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    margin-right: 10px;
`

const HistoryBox = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    color: white;
`

const BoardHeader = styled.div`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    color: white;
`

const BoardTable = styled.div`
    display: flex;
    flex-flow: column;
`

const BoardRow = styled.div`
    display: flex;
    flex-flow: row;
`

const HistoryBtn = styled.button`
    border: none;
    background: #008CBA;
    color: white;
    padding: 5px, 12px;
    margin: 5px;
    :hover{
        color: black;
    }
`

const HistoryList = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
`

const BoardField = styled.div`
    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;
    border: white solid 2px;
    border-radius: 5px;
    min-width: 80px;
    min-height: 80px;
    width: 80px;
    height: 80px;
    margin: 2px;
    color: white;
    font-size: 48px;
    font-weight: bold;
    background: ${props => props.mark ? 'lawngreen' : 'none'}
`

const Square = (props) => {
    return (
        <BoardField onClick={() => props.onClick()}mark={props.mark}>
            {props.value}
        </BoardField>
    )
}

class TicTacToe extends Component {
    constructor(props) {
        super(props)
        this.state = {
            xMoves: true,
            squares: Array(9).fill(null),
            history: [],
            winner: null,
            winningSet: [],
        }
    }

    turnBackTime = (i) => {
        if(this.state.winner !== null) return
        const timePoint = this.state.history[i]
        this.setState({ 
            squares: timePoint
        })
    }

    renderHistory = () => {
        const timePoints = []
        for (let i = 0; i < this.state.history.length; i++) {
            timePoints.push(
                <HistoryBtn key={i} onClick={() => this.turnBackTime(i)}>Back to {i}</HistoryBtn>
            )
        }
        return <HistoryList>{timePoints}</HistoryList>
    }

    handleClick = (i) => {
        const newSquares = this.state.squares.slice()
        if (newSquares[i] === null && this.state.winner === null) {
            newSquares[i] = this.state.xMoves ? 'X' : 'O'
            const newHistory = this.state.history
            newHistory.push(newSquares)
            this.checkWinner(newSquares)
            this.setState({
                xMoves: !this.state.xMoves,
                squares: newSquares,
                history: newHistory,
            })
        }
    }

    renderSquare = (i) => {
        return (
            <Square
                mark={this.state.winningSet.includes(i)}
                value={this.state.squares[i]}
                onClick={() => this.handleClick(i)}
            />
        )
    }

    checkWinner = (squares) => {
        const checks = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]

        for (let i = 0; i < checks.length; i++) {
            const a = checks[i][0]
            const b = checks[i][1]
            const c = checks[i][2]
            if (squares[a] === squares[b] &&
                squares[a] === squares[c] &&
                squares[b] === squares[c] &&
                squares[a] != null) {
                this.setState({
                        winner: squares[a],
                        winningSet: checks[i],
                    })
                break
            }
        }
    }

    renderInfo = () => {
        return (
            <div>
                {
                    this.state.winner === null ?
                    ('Now moves: ' + (this.state.xMoves ? 'X' : 'O')) :
                    ('Winner is: ' + this.state.winner + '!')
                }
            </div>
            )
    }

    render() {
        return (
            <TictactoeMainBox>
                <GameBox>
                    <BoardHeader>
                        {this.renderInfo()}
                    </BoardHeader>
                    <BoardTable>
                        <BoardRow>
                            {this.renderSquare(0)}
                            {this.renderSquare(1)}
                            {this.renderSquare(2)}
                        </BoardRow>
                        <BoardRow>
                            {this.renderSquare(3)}
                            {this.renderSquare(4)}
                            {this.renderSquare(5)}
                        </BoardRow>
                        <BoardRow>
                            {this.renderSquare(6)}
                            {this.renderSquare(7)}
                            {this.renderSquare(8)}
                        </BoardRow>
                    </BoardTable>
                </GameBox>
                <HistoryBox>
                    <div>History</div>
                    <div>{this.renderHistory()}</div>
                </HistoryBox>
            </TictactoeMainBox>
        )
    }
}

export default TicTacToe