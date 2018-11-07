import React, { Component } from 'react'
//import './flamingo.css'
import styled from 'styled-components'
import img from './img.jpg'

const FlamingoMainBox = styled.div`
  position: relative;
    border-radius: 10px;
    overflow: hidden;
    margin: 10px;

    width: ${props => props.expanded ? '400px' : '200px'};
    height: ${props => props.expanded ? '600px' : '300px'};
    transition-duration: 0.5s;
`

const FlamingoBack = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  overflow: hidden;
  background-image: url(${props => props.image});
  background-size: cover; 
  background-position: center;
  padding: 10px;
  color: white;
  display: flex;
  flex-flow: column;
`

const FlamingoContent = styled.div`
  align-self: center;
`

const FlamingoFront = styled.div`
  position: absolute;
  top: 85%;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(128, 128, 128, 0.7);
  overflow: hidden;
  color: white;
  padding: 10px;
  transition-duration: .5s;

  :hover{
    top: 40%;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
  }
`

const FlamingoText = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  ${FlamingoFront}:hover & {
    text-overflow: initial;
    white-space: initial;
  }
`

const FlamingoExpBtn = styled.button`
  visibility: hidden;

  ${FlamingoFront}:hover & {
    /*To make exp btn on top of text*/
    position: absolute;
    bottom: 10px;
    right: 10px;
    
    min-width: 30px;
    min-height: 30px;
    background: gray;
    color: white;
    border-radius: 15px;
    border: none;
    visibility: visible;
    align-self: flex-end;
    font-size: 24px;

    :hover{
      background: black;
    }
  }
`

class Flamingo extends Component {
    constructor(props){
      super(props)
      this.state = {
        expanded: false,
      }
    }
  
    getExpandButton = () => {
        if (this.props.expandable){
          return (
            <FlamingoExpBtn
              onClick={() => this.setState({expanded: !this.state.expanded})}
            >
              {this.state.expanded ? '-' : '+'}
            </FlamingoExpBtn>
          )
        } else {
          return null
        }
    }
  
    render() {
      return (
        <FlamingoMainBox expanded={this.state.expanded}>
          <FlamingoBack image={img}>
            <h1>{this.props.title}</h1>
            <FlamingoContent>
              {this.state.expanded ? this.props.content : null}
            </FlamingoContent> 
          </FlamingoBack>
          <FlamingoFront>
            <FlamingoText>
              {this.props.description}
            </FlamingoText>
            {this.getExpandButton()}
          </FlamingoFront>
        </FlamingoMainBox>
      )
    }
  }

  export default Flamingo