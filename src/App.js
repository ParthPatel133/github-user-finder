import React, { useState, Fragment, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import User from './components/users/User'
import Search from './components/users/Search'
import Alert from './components/layout/Alert'
import About from './components/pages/About'

import GithubState from './context/github/GithubState'
import './App.css';


const App = () => {
  const [alert, setAlert] = useState(null);


  //Initial users
  // useEffect(() => {
  //   const fetchData = async () => {

  //     setLoading(true);

  //     const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

  //     setUsers(res.data);
  //     setLoading(false);
  //     //eslint-disable-next-line 

  //   }
  //   fetchData();
  // }, []);


  //SEARCH GITHUB USERS AND PASSING PROPS UP TO THE APP COMPONENT


  //Get single user

  //get user repos


  //clear user results from state


  //Set Alert
  const showAlert = (msg, type) => {
    setAlert({ msg, type })
    setTimeout(() => setAlert(null), 3000);
  };

  return (
    <GithubState>

      <Router>
        <div>
          <Navbar />
          <div className='container'>
            <Alert alert={alert} />
            <Switch>
              <Route exact path='/' render={props => (
                <Fragment>
                  <Search />
                  <Users />
                </Fragment>
              )} />
              <Route exact path='/about' component={About} />
              <Route exact path='/user/:login' component={User} />
            </Switch>

          </div>
        </div>
      </Router>
    </GithubState>
  );
}

export default App;
