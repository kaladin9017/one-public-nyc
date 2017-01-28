//
import React, { Component } from 'react';
import ReactPlayer from 'react-player';

// const PLAYLIST = [
//                   "https://rawgit.com/kaladin9017/one-public-nyc/master/endless-record.mp4"
// https://cdn.rawgit.com/kaladin9017/one-public-nyc/edaca11f/endless-record.mp4
//                 ]


export default class Record extends Component {

  render() {
    return (
      <div>
        <ReactPlayer url='https://rawgit.com/kaladin9017/one-public-nyc/master/endless-record.mp4' playing={this.props.isPlaying} loop={true} />
        <ReactPlayer url='https://www.youtube.com/watch?v=_hZCsgcKa-g'
            hidden={true}
            playing={this.props.isPlaying}
            loop={true}
            volume={1}
            />
      </div>
    );
  }

}
