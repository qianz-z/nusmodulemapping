import React from 'react';
import './ProfPage.css'
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import {BsFillEyeFill, BsFillEyeSlashFill} from "react-icons/bs";
import { Navigate } from "react-router-dom";

export default class ProfPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            secureTextEntry: true,
            iconName: <BsFillEyeFill/>,
            redirect: false,
            password: '',
        }
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
            this.setState({ redirect: true, })
            alert('Logged in');
            
        }
        else{
            alert('Wrong password')
        }
        event.preventDefault();
    }

    render(){
        if (this.state.redirect){
            return <Navigate to="/profonly" replace={true} />
        }
        
        return(
            <form onSubmit={this.handleSubmit} className='container' >
                <Text className="pw-text">This page is for Professors only! {'\n'}
                    Please key in the password for administration rights. 
                </Text>

                <View style={{ borderBottomWidth: 1, flexDirection: "row"}} className = "pw-box">
                    <TextInput style = {{flex: 1}} secureTextEntry={this.state.secureTextEntry} defaultValue= {this.state.password} onChange={this.handleChange}/>
                    <TouchableOpacity onPress = {this.onIconPress}>
                        <BsFillEyeFill name = {this.state.iconName}/>
                    </TouchableOpacity>
                </View>

                <button type = "submit">Submit</button>            
            </form>

        )
    }
}
