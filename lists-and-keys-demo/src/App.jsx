
import './App.css';
import { useState } from 'react';


const movies = [
	'The Matrix',
	'Men of Steel',
	'Lord of the Rings'
];


function App() {

	const [movies, setMovies] = useState([
		'The Matrix',
		'Men of Steel',
		'Case for Christ',
		'Lord of the Rings'
	]);

const buttonClickHandler = () => {
	setMovies((oldMovies) => {
		const newMovies = [...oldMovies];
		newMovies[3] = 'Harry Potter';
		newMovies.push('Avengers');
		newMovies.shift();
		return newMovies;
	});
};
	
	return (
		<>
			<h1>Movies</h1>

			<ul>
				{movies.map(movie => <li key={movie}>{movie}</li>)}
			</ul>

			<button onClick={buttonClickHandler}>Change</button>
		</>
	);
}

export default App;
