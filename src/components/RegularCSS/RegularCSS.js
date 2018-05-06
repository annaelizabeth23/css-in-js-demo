import React, { Component } from 'react';
import cat from '../../img/cat.jpeg';
import puppy from '../../img/puppy.jpeg';
import bunny from '../../img/bunny.jpeg';
import './RegularCSS.css';

// Created for sake of comparison to CSS in JS. Basic CSS using an external stylesheet.

class RegularCSS extends Component {
  render() {
    return (
      <div>
        <h2 className="title">This is Regular CSS</h2>
        <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <img className="photo" src={cat} alt="a cute cat photo" />
        <img className="photo" src={puppy} alt="a cute puppy photo" />
        <img className="photo" src={bunny} alt="a cute bunny photo" />
      </div>
    );
  }
}

export default RegularCSS;
