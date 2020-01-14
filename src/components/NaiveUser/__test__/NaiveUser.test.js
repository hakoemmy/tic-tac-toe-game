import React from 'react';
import ReactDom from 'react-dom';
import NaiveUser from '../../NaiveUser/NaiveUser';


describe('Naive component', () => {
   
    it ('renders Naive UI corretly', ()=>{
        const div = document.createElement("div");
         ReactDom.render(<NaiveUser/>, div);
    });
});