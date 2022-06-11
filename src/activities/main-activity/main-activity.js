import React from "react";
import './main-activity.css';
import {useLocation, useNavigate} from "react-router-dom";
import UrlArgsBundle from "../../utils/url-args-bundle";
import {ACTIVITY_TAG} from "../../utils/constants";


const MainActivity= () => {
    const location = useLocation();
    const navigate = useNavigate();
    const urlArgsBundle = (new UrlArgsBundle()).prepareFrom(location.search);

    return <div className="main-activity">
            <button onClick={() => {
                urlArgsBundle.setActivityTag(ACTIVITY_TAG.PREREQUISITES);
                navigate(urlArgsBundle.getArgsAsUrlParams());
            }}>Play</button>
            <button onClick={() => {
                urlArgsBundle.setActivityTag(ACTIVITY_TAG.HIGH_SCORE);
                navigate(urlArgsBundle.getArgsAsUrlParams());
            }}>High Score</button>
            <button onClick={() => {
                urlArgsBundle.setActivityTag(ACTIVITY_TAG.SETTINGS);
                navigate(urlArgsBundle.getArgsAsUrlParams());
            }}>Settings</button>
    </div>;
};

export default MainActivity;