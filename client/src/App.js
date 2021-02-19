import './App.css';
import React from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import SkiffForm from './components/SkiffForm';
import NewSkiff from './components/NewSkiff';
import EditSkiff from './components/EditSkiff';
import OneSkiff from './components/OneSkiff';
import AllSkiffs from './components/AllSkiffs';

function App() {
  const NotFound = () => {
    return (
      <div className="error"> Route Not Found</div>
    )
  };
  return (
    <div className="App">
      <div id="skiff"></div>
      <Router> 
        <AllSkiffs path="/"/>
        <NewSkiff path="/skiff/new" /> 
        <OneSkiff path="/skiff/:id" />
        <EditSkiff path="/skiff/:id/edit" />
        <NotFound default /> 
        {/*  last DEFAULT connects to Route Not Found */}
        {/* be restful and be more explicit and specific routes */}
        {/* /:id is a variable */}
      </Router>

      {/* <Main /> */}
      {/* Save this, orginal form */}
    </div>
  );
}
export default App;