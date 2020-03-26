import React, { useEffect, useState } from 'react';

export default function TechList() {
    const [techs, setTechs] = useState([]);
    const [newTech, setNewTech] = useState('');

    function handleAddTech() {
        setTechs([...techs, newTech]);
        setNewTech('');
    }

    useEffect(() => {
        const techs = localStorage.getItem('techs');
        techs && setTechs(JSON.parse(techs));
    }, []);
    
    
    useEffect(() => {
        localStorage.setItem('techs', JSON.stringify(techs));
    }, [techs]);


    return (
        <form data-testid="tech-form" onSubmit={handleAddTech}>
            <ul data-testid="tech-list">
                {techs.map(tech => <li key={tech}>{tech}</li>)}
            </ul>

            <label htmlFor="tech">Tech</label>
            <input type="text" id="tech" value={newTech} onChange={e => setNewTech(e.target.value)} />
            <button type="submit">Adicionar</button>
        </form>
    )
}