import React from 'react';
import ReactDom from 'react-dom';
import AiUser from '../../AiUser/AiUser';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('AiUser Component', ()=>{
    it('renders without crashing', ()=>{
        const div = document.createElement('div');
        ReactDom.render(<AiUser/>, div);
    });

    it('renders correcttly AIUser\' score', () =>{
        const num = 0;
        const { getByTestId } = render(<AiUser score= {num}/>);
        expect(getByTestId("aIScore")).toHaveTextContent(num);
    });

});

