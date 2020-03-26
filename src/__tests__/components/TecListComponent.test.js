 import React from 'react';
 import { render, fireEvent, cleanup } from '@testing-library/react';
 import '@testing-library/jest-dom';
 import 'jest-localstorage-mock';

 import TechList from '../../components/TechList/TechListComponent';
 
 describe('TecListComponent component', () => {
     beforeEach(() => {
		  localStorage.clear();
     });

   it('shoud be able to add new tech', () => {
    const { getByText,  getByTestId, getByLabelText } = render(<TechList />);

    const inputTech = getByLabelText('Tech');

    fireEvent.change(inputTech, { target: { value: 'Node.js' } });
    
    fireEvent.submit(getByTestId('tech-form'));
    
    const list = getByTestId('tech-list');
    const value = getByText('Node.js');

    expect(list).toContainElement(value);
    expect(inputTech).toHaveValue('');
   });

   it('shoulb store techs in storage', () => {
    let { getByTestId, getByLabelText, getByText } = render(<TechList />);

    const inputTech = getByLabelText('Tech');

    fireEvent.change(inputTech, { target: { value: 'Node.js' } });
    
    fireEvent.submit(getByTestId('tech-form'));

    cleanup();

    ({ getByTestId, getByLabelText, getByText } = render(<TechList />));

    const list = getByTestId('tech-list');
	  const value = getByText('Node.js');
	
	  expect(localStorage.setItem).toHaveBeenCalledWith('techs', JSON.stringify(['Node.js']));
    expect(list).toContainElement(value);

   });
 });