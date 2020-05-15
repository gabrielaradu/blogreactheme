import React, {Component} from 'react';

class AboutMe extends Component {
    render() {
        return (
            <div className="content p-2">
                <h1 className="display-4 mobile-title">Hello visitor!</h1>
                <p className="font-weight-lighter">
                    This is my about me page where you will add you own personalized content.
                </p>
                <p className="date-title">Stay as safe as you can and wear a mask properly on your face.</p>
            </div>
        );
    }
}

export default AboutMe;
