import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Flamingo from './flamingo'
import Flamingo2 from './flamingo2'
import TicTacToe from './tictactoe'
import Gallery from './gallery'

class App extends Component {
  render() {
    return (
      <div className="main-box">
        <Flamingo 
          expandable
          title='Title'
          description='Consectetur culpa anim magna sint non. Ut aute veniam sit fugiat voluptate incididunt ut. Elit commodo officia consectetur est.
          Consectetur culpa anim magna sint non. Ut aute veniam sit fugiat voluptate incididunt ut. Elit commodo officia consectetur est.'
          content={<TicTacToe />}
        />
        <Flamingo2 
          expandable
          title='Title'
          desc='Consectetur culpa anim magna sint non. Ut aute veniam sit fugiat voluptate incididunt ut. Elit commodo officia consectetur est.
          Consectetur culpa anim magna sint non. Ut aute veniam sit fugiat voluptate incididunt ut. Elit commodo officia consectetur est.'
          cont={<TicTacToe />}
        />
        <Gallery 
          width='600px'
          height='400px'
          //showN={2}
          content={[
            <TicTacToe />, 
            <Flamingo
              expandable
              title='Title'
              description='Consectetur culpa anim magna sint non. Ut aute veniam sit fugiat voluptate incididunt ut. Elit commodo officia consectetur est.
              Consectetur culpa anim magna sint non. Ut aute veniam sit fugiat voluptate incididunt ut. Elit commodo officia consectetur est.'
              content={<TicTacToe />}
            />,
            <img src={logo} alt='logo' width='100px'></img>
          ]}
        />
      </div>
    );
  }
}

export default App;
