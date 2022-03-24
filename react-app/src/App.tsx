import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import SongPage from './components/SongPage';
import SongListApi from './api/SongListApi';
import Song from './interface/Song';

const { useState, useEffect } = React;

function App() {
  const [songData, setSongData] = useState<Song[] | undefined>();
  const [isLoading, setIsLoading] = useState(true);
  const [columnNames, setColumnNames] = useState(['']);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const songApi = new SongListApi();
    songApi.getSongData()
      .then(data => {
        setSongData(data);
        setIsLoading(false);
        setColumnNames(Object.keys(data[0]));
        console.log('Song data Loaded');
      }).catch(() => {
        console.log('Issue retrieving song data.');
        setHasError(true);
      })
  }, [])

  const props = {
    songData,
    isLoading,
    columnNames,
    hasError
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />}></Route>
          <Route path='/songs' element={<SongPage {...props} />}></Route>
        </Routes>
      </Router>
    </div >
  );
}

export default App;
