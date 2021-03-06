import React from 'react';

const Post = ({ movie }) => {
	console.log(movie);
	const { title, poster, rating, description, casts,  trivia, order } = movie.fields;
	return (
		<>
			<div className="post">
				<h2 className="postion">#{order}</h2>
				<div className="title">{title}</div>
				<h2 className="rating">Rating:{rating}</h2>
				{poster && <img className="poster" src={poster.fields.file.url} alt={title} title={title} />}
				<div className="description">{description}</div>
				<div className="cast">It starred : {casts}</div>
				<br></br>
				<div className="trivia">trivia</div>
				<div className="trivia-text">{trivia} </div>
			</div>
		</>
	);
};

export default Post;
