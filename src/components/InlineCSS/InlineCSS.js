import React, { Component } from 'react';
import cat from '../../img/cat.jpeg';
import puppy from '../../img/puppy.jpeg';
import bunny from '../../img/bunny.jpeg';

// Created for sake of comparison to CSS in JS. Inline CSS using a JavaScript object to contain styles.


const h2Style = {
    color: 'black',
    margin: '20px',
    fontSize: '40px'
}

const pStyle = {
    color: 'black',
    fontSize: '14px',
    width: '800px',
    margin: '0 auto'
}

const imgStyle = {
    width: '40%',
    margin: '30px auto',
    display: 'block',
    border: '7px solid black'
}

class InlineCSS extends Component {
  render() {
    return (
      <div>
        <h2 style={h2Style}>This is Inline CSS</h2>
        <p style={pStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <img style={imgStyle} src={cat} alt="a cute cat photo" />
        <img style={imgStyle} src={puppy} alt="a cute puppy photo" />
        <img style={imgStyle} src={bunny} alt="a cute bunny photo" />
      </div>
    );
  }
}

export default InlineCSS;
