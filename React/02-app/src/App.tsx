import React from "react";
import "./App.css";
import Accordion from "./components/Accordion/Accordion";
import {OnOff} from "./components/OnOff/OnOff";
import {Rating} from "./components/Rating/Rating";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import UncontrolledRating from "./components/UncontrolledRating/UncontrolledRating";

function App() {
    return (
        <div>
            {/*<PageTitle title={"This is App component"} />*/}
            {/*<PageTitle title={"My friends"} />*/}
            {/*Article 1*/}
            {/*<Rating value={3} />*/}
            <UncontrolledAccordion titleAccordion={"Menu"}/>
            <UncontrolledAccordion titleAccordion={"Users"}/>
            {/*Article 2*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}

            <UncontrolledRating/>

            <OnOff/>
            <OnOff/>

        </div>
    );
}

type PageTitlePropsTitle = {
    title: string;
};

function PageTitle(props: PageTitlePropsTitle) {
    return <h1>{props.title}</h1>;
}

export default App;
