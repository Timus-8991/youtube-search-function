import React, { Component } from 'react'
import VideoItem from './VideoItem'
import {Grid} from '@material-ui/core'

class VideoList extends Component {

  render() {
  
    const {videos,onVideoSelect} = this.props
    console.log(videos)
    const listOfVideos = videos.map(  (videos,id) => <VideoItem onVideoSelect = {onVideoSelect} key={id} video = {videos}/> )

    //console.log(listOfVideos)

    return (

        <Grid container spacing = {10}>
            {listOfVideos}
        </Grid>
    )
  }
}

export default VideoList
