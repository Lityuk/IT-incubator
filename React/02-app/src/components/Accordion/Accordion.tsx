import React from "react";

type AccordionPropsType = {
  titleAccordion: string;
  collapsed?: boolean;
};

function Accordion(props: AccordionPropsType) {

    return (
      <div>
        <AccordionTitle title={props.titleAccordion} />
          {!props.collapsed  && <AccordionBody />}
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

export default Accordion;

