import React, {Component} from 'react';

import {Router, Scene} from 'react-native-router-flux'

import RegisterScreen from './screens/RegisterScreen';
import MainScreen from './screens/MainScreen';
import ExploreScreen from './screens/ExploreScreen';
import TweetScreen from './screens/TweetScreen';



export default class App extends Component {
  
  render(){
    return(
     <Router hideNavBar="true">
       <Scene key="root">
        <Scene key="register" initial={true} component={RegisterScreen} hideNavBar="true"/>
        <Scene key="main" component={MainScreen} hideNavBar="true"/>
        <Scene key="explore" component={ExploreScreen} hideNavBar="true"/>
        <Scene key="tweet" component={TweetScreen} hideNavBar="true"/>

       </Scene>
     </Router>
    );
}

}




