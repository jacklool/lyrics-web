import React from 'react';
import ReactPlayer from 'react-player';
import './responsive-player.css';

const ResponsivePlayer  = () => {
      return (
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            url='https://youtu.be/8CEJoCr_9UI'
            width='100%'
            height='100%'
          />
        </div>
      )
};

export default ResponsivePlayer;