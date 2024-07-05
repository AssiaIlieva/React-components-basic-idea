import { useEffect, useState } from 'react';
import style from './CharacterList.module.css';


const baseUrl = 'https://swapi.dev/api';

export default function CharacterList(){
    const [caracters, setCharacters] = useState([]);

    useEffect(() => {
        async function fetchCharacters() {
            const response = await fetch(`${baseUrl}/people`);
            const result = await response.json();

            setCharacters(result.results);
        }
        fetchCharacters();
    }, []);

    return (
        <>
            <h2>Characters</h2>
                <ul>
                    {caracters.map(charecter => <li className={style.characters} key={charecter.name}>{charecter.name}</li>)}
                </ul>
        </>
    );
}