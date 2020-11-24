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
				// unsorted array of posts
				console.log(response);
				this.setState({
					//sorting the array according to order
					movies: response.items.sort((a, b) => {
						return a.fields.order - b.fields.order;
					}),
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
