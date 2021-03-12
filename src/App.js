import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
function App() {
  return (
    <div className='app'>
      <Header />
      <div className='app__body'>
        <Sidebar />
        <Feed />
      </div>
      {/* App Body*/}
      {/* SideBard */}
      {/* Footer */}
    </div>
  );
}

export default App;
