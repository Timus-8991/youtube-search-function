import React, { Component } from 'react'

import {Paper, Typography } from '@material-ui/core'

class VideoDetails extends Component {

  render() {
    const {video} = this.props 
    
    if(!video) return <div>Loading...</div>

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

    return (
      <React.Fragment>
          <Paper elevation = {6} style = { {height : '70%'}}>
            <iframe frameBorder = '0' height = "100%" width = "100%" title = "Video Player" src = {videoSrc} />
          </Paper>
          <Paper elevation = {6} style= { { padding : '15px'}} >
              <Typography variant = "h4">{video.snippet.title}-{video.snippet.channelTitle}</Typography>
              <Typography variant = "subtitle1">{video.snippet.channelTitle}</Typography>
              <Typography variant = "subtitle2">{video.snippet.descrription}</Typography>
          </Paper>
      </React.Fragment>
    )
  }
}

export default VideoDetails
