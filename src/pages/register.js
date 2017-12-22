import React from 'react';
import {Header} from '__Source/components/header/header';
import {Footer} from '__Source/components/footer/footer';
import {Register} from '__Source/components/register/register';

export class RegisterPage extends React.Component {
    render() {
        const style = 'themeGray';

        return (
            <div className="register-background">
                <Header className={style}/>
                <Register/>
                <Footer/>
            </div>
        );
    }
}
