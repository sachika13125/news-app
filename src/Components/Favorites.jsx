import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import './Favorites.css';
import favoriteImage from '../assets/bubble-gum-woman-dancing-with-a-heart-shaped-balloon.png';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const supabase = createClient(process.env.REACT_APP_SUPABASE_URL, process.env.REACT_APP_SUPABASE_KEY);
  
  useEffect(() => {
    fetchFavoriteArticles();
  }, []);

  const fetchFavoriteArticles = async () => {
    try {
      const user = supabase.auth.user();
      if (!user) {
        return;
      }

      const { data, error } = await supabase
        .from('favorite_articles')
        .select('*')
        .eq('user_id', user.id);

      if (error) {
        throw error;
      }
      setFavorites(data);
    } catch (error) {
      console.error('Fetch Favorite Articles Error:', error.message);
    }
  };

  const removeFavorite = async (id) => {
    try {
      const { error } = await supabase
        .from('favorite_articles')
        .delete()
        .eq('id', id);
      
      if (error) {
        throw error;
      }

      fetchFavoriteArticles();
    } catch (error) {
      console.error('Remove Favorite Article Error:', error.message);
    }
  };

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
            <button onClick={() => removeFavorite(article.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <img className='favoriteImg' src={favoriteImage} alt='woman dancing with a heart shaped balloon'/>
    </div>
  );
};

export default Favorites;