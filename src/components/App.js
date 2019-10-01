import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header';

//Client ID 99138726336-me1mqbhtc3ufgkuq7f9q8u5n60l7cu6v.apps.googleusercontent.com
const App = () => {
  return (
    <div className='ui container'>
      <BrowserRouter>
        <Header />
        <Route path='/' exact component={StreamList}></Route>
        <Route path='/streams/new' component={StreamCreate}></Route>
        <Route path='/streams/edit' component={StreamEdit}></Route>
        <Route path='/streams/delete' component={StreamDelete}></Route>
        <Route path='/streams/show' component={StreamShow}></Route>
      </BrowserRouter>
    </div>
  );
};
export default App;
