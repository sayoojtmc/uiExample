import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button';
import { Component } from 'react';
import {SketchPicker} from 'react-color';
import ReactSlider from 'react-slider';
class App extends Component{
  state={
    innertext:"Button",
    height: 30,
    width: 50,
    buttoncolor: "#fff",
    borderRadius: 0,
  }
  changeText=(e)=>{
    this.setState({innertext:e.target.value})
  }
  colorChangeHandler = (color)=>{
    this.setState({buttoncolor:color.hex})
  }
  heightChangeHandler = (e)=>{
    this.setState({height:e.target.value});
  }
  widthChangeHandler = (e)=>{
    this.setState({width:e.target.value});
  }
 borderRadiusChangeHandler = (e)=>{
    this.setState({borderRadius:e.target.value});
  }
  render(){
    return (
    <div className="App">
      <div style={{
        marginTop:'30px'
      }}>
        <div style={{
          textAlign:'center',
          
        }}>
          button text: <input type="text" onChange={this.changeText}/>
          
        </div>
       <div style={{
        display:'flex',
         marginLeft: '40%'
       }}>
        <p> color: </p><SketchPicker  color ={this.state.buttoncolor}
            onChange={this.colorChangeHandler}
            />
         </div> 
        <div>
            height: <input type="range" min="20" max="100" onChange={this.heightChangeHandler} />
        </div>
        <div>
            width: <input type="range" min="30" max="100" onChange={this.widthChangeHandler} />
        </div>
        <div>
            borderRadius: <input type="range" min="0" max="20" onChange={this.borderRadiusChangeHandler} />
        </div>

        
        <div style={{
          textAlign:'center',
          marginTop: '50px'
        }}>
          <Button color={this.state.buttoncolor} height={this.state.height} width={this.state.width} borderRadius={this.state.borderRadius}>{this.state.innertext}</Button>
        </div>
    
    </div>
    </div>
  );
  }
}

export default App;
