import React, { Component } from 'react';
import styled from 'styled-components';
import {keyframes} from 'styled-components';
import cat from '../../img/cat.jpeg';
import puppy from '../../img/puppy.jpeg';
import bunny from '../../img/bunny.jpeg';


// Basic example of CSS in JS with Styled Components

//below we are creating the 'styled components' that we can then plug in below in place of the HTML/JSX tag where we need them.
//note the back ticks (``). We are using JavaScript template strings to contain our CSS, so you can include JavaScript in ${} if needed.

const Title = styled.h2`
    color: gray;
    margin: 20px;
    font-family: georgia;
    font-size: 40px;
`;

const Button = styled.button`
    color: black;
    border: 1px solid gray;
    margin: 10px;
    background-color: white;
    width: ${props => props.large ? '300px' : '100px'};

    &:hover {
      color: gray;
      border: 2px solid gray;
    }
`;

const Text = styled.p`
      color: gray;
      font-size: 14px;
      width: 700px;
      margin: 0 auto;

      @media (max-width: 768px){
        width: 400px;
      }
`;

//This is a varible that uses a styled-compnents keyframe helper so that you can use it where it's needed without any clashes
const rotate360 = keyframes`
    from {
      width: 50%;
    }

    to {
      width: 58%;
    }
`;


const Photo = styled.img`
    width: 50%;
    margin: 30px auto;
    display: block;
    border: 5px solid gray;
`;

const BunnyPhoto = Photo.extend`
    @media (min-width: 768px){
      box-shadow: 10px 10px pink;
      width: 50%;
    }

    // Below is the variable we assigned the keyframe to above, used in this pseudo selector
    &:hover {
      animation: ${rotate360} 2s linear;
    }
`;

class CSSInJs extends Component {
  render() {
    return (
      <div>
        {/* The components above are now rendered below with the name of the component in a tag. Use the tag just like the HTML/JSX tag it is representing */}

        <Title>This is CSS in JS with Styled Components</Title>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
        
        <Button>Styled Button</Button>
        <Button large>Button Styled From Props</Button>

        {/* I chose to assign the image path to a variable at the top of the document, so the image src is the variable */}
        <Photo src={cat} alt="a cute cat photo" />
        <Photo src={puppy} alt="a cute puppy photo" />
        <BunnyPhoto src={bunny} alt="a cute bunny photo" />
      </div>
    );
  }
}

export default CSSInJs;
