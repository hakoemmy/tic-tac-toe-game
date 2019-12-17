import React, { Component } from 'react';

import classes from './Board.module.css';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import BoardGround from '../../components/BoardGround/BoardGround';
import Spaces from '../../components/Spaces/Spaces';
import Movement from '../../components/Movement/Movement';
import TurnPlayer from '../../components/TurnPlayer/TurnPlayer';
import NaiveUser from '../../components/NaiveUser/NaiveUser';

class Board extends Component{



    render(){
        return (
            <Aux>
                <header>
                      <span>
                          <Movement/>
                      </span>
                        <Spaces/>
                      <span>
                          <TurnPlayer/>
                      </span>
                 </header>
                <main className={classes.Board}>
                    <BoardGround/>
                    <BoardGround/>
                    <BoardGround/>
                    <BoardGround/>
                    <BoardGround/>
                    <BoardGround/>
                    <BoardGround/>
                    <BoardGround/>
                    <BoardGround/>
                </main>
                <footer>
                     <span>
                        <NaiveUser/>
                      </span>
                        <Spaces/>
                      <span>
                        AI user: <strong>10</strong>
                      </span> 
                </footer>
            </Aux>
        );
    };
}


export default Board;