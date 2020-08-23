import React, { Component } from 'react'

import {Paper, TextField} from '@material-ui/core'

class SearchBar extends Component {

  constructor(props){
    super(props)
    this.state = {
        searchTerm : " "
    }
  }  

  submitHandler = (event) => {
       const  {searchTerm} = this.state

       const {onFormSubmit} = this.props

       onFormSubmit(searchTerm)

       event.preventDefault()

  }



  changeHandler = (event) => {

    this.setState(
        {
            searchTerm : event.target.value
        }
    ) 
      //console.log(event.target.value)
  }

  render() {
    return (
      <Paper elevation = {6} style = { { padding : '25px '}}>
          <form onSubmit = {this.submitHandler}>
            <TextField fullWidth label = "Seach..." onChange = {this.changeHandler}></TextField>
          </form>
      </Paper>
    )
  }
}

export default SearchBar
