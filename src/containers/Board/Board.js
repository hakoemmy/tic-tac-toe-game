import React, { Component } from 'react';

import classes from './Board.module.css';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import BoardGround from '../../components/BoardGround/BoardGround';
import Spaces from '../../components/Spaces/Spaces';
import Movement from '../../components/Movement/Movement';
import TurnPlayer from '../../components/TurnPlayer/TurnPlayer';
import NaiveUser from '../../components/NaiveUser/NaiveUser';
import AiUser from '../../components/AiUser/AiUser';
import WinnerReporter from '../../components/WinnerReporter/WinnerReporter';


class Board extends Component{

    state = {
        isAiUserTurn: true,
        isNaiveTurn: false,
        isGameOver: false,
        aIScore: 0,
        naiveScore: 0,
        winnerSymbol: '',
        playGround:[
            ["", "", ""],
            ["", "", ""],
            ["", "", ""]
          ],
        naive:{
            symbol: 'X',
        },
        aIUser:{
            symbol: 'O',
        },
        moves: 0,
        result: {
            incomplete: 0,
            tie: 3,
        },

    };

    moveCount = (board) => {

      let moveCount = 0
      for (let i = 0; i<board.length; i++){
        for (let j = 0 ; j<board[i].length ; j++){
          if (board[i][j]!==""){
            moveCount++
          }
        }
      }
      this.setState({moves: moveCount})
      return moveCount
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
          let result = this.findWinnerHandler(symbol).result
          
          let score = 0;
          if (result === this.state.result.tie) {score = 0}
          else if (result === symbol) {
            score = 1
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


      };

      findWinnerHandler = (player) => {   
        let result = true;
       for (let j = 0; j < 3; j++) {     
         result = result && (this.state.playGround[j][j] === player);
        } 
        if (result) {
             return {
                result: result,
                player: player
        };
      }
      result = true;
      for (let j = 0; j < 3; j++) {  
      result = result && (this.state.playGround[2-j][j] === player);
     }
    if (result) {
        return {
            result: result,
            player: player
        };
     }
  for (let k = 0; k < 3; k++) {
    result = true;
    for (let j = 0; j < 3; j++) {     
        result = result && (this.state.playGround[k][j] === player);
    }
    if (result) {
        return  {
            result: result,
            player: player
        };
    }    
    result = true;
    for (let j = 0; j < 3; j++) {     
        result = result && (this.state.playGround[j][k] === player);
    }
        if (result) {
            return {
                result: result,
                player: player
            };
        } 
     }
     return false;
    }
    naiveTurnHandler = (row, column) => {
      let symbol = this.state.naive.symbol;
      this.executeTurn(this.state.playGround, {row, column}, symbol)
      const winnerInfo = this.findWinnerHandler(this.state.naive.symbol);
      if(winnerInfo.result){
        const currentNaiveScore = this.state.naiveScore + 1;
        const winnerNaiveSymbol = this.state.naive.symbol;
        this.setState({isGameOver: true, naiveScore: currentNaiveScore, winnerSymbol: winnerNaiveSymbol });
      }
      if(!winnerInfo.result && this.moveCount(this.state.playGround) === 8){
        this.setState({winnerSymbol: '', isGameOver: true});
      }
      this.setState({isAiUserTurn: true, isNaiveTurn: false});
      
    };

    aITurnHandler = () => {
        let symbol = this.state.aIUser.symbol;
        let result = this.getBestMove(this.state.playGround,symbol)
        if(result!== undefined){
          let move = result.move; 
          this.executeTurn(this.state.playGround, move, symbol)
          const winnerInfo = this.findWinnerHandler(this.state.aIUser.symbol);
          if(winnerInfo.result){
            const currentAiScore = this.state.aIScore + 1;
            const winnerAiSymbol = this.state.aIUser.symbol;
            this.setState({isGameOver: true, aIScore: currentAiScore, winnerSymbol: winnerAiSymbol});
          }
          if(!winnerInfo.result && this.moveCount(this.state.playGround) === 8){
            this.setState({winnerSymbol: '', isGameOver: true});
          }
        }
        
    };

    removeReporterHandler = () => {
     const clearedBoard = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""]
    ];
     this.setState({playGround: clearedBoard});
     this.setState({isGameOver: false});
     this.setState({moves: 0});
     this.setState({isAiUserTurn: true})
    }

    render(){
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
                     isGameOver={this.state.isGameOver}
                     clicked = {() => this.naiveTurnHandler(row, column)}
                     />
                 })  
        });
        return (
            <Aux>
               <WinnerReporter 
               isGameOver={ this.state.isGameOver}
               winnerSymbol={this.state.winnerSymbol}
               clicked={this.removeReporterHandler}
               />
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
                     <span>
                       <NaiveUser score={this.state.naiveScore}/>
                       </span>
                        <Spaces/>
                      <span>
                        <AiUser score={this.state.aIScore}/>
                        </span> 
                </footer>
            </Aux>
        );
    };
}


export default Board;