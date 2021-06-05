import './App.css';
import { useState } from 'react';
import Input from './components/Input';
import Card from './components/Card'
import getSpotifyToken from './util/getSpotifyToken';

const baseUrl = (search) => `https://api.spotify.com/v1/search?q=${search}&type=track&limit=10`;

function App() {

  const [cardInfos, setCardInfos] = useState([]);
  const [loading, setLoading]     = useState(false);
  const [erros, setErros]         = useState('');

  async function handleSubmit(e) {

    e.preventDefault();

    if(!e.target.value) return;
    
    const token = await getSpotifyToken();
    setErros('');
    setLoading(true);

    try {
  
      const request = await fetch(baseUrl(e.target.value), {
  
        method: 'GET',
        headers: {
  
          'Authorization': token
  
        }
  
      })
  
      const data = await request.json();
      const { tracks: { items } } = data;
      const cardItems = items.map(item => {
  
        return {
          name: item.name,
          explict: item.explicit,
          url: item.external_urls.spotify,
          artists: item.artists.map(artist => artist.name),
          albumName: item.album.name,
          albumCover: item.album.images[0].url,
        }
  
      });
  
      setCardInfos(cardItems);
      
    } catch (error) {
      
      setErros(error.message);

    }

    setLoading(false)

  }

  return (
    <div className="app">

      <Input handle={handleSubmit} />
      {loading && <span className="loading">Loading...</span> }
      {erros && <div className="erro">Error: {erros}</div> }
      <div className="cards">
        {cardInfos.map(card => <Card {...card} />)}
      </div>

      <footer>Spotify Search - Developed by iueu</footer>

    </div>
  );
}

export default App;
