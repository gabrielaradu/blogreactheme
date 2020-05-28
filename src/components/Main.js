import React, {Component} from 'react';
import '../styles/App.scss';
import SinglePostPreview from "./posts/SinglePostPreview";
import FeaturedPostPreview from "./featured/FeaturedPostPreview";

class Main extends Component {
    render() {
        return (
            <div>
                <div className="row align-content-center mb-5">
                    <div className="col-md-3 col-lg-3 col-sm-12">
                        <img className="shadow w-100 h-auto"
                             src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80"
                             alt="project descriptive logo"/>
                    </div>
                    <div className="col-md-7 col-lg-7 col-sm-12 pt-4">
                        <h1 className="display-3"><a href="/">About a very cool project of
                            yours.</a></h1>
                        <p className="font-weight-lighter">Here you will describe a bit about your very cool
                            project that you created or helped created and you want to share it with the world.
                            Sharing is caring, right? Oh, now that you are here: wear a mask outside for others
                            and others wear a mask for you.</p>
                    </div>
                    <div className="col-md-2 col-lg-2 col-sm-12 d-flex flex-column">
                        <div className="flex-grow-1"/>
                        <div className="flex-grow-0 w-100">
                            <div className="d-flex flex-row">
                                <svg className="bi bi-arrow-left col-4" width="1.5em" height="1.5em"
                                     viewBox="0 0 16 16"
                                     fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path fillRule="evenodd"
                                          d="M5.854 4.646a.5.5 0 010 .708L3.207 8l2.647 2.646a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 01.708 0z"
                                          clipRule="evenodd"/>
                                    <path fillRule="evenodd"
                                          d="M2.5 8a.5.5 0 01.5-.5h10.5a.5.5 0 010 1H3a.5.5 0 01-.5-.5z"
                                          clipRule="evenodd"/>
                                </svg>
                                <div className="col-4"/>
                                <svg className="bi bi-arrow-right col-4 pr-1" width="1.5em" height="1.5em"
                                     viewBox="0 0 16 16"
                                     fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path fillRule="evenodd"
                                          d="M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z"
                                          clipRule="evenodd"/>
                                    <path fillRule="evenodd"
                                          d="M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z"
                                          clipRule="evenodd"/>
                                </svg>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="latest-container mb-4">
                    <div className="row horizontal-container">
                        <FeaturedPostPreview title="What is Lorem Ipsum?"
                                             url="/"
                                             preview={" Lorem Ipsum is simply dummy text of the printing\n" +
                                             "                                    and typesetting industry. Lorem Ipsum has been the industry's standard dummy\n" +
                                             "                                    text ever since the 1500s, when an unknown printer took a galley of type and\n" +
                                             "                                    scrambled it to make a type specimen book. Oh, now that you are here: <b>wear a\n" +
                                             "                                    mask outside for others and others wear a mask for you</b>."}/>
                        <FeaturedPostPreview title="What is Lorem Ipsum?"
                                             url="/"
                                             preview={" Lorem Ipsum is simply dummy text of the printing\n" +
                                             "                                    and typesetting industry. Lorem Ipsum has been the industry's standard dummy\n" +
                                             "                                    text ever since the 1500s, when an unknown printer took a galley of type and\n" +
                                             "                                    scrambled it to make a type specimen book. Oh, now that you are here: <b>wear a\n" +
                                             "                                    mask outside for others and others wear a mask for you</b>."}/>
                        <FeaturedPostPreview title="What is Lorem Ipsum?"
                                             url="/"
                                             preview={" Lorem Ipsum is simply dummy text of the printing\n" +
                                             "                                    and typesetting industry. Lorem Ipsum has been the industry's standard dummy\n" +
                                             "                                    text ever since the 1500s, when an unknown printer took a galley of type and\n" +
                                             "                                    scrambled it to make a type specimen book. Oh, now that you are here: <b>wear a\n" +
                                             "                                    mask outside for others and others wear a mask for you</b>."}/>
                        <div className="col-md-3 col-lg-3 col-sm-12">
                            <img className="w-100 h-auto" src={require('../img/undraw_career.svg')}
                                 alt="software developer"/>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <SinglePostPreview title="This is one of your latest blog post?"
                                       url="/"
                                       date="24 April 2020"
                                       preview={" Lorem Ipsum is simply dummy text of the printing\n" +
                                       "                                    and typesetting industry. Lorem Ipsum has been the industry's standard dummy\n" +
                                       "                                    text ever since the 1500s, when an unknown printer took a galley of type and\n" +
                                       "                                    scrambled it to make a type specimen book. Oh, now that you are here: <b>wear a\n" +
                                       "                                    mask outside for others and others wear a mask for you</b>."}/>

                    <SinglePostPreview title="This is a different post where you showcase something fun"
                                       url="/"
                                       date="04 May 2020"
                                       preview={" Lorem Ipsum is simply dummy text of the printing\n" +
                                       "                                    and typesetting industry. Lorem Ipsum has been the industry's standard dummy\n" +
                                       "                                    text ever since the 1500s, when an unknown printer took a galley of type and\n" +
                                       "                                    scrambled it to make a type specimen book. Oh, now that you are here: <b>wear a\n" +
                                       "                                    mask outside for others and others wear a mask for you</b>."}/>
                </div>
            </div>
        );
    }
}

export default Main;
