import React from 'react';
import ReactDom from 'react-dom';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BoardGround from '../../BoardGround/BoardGround';


describe('BoardGround component', () => {
  it('renders UI successfully', ()=>{
      const div = document.createElement("div");
      ReactDom.render(<BoardGround/>, div);
  })
 
});