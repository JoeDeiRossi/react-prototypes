
import React, {Component} from 'react';
import Field from './field';

class ContactForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            form: {
                firstName: '',
                lastName: '',
                phone: '',
                email: ''
            }
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.reset = this.reset.bind(this);
    }

    render() {
        const {firstName, lastName, phone, email} = this.state.form;

        return (
            <form onSubmit={this.handleSubmit} autoComplete="off">
                <Field name="firstName" label="First Name" type="text" value={firstName} onChange={this.handleInputChange}/>
                <Field name="lastName" label="Last Name" type="text" value={lastName} onChange={this.handleInputChange}/>
                <Field name="phone" label="Phone Number" type="tel" value={phone} onChange={this.handleInputChange}/>
                <Field name="email" label="Email" type="email" value={email} onChange={this.handleInputChange}/>
                <button>Add Contact</button>
                <button type="button" onClick={this.reset}>Clear Form</button>
            </form>
        )
    }

    handleInputChange(event) {
        const {value, name} = event.target;
        const {form} = this.state;
        form[name] = value;
        this.setState({
            form: {...form}
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.add(this.state.form);
        this.reset();
    }

    reset() {
        this.setState({
            form: {
                firstName: '',
                lastName: '',
                phone: '',
                email: ''
            }
        });
    }
}

export default ContactForm;
