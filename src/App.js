import React, { Component } from 'react'

import {Grid} from '@material-ui/core'

//import youtube from './api/youtube'

import SearchBar from './components/SearchBar'
import VideoDetails from './components/VideoDetails'
import youtube from './api/youtube'
import VideoList from './components/VideoList'


class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      videos : [],
      selectedVideo : null
    }
  }

  onVideoSelect = (video) => {
    this.setState(
      {
        selectedVideo : video
      }
    )
  }

  handleSubmit = async (searchTerm) => {
    const response = await youtube.get('search',
    {
      params: {
        part : 'snippet',
        maxResults: 5,
        key: 'AIzaSyDnynZOLTSa6qPPSHa3R3tNJR429lPmIR0',
        q : searchTerm
    }
    })
    //console.log(response.data.items)
    this.setState({videos : response.data.items,selectedVideo:response.data.items[0]})
  }


  render() {
    const {selectedVideo,videos} = this.state
    //console.log(videos)
    return (
      <Grid justify = "center" container spacing = {10}>
        <Grid item xs = {12}>
          <Grid container spacing = {10}>
            <Grid item xs = {12}>
              <SearchBar onFormSubmit = {this.handleSubmit}/>
            </Grid>
            <Grid item xs = {8}>
              <VideoDetails video = {selectedVideo}/>
            </Grid>
            <Grid item xs = {4}>
              <VideoList videos = {videos} onVideoSelect = {this.onVideoSelect} ></VideoList>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

    )
  }
}

export default App
