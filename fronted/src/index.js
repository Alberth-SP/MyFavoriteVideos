import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import VideoList from './Videos/VideoList'
import VideoForm from './Videos/VideoForm'
import Header from './Videos/Header'
import 'react-toastify/dist/ReactToastify.css'
import 'bootswatch/dist/pulse/bootstrap.min.css';
import './index.css';
import { ToastContainer } from 'react-toastify'
ReactDOM.render(
  <React.StrictMode>
    
    <BrowserRouter>
    <Header />
    <div className="container p-4" >
      <Switch>
        <Route exact path="/" component={VideoList} />
        <Route path="/new-video" component={VideoForm} />
        <Route path="/update/:id" component={VideoForm} />
      </Switch>
      <ToastContainer />
    </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
