import React from 'react'
import PropTypes from 'prop-types'

class SignUp extends React.Component {
    state = {
        email: "",
        gdpr_8849: false,
        gdpr_8857: false
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    submitEmail = e => {
        e.preventDefault();

    }

    toggle = e => {
        const boolean = this.state[e.target.name];
        this.setState({ [e.target.name]: !boolean });
    }

    render() {
        const { email, gdpr_8849, gdpr_8857 } = this.state;
        return (
            <section className="signup">
                <div>
                    <p>This is a summary of our product and service offering.</p>
                </div>
                <div>
                    <form action ="https://antoniotgraniero.us7.list-manage.com/subscribe/post?u=b6d912c6cb50482e3f936b7d6&amp;id=ae758c88fd" method="post">
                        <p>Subscribe to our mailing list.</p>
                        <label htmlFor="email" className="anton">
                            <input type="email" name="email" onChange={this.onChange} value={email} id="mce-EMAIL"/>
                            <span>email</span>
                        </label>
                        {/* Hidden fields below */}
                        <div className="gdpr">
                            <label>Marketing Permissions</label>
                            <p>Please select all the ways you would like to hear from ESC Rivista:</p>
                            <fieldset name="interestgroup_field">
                                <button className={gdpr_8849 ? "button checked" : "button"} type="button" name="gdpr_8849" onClick={this.toggle}>Email</button>
                                <input type="checkbox" id="gdpr_8849" name="gdpr_8849" value={gdpr_8849} onChange={this.onChange} aria-hidden={true} hidden/>
                                <button className={gdpr_8857 ? "button checked" : "button"} type="button" name="gdpr_8857" onClick={this.toggle}>Customized Online Advertising</button>
                                <input type="checkbox" id="gdpr_8857" name="gdpr_8857" value={gdpr_8857} onChange={this.onChange}aria-hidden={true} hidden/>
                            </fieldset>
                            <p>You can unsubscribe at any time by clicking the link in the footer of our emails. For information about our privacy practices, please visit our website.</p>
                            <p>We use Mailchimp as our marketing platform. By clicking below to subscribe, you acknowledge that your information will be transferred to Mailchimp for processing. 
                                <a href="https://mailchimp.com/legal/" target="_blank" rel="noopener noreferrer">Learn more about Mailchimp's privacy practices here.</a>
                            </p>
                            <div style={{ position: "absolute", left: "-5000px", ariaHidden: "true"}}>
                                <input type="text" name="b_b6d912c6cb50482e3f936b7d6_ae758c88fd" tabIndex="-1" value="" onChange={this.onChange}/>
                            </div>
                            <button className="button" type="submit" onClick={this.submitEmail}>iscriviti</button>
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}

// SignUp.propTypes = {

// }

export default SignUp;