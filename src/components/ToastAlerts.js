import React, { Component } from 'react';
import { Toast } from 'bootstrap';

export default class ToastAlerts extends Component{
    render(){
        const toastCss ={
            position: 'fixed', 
            top: '20px',
            bottom: '20px'
        };
        return(
            <div style = "toastCss ">
                <Toast className = {"border border-success bg-success text-white"}>
                <Toast.Header className = {"bg-success text-white"} closeButton = {false}>
                    <strong className ="mr-auto">Success</strong>
                </Toast.Header>
                <Toast.Body>
                    Order Saved Successfully.
                </Toast.Body>
                </Toast>
                
            </div>

        );
    };
}