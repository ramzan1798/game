import React, {useEffect} from "react";
import './App.css';
import MainActivity from "./activities/main-activity/main-activity";
import {useLocation, useNavigate} from "react-router-dom";
import UrlArgsBundle from "./utils/url-args-bundle";
import {ACTIVITY_TAG} from "./utils/constants";
import PlayPrerequisitesActivity from "./activities/play-prerequisites-activity/play-prerequisites-activity";
import HighScoresActivity from "./activities/high-scores-activity/high-scores-activity";
import Settings from "./activities/settings/settings";

function App() {

    const location = useLocation();
    const navigate = useNavigate();

    const urlArgsBundle = (new UrlArgsBundle()).prepareFrom(location.search);

    useEffect(() => {
        if (!urlArgsBundle.hasActivityTag()) {
            urlArgsBundle.setActivityTag(ACTIVITY_TAG.MAIN)
            navigate(urlArgsBundle.getArgsAsUrlParams())
        }
    });

    if (urlArgsBundle.hasActivityTag()) {
        switch (urlArgsBundle.getActivityTag()) {
            case ACTIVITY_TAG.MAIN:
                return <MainActivity/>;
                case ACTIVITY_TAG.PREREQUISITES:
                return <PlayPrerequisitesActivity/>;
                case ACTIVITY_TAG.HIGH_SCORE:
                return <HighScoresActivity/>;
                case ACTIVITY_TAG.SETTINGS:
                return <Settings/>;
        }
    }

    return <MainActivity />;

}
export default App;
