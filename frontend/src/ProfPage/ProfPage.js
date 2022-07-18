import React from 'react';
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
    }

    onIconPress = () => {
        let iconName = (this.state.secureTextEntry) ?  <BsFillEyeFill/> : <BsFillEyeSlashFill/>
        this.setState({
            secureTextEntry: !this.state.secureTextEntry,
            iconName: iconName,
        });
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
                        <TextInput style = {{flex: 1}} secureTextEntry={this.state.secureTextEntry}/>
                        <TouchableOpacity onPress = {this.onIconPress}>
                            <BsFillEyeFill name = {this.state.iconName}/>
                        </TouchableOpacity>
                    </View>
                </span>
            
            </div>
            
        )
    }
}
