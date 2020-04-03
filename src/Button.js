import React,{Component} from 'react';
import styled from 'styled-components';
const StyledButton = styled.button`
    background: ${props=>props.color};
    border-radius: ${props=>props.borderRadius}px;
    height: ${props =>props.height}px;
    width: ${props =>props.width}px;
    
    `;
class Newbutton extends Component{
    
    render(){
        return (<StyledButton color={this.props.color} height={this.props.height} width={this.props.width} borderRadius={this.props.borderRadius}>{this.props.children}</StyledButton>);
    }
}
export default Newbutton;