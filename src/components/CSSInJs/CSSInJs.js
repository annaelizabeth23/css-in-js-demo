import React, { Component } from 'react';
import styled from 'styled-components';
import cat from '../../img/cat.jpeg';
import puppy from '../../img/puppy.jpeg';
import bunny from '../../img/bunny.jpeg';

//below we are creating the 'styled components' that we can then plug in below in place of the html/jsx tag where we need them.

const Title = styled.h2`
    color: gray;
    margin: 20px;
    font-family: georgia;
    font-size: 40px;
`;

const Text = styled.p`
    color: gray;
    font-size: 14px;
    width: 700px;
    margin: 0 auto;
`;

const Photo = styled.img`
    width: 50%;
    margin: 30px auto;
    display: block;
    border: 5px solid gray;
`;

const BunnyPhoto = Photo.extend`
    box-shadow: 10px 10px pink;
`;

class CSSInJs extends Component {
  render() {
    return (
      <div>
        <Title>This is CSS in JS with Styled Components</Title>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
        <Photo src={cat} alt="a cute cat photo" />
        <Photo src={puppy} alt="a cute puppy photo" />
        <BunnyPhoto src={bunny} alt="a cute bunny photo" />
      </div>
    );
  }
}

export default CSSInJs;
