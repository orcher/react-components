import React, { Component } from 'react'
import './flamingo2.css';

class Flamingo2 extends Component {
    constructor(props){
      super(props)
      this.state = {
        expanded: false,
      }
    }

    getExpandButton = () => {
        if (this.props.expandable){
          return (
            <button 
              className='flg-btn'
              onClick={() => this.setState({expanded: !this.state.expanded})}
            >
              {this.state.expanded ? '-' : '+'}
            </button>
          )
        } else {
          return null
        }
    }
  
    render() {
      return (
        <div className={this.state.expanded ? 'flg-main-box-exp' : 'flg-main-box'}>
          <div className='flg-back-box'>
            <div className='flg-title-box'><h1>{this.props.title}</h1></div>
            <div className='flg-content-box'>
              {this.state.expanded ? this.props.cont : null}
            </div>
            <div className={this.state.expanded ? 'flg-front-box-exp' : 'flg-front-box'}>
              <div className='flg-desc'>
                {this.props.desc}
              </div>
              {this.getExpandButton()}
            </div>
          </div>
        </div>
      )
    }
}

export default Flamingo2