import React, { Component } from 'react';

import classes from './Board.module.css';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import BoardGround from '../../components/BoardGround/BoardGround';
import Spaces from '../../components/Spaces/Spaces';
import Movement from '../../components/Movement/Movement';
import TurnPlayer from '../../components/TurnPlayer/TurnPlayer';
import NaiveUser from '../../components/NaiveUser/NaiveUser';
import AiUser from '../../components/AiUser/AiUser';


class Board extends Component{

    state = {
        isAiUserTurn: true,
        isNaiveTurn: false,
        playGround:[
            ["", "", ""],
            ["", "", ""],
            ["", "", ""]
          ],
        naive:{
            symbol: 'X',
            score: 0
        },
        aIUser:{
            symbol: 'O',
            score: 0
        },
        moves: 0,
        result: {
            incomplete: 0,
            tie: 3
        },
        turn: Math.round(Math.random()),

    };

    moveCount = (board) => {

        let moveCount = 0
        for (let i = 0; i<board.length; i++){
          for (let j = 0 ; j<board[i].length ; j++){
            if (board[i][j]!=""){
              moveCount++
            }
          }
        }
        this.setState({moves: moveCount})
        return moveCount
      };

     getResult = (board,symbol) => {

        let result = this.state.result.incomplete
        if (this.moveCount(board)<5){
           return {result}
        }
  
        const succession =  (line) => {
          return (line === symbol.repeat(3))
        }
  
        let line
        let winningLine=[]
  
        for (let i = 0 ; i<3 ; i++){
          line = board[i].join('')
          if(succession(line)){
            result = symbol;
            winningLine = [[i,0], [i,1], [i,2]]
            return {result, winningLine};
          }
        }
  
        for (let j=0 ; j<3; j++){
          let column = [board[0][j],board[1][j],board[2][j]]
          line = column.join('')
          if(succession(line)){
            result = symbol
            winningLine = [[0,j], [1,j], [2,j]]
            return {result, winningLine};
          }
        }
  
        let diag1 = [board[0][0],board[1][1],board[2][2]]
        line = diag1.join('')
        if(succession(line)){
          result = symbol
          winningLine = [[0,0], [1,1], [2,2]]
          return {result, winningLine};
        }
  
        let diag2 = [board[0][2],board[1][1],board[2][0]]
        line = diag2.join('')
        if(succession(line)){
          result = symbol
          winningLine = [[0,2], [1,1], [2,0]]
          return {result, winningLine};
        }
  

        if (this.moveCount(board)==9){
          result= this.state.result.tie;
          return {result, winningLine}
        }
  
        return {result}
      };

     applyMove = (board,move, symbol) => {
        board[move.row][move.column]= symbol
        return board
      };

     getBestMove = (board, symbol) => {
        
        const copyBoard = (board) => {
          let copy = []
           for (let row = 0 ; row<3 ; row++){
            copy.push([])
            for (let column = 0 ; column<3 ; column++){
              copy[row][column] = board[row][column]
            }
          }
          return copy
        }
    
        const getAvailableMoves =  (board) => {
          
          let availableMoves = []
          for (let row = 0 ; row<3 ; row++){
            for (let column = 0 ; column<3 ; column++){
              if (board[row][column]===""){
                availableMoves.push({row, column})
              }
            }
          }
          return availableMoves
        }
    
        const shuffleArray =  (array) => {
           
            for (let i = array.length - 1; i > 0; i--) {
                let rand = Math.floor(Math.random() * (i + 1));
                [array[i], array[rand]]=[array[rand], array[i]]
            }
        }
    
        let availableMoves = getAvailableMoves(board)
        let availableMovesAndScores = []
    
        for (let i=0 ; i<availableMoves.length ; i++){
         
          let move = availableMoves[i]
          let newBoard = copyBoard(board)
          newBoard = this.applyMove(newBoard,move, symbol)
          let result = this.getResult(newBoard,symbol).result
          let score
          if (result == this.state.result.tie) {score = 0}
          else if (result == symbol) {
            score = 1
          }
          else {
            let otherSymbol = this.state.naive.symbol
            let nextMove = this.getBestMove(newBoard, otherSymbol)
            score = - (nextMove.score)
          }
          if(score === 1)
            return {move, score}
          availableMovesAndScores.push({move, score})
        }
    
        shuffleArray(availableMovesAndScores)
    
        availableMovesAndScores.sort((moveA, moveB )=>{
            return moveB.score - moveA.score
          })
        return availableMovesAndScores[0]
      };
      
      executeTurn = (board, move, symbol) => {
        if (board[move.row][move.column]!==""){
          return board
        }
    
        this.applyMove(board,move,symbol)
        let result = this.getResult(board, symbol).result
    
        if (result === this.state.result.incomplete){
          this.state.turn = (this.state.turn+1)%2
        }
        // } else {
        //   if(result !== this.state.result.tie) {
        //     let winningPlayer = state.players.find((player)=>{return player.symbol == result})
        //     winningPlayer.score++
        //   }
    
        //   state.view = VIEW.result
        //   render()
        // }
        // if (result==RESULT.incomplete && state.players[state.game.turn].isComputer){
        //   doComputerMove()
        // }
      };

    naiveTurnHandler = (row, column) => {
      let symbol = this.state.naive.symbol;
      this.executeTurn(this.state.playGround, {row, column}, symbol)
      this.setState({isAiUserTurn: true, isNaiveTurn: false});
      
    };

    aITurnHandler = () => {
        let symbol = this.state.aIUser.symbol;
        let move = this.getBestMove(this.state.playGround,symbol).move;
        this.executeTurn(this.state.playGround, move, symbol)
    };

    render(){
      console.log('[Board] render()...')
        if(this.state.isAiUserTurn){
            this.aITurnHandler();
            this.setState({isAiUserTurn: false, isNaiveTurn: true});    
        }
        let uniqueKey = 0;
        const board = this.state.playGround.map((innerArr, row) => {
                 return innerArr.map((field, column) => {
                    uniqueKey++;
                     return <BoardGround 
                     key={uniqueKey} 
                     symbol={field}
                     clicked = {() => this.naiveTurnHandler(row, column)}
                     />
                 })  
        });
        return (
            <Aux>
                <header>
                      <span>
                        <Movement moves={this.state.moves}/>
                        </span>
                        <Spaces/>
                      <span><TurnPlayer/></span>
                 </header>
                <main className={classes.Board}>
                   {board}
                </main>
                <footer>
                     <span><NaiveUser/></span>
                        <Spaces/>
                      <span><AiUser/></span> 
                </footer>
            </Aux>
        );
    };
}


export default Board;