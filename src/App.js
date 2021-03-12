import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar/index';
function App() {
  return (
    <div className='app'>
      <Header />
      <div className='app__body'>
        <Sidebar />
      </div>
      {/* App Body*/}
      {/* SideBard */}
      {/* Footer */}
    </div>
  );
}

export default App;
