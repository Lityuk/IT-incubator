import React,{useState} from "react";


type AccordionPropsType = {
  titleAccordion: string;
};

function UncontrolledAccordion(props: AccordionPropsType) {

    const [collapsed, setCollapsed ]= useState(false)

    return (
      <div>
        <AccordionTitle title={props.titleAccordion}/> <button onClick={()=> setCollapsed(!collapsed)}>TOGGLE</button>
          {collapsed  && <AccordionBody />}
      </div>
    );
  }

type AccordionTitlePropsType = {
  title: string;
};

function AccordionTitle(props: AccordionTitlePropsType) {
  return <h3>{props.title}</h3>;
}

function AccordionBody() {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>2</li>
    </ul>
  );
}

export default UncontrolledAccordion;

