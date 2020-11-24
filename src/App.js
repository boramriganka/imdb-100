import React from 'react';
import './App.css';
import { client } from './client';
import Posts from './components/Posts';


class App extends React.Component {
	state = {
		movies: [],
	};

	componentDidMount() {
		client
			.getEntries({ content_type: 'movies' })
			.then((response) => {
				console.log(response.items);
				this.setState({
					movies: response.items,
				});
			})
			.catch(console.error);
	}

	render() {
		return (
			<div className="App">
                    <div className="container">
					<header>
						<div className="wrapper">
							<span className="logo">IMDB top-100</span>
						</div>
					</header>
					<main>
						<div className="wrapper">
							<Posts posts={this.state.movies} />
						</div>
					</main>
				</div>
			
			</div>
		);
	}
}

export default App;
