import React from 'react';
import './App.css';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Main from 'components/Main/Main';
import GlobalStyle from 'GlobalStyle';

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
