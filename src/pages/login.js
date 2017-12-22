import React from 'react';
import {Header} from "__Source/components/header/header";
import {Footer} from "__Source/components/footer/footer";
import {Login} from "__Source/components/login/login";

export class LoginPage extends React.Component{
    render(){
        return (
            <div className="login-background">
                <Header className='themeGray'/>
                <Login/>
                <Footer/>
            </div>
        )
    }
}
