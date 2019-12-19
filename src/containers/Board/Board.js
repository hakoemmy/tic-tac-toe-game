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
        isAiUserTurn: false,
        isNaiveTurn: false,
        playGround:[
            ["", "", ""],
            ["", "", ""],
            ["", "", ""]
          ],
        naive:{
            symbol: null,
            score: 0
        },
        aIUser:{
            symbol: null,
            score: 0
        }
    }



    render(){
        const board = this.state.playGround.map((innerArr) => {
                 return innerArr.map((field, i) => {
                
                     return <BoardGround key={i} symbol=''/>
                 })  
        });
        return (
            <Aux>
                <header>
                      <span><Movement/></span>
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