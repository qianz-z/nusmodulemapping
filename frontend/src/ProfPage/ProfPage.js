import React, { useState } from 'react';
import './ProfPage.css'
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import {BsFillEyeFill, BsFillEyeSlashFill} from "react-icons/bs";
import 'react-nice-input-password/dist/react-nice-input-password.css';

export default class ProfPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            secureTextEntry: true,
            iconName: <BsFillEyeFill/>,
        }
        this.state = {password: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onIconPress = () => {
        let iconName = (this.state.secureTextEntry) ?  <BsFillEyeFill/> : <BsFillEyeSlashFill/>
        this.setState({
            secureTextEntry: !this.state.secureTextEntry,
            iconName: iconName,
        });
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }
    handleSubmit(event) {
        if (this.state.value === "professor"){
            alert('Logged in');
        }
        else{
            alert('Wrong password')
        }
        event.preventDefault();
    }

    render(){
        
        return(
            <div className = "pw-box">
                <span>
                    <Text>This page is for Professors only! {'\n'}
                        Please key in the password for administration rights. 
                    </Text>
                </span>
                <span>
                    <View style={{ borderBottomWidth: 1, flexDirection: "row"}}>
                        <TextInput style = {{flex: 1}} secureTextEntry={this.state.secureTextEntry} defaultValue= {this.state.password} onChange={this.handleChange}/>
                        <TouchableOpacity onPress = {this.onIconPress}>
                            <BsFillEyeFill name = {this.state.iconName}/>
                        </TouchableOpacity>
                    </View>
                </span>
                <button onClick={this.handleSubmit}>Submit</button>
            
            </div>
            
        )
    }
}
