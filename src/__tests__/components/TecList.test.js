import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-localstorage-mock';

import { addTech } from '../../store/modules/techs/actions';

import TechList from '../../components/TechList/TechList';

jest.mock('react-redux');

describe('TecList component', () => {
   
    it('should render tech list', () => {
        useSelector.mockImplementation(cb => cb({
            techs: ['Node.js', 'ReactJs']
        }));

        const { getByText, getByTestId } = render(<TechList />);
        
        const list = getByTestId('tech-list');
        const valueNode = getByText('Node.js');
        const valueReact = getByText('Node.js');

        expect(list).toContainElement(valueNode);
        expect(list).toContainElement(valueReact);
    });

    it('should be able to add new tech', () => {
        const { getByTestId, getByLabelText } = render(<TechList />);

        const dispatch = jest.fn();

        useDispatch.mockReturnValue(dispatch);

        const inputValue = getByLabelText('Tech');
        const form = getByTestId('tech-form');

        fireEvent.change(inputValue, {target: { value: 'Node.js' } });
        fireEvent.submit(form);

        expect(dispatch).toHaveBeenCalledWith(addTech('Node.js'));
    });

});