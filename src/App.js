import React, { useState, useEffect } from "react";
import NavigationButtons from "./Components/Navigation/NavigationButtons";
import Accordion from "./Components/Accordion/Accordion";
import "./mainApp.scss";

const App = () => {
    const [data, setData] = useState([0]);
    const [dataLoaded, setDataLoaded] = useState(false);
    const [errorMessage, setError] = useState(null);
    const [categoryData, setCategoryData] = useState([])
    const [currentTab, setCurrentTab] = useState(null);
    const [navLabels, setNavLabels] = useState([]);
    const datasetWithType = data.filter(
        (dataType) => typeof dataType.type === "string"
    );
    const datasetTypes = datasetWithType.map((type) => type.type);
    const uniqueTypes = new Set(datasetTypes);
    const categoryLabel = uniqueTypes.values().next().value;

    useEffect(() => {
        setNavLabels([...uniqueTypes]);
        setCurrentTab(categoryLabel);
        setCategoryData(data.filter((catData) => catData.type === categoryLabel));
        setDataLoaded(true);
    }, [data]);

    const clickHandler = (e) => {
        setCurrentTab(e.target.innerText);
        setCategoryData(
            data.filter((catData) => catData.type === e.target.innerText)
        );
    };

    //get date from json file
    const getAppData = () => {
        fetch("dataset.json")
            .then((response) => response.json())
            .then(
                (response) => {
                    setData(response);
                },
                (errorMessage) => {
                    setError(`From what to start solving the problem: ${errorMessage}`);
                }
            );
    };
    useEffect(() => {
        getAppData();
    }, []);

    if (errorMessage) {
        return (
            <div className="error-data">
                Please check the data file ! {errorMessage}
            </div>
        );
    } else if (!dataLoaded) {
        return <div className="error-data">Loading... Please wait</div>;
    } else {
        return (
            <div className="main">
                <NavigationButtons
                    clickHandler={clickHandler}
                    activeTab={currentTab}
                    navItems={navLabels}
                />
                <Accordion applications={categoryData} />
            </div>
        );
    }
};

export default App;
