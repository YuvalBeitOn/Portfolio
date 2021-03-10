
import React, { Component } from 'react'
import './Contact.scss'
import emailjs from 'emailjs-com'
import apiKeys from '../../api-keys'

class Contact extends Component {

    state = {
        firstName: '',
        lastName: '',
        // email: '',
        subject: '',
        message: ''
    }

    onChange = (ev) => {
        this.setState({ ...this.state, [ev.target.name]: ev.target.value })
        // console.log(apiKeys.TEMPLATE_ID, apiKeys.USER_ID);
    }

    sendEmail = (e) => {
        e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

        emailjs.sendForm('service_wvp36lv', 'template_8jc9sof', e.target, 'user_nCs3vPoA7D81mCKHYNoJu')
            .then((result) => {
                window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
            }, (error) => {
                console.log(error.text);
            });
    }

    render() {
        return (
            <section className="contact">
                <form className="contact-from" onSubmit={this.sendEmail}>
                    <label htmlFor="firstName"></label> First Name
                    <input type="string" name="firstName" value={this.state.firstName} onChange={this.onChange}></input>

                    <label htmlFor="lastName"></label> Last Name
                    <input type="string" name="lastName" value={this.state.lastName} onChange={this.onChange}></input>

                    {/* <label htmlFor="email"></label> Email
                    <input type="string" name="email" value={this.state.email} onChange={this.onChange}></input> */}

                    <label htmlFor="subject"></label> Subject
                    <input type="string" name="subject" value={this.state.subject} onChange={this.onChange}></input>

                    <label htmlFor="message"></label> Message
                    <textarea type="text" name="message" value={this.state.message} onChange={this.onChange} rows="4" cols="50"></textarea>
                    <input type="submit" value="send"></input>
                </form>
            </section>
        )

    }
}

export default Contact
