import React, { Component } from 'react';
import './Favorites.css';
import favoriteImage from '../assets/bubble-gum-woman-dancing-with-a-heart-shaped-balloon.png';

class Favorites extends Component {
  constructor() {
    super();
    this.state = {
      favorites: [],
    };
  }

  componentDidMount() {
    // Get favorite articles from local storage
    try {
      const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      this.setState({ favorites });
    } catch (error) {
      console.error('localStorage error:', error);
    }
  }

  removeFavorite = (index) => {
    const { favorites } = this.state;
  
    // Delete the article from favorites
    const updatedFavorites = [...favorites];
    updatedFavorites.splice(index, 1);
  
    // Update state and favorite lists
    this.setState({ favorites: updatedFavorites });
  
    // Update local storage
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  }

  render() {
    const { favorites } = this.state;

    return (
      <div className='favorites'>
        <h1>Your Favorites</h1>
        <ul>
          {favorites.map((article, index) => (
            <li key={index}>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                Read the Deatails
              </a>
              <button onClick={() => this.removeFavorite(index)}>Remove</button>
            </li>
          ))}
        </ul>
        <img className='favoriteImg' src={favoriteImage} alt='woman dancing with a heart shaped balloon'/>
      </div>
    );
  }
}

export default Favorites;