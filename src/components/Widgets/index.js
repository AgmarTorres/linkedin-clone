import { FiberManualRecord, Info } from '@material-ui/icons';
import React from 'react';
import './styles.css';

function Widgets() {
  const newArticle = (heading, subtitle) => {
    return (
      <div className='widgets__article'>
        <div className='widgets__articleLeft'>
          <FiberManualRecord />
        </div>
        <div className='widgets__articleRight'>
          <h4>{heading}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    );
  };
  return (
    <div className='widgets'>
      <div className='widgets__header'>
        <h2>Likedin News</h2>
        <Info></Info>
      </div>
      {newArticle('Agmar Torres React frontend', '2021')}
    </div>
  );
}

export default Widgets;
