import React from 'react';
import ShowPage from './shows/ShowPage';
import { Switch, Route } from 'react-router-dom';
import ShowDetailsPage from './ShowDetails/ShowDetailsPage'
import AboutPage from './About/AboutPage'
const Main = () => {
    return (
       
        <div className='container'>
         <Switch>
           <Route exact path='/' component={ShowPage} /> 
           <Route path='/show/:id' component={ShowDetailsPage} /> 
           <Route path='/about' component={AboutPage} /> 
        </Switch>
        </div>
    );
};

export default Main;