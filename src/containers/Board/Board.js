import React, { Component } from 'react';

import classes from './Board.module.css';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import BoardGround from '../../components/BoardGround/BoardGround';

class Board extends Component{



    render(){
        return (
            <Aux>
                <header>move, turn</header>
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
                <footer>player and computer scores</footer>
            </Aux>
        );
    };
}


export default Board;