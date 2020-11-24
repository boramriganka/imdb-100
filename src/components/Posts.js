import React from 'react';
import Post from './Post';
import { useState } from 'react';
import { useDarkMode } from './useDarkMode';
import Toggle from './Toggler';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './globalstyles';
import { lightTheme, darkTheme } from './Themes';
import '../App.css';


const Posts = ({ posts }) => {
	const [theme, themeToggler] = useDarkMode();

	const themeMode = theme === 'light' ? lightTheme : darkTheme;
	return (
		<ThemeProvider theme={themeMode}>
			<>
				<GlobalStyles />
				<div className="posts">
					<Toggle theme={theme} toggleTheme={themeToggler} />
                        
                        <div class="content-wrapper">
						{posts.map((movie, index) => (
							<Post movie={movie} key={index} />
						))}
					    </div>
                        
					
				</div>
			</>
		</ThemeProvider>
	);
};

export default Posts;
