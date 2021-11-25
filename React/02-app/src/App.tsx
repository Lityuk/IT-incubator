import React from "react";
import "./App.css";
import Accordion from "./components/Accordion/Accordion";
import { Rating } from "./components/Rating/Rating";

function App() {
  return (
    <div>
      <PageTitle title={"This is App component"} />
      <PageTitle title={"My friends"} />
      Article 1
      <Rating value={3} />
      <Accordion titleAccordion={"Menu"} collapsed={true} />
      <Accordion titleAccordion={"Users"} collapsed={false} />
      Article 2
      <Rating value={0} />
      <Rating value={1} />
      <Rating value={2} />
      <Rating value={3} />
      <Rating value={4} />
      <Rating value={5} />
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
