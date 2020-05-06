import React from 'react';
import Search from './Components/Search'
import List from './Components/List'
import Videoplayer from './Components/Videoplayer'
import Login from './Components/Login'
import { connect } from 'react-redux'
import './App.css';
// import axios from 'axios'




class App extends React.Component {
 
  render() {

    return (
      <div>
        {
          !this.props.isLoggedIn &&
          <Login/>
        }
        {
          this.props.isLoggedIn &&
        (<div className="container" >
          <div className="row">
            <div className="col">
              <Search />
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <List
                page="videos" />
            </div>
            <div className="col-md-8">
              <Videoplayer />
              <div className="row">
                <div className="col-md-7">
                  <h4 className="text-center">Played Videos</h4>
                  <List
                    page="Played-videos" />
                </div>
                <div className="col-md-5">
                  <h4 className="text-center">Bookmarked Videos</h4>
                  <List
                    page="bookmarked-videos" />
                </div>
              </div>

            </div>
          </div>
        </div>)
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn:state.auth.isLoggedIn
  }
}
export default connect(mapStateToProps)(App);
