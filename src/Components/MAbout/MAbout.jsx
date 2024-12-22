import React from "react";
import About from "./About";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";

import "./MAbout.css";

const MAbout = () => {
  return (
    <>
      <div className="macontainer">
        <div className="mabout">
          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {About.map((item, i) => (
              <AccordionItem className="aItem" key={i} uuid={i}>
                <AccordionItemHeading>
                  <AccordionItemButton className="aButton">
                    <AccordionItemState>
                      {({ expanded }) => (
                        <>
                          <div className=" aIcon">{item.icon}</div>
                          <span
                            className={`primaryText ${
                              expanded ? "expanded" : "collapsed"
                            }`}
                          >
                            {item.heading}
                          </span>
                          <div
                            className={`icon ${
                              expanded ? "rotate" : ""
                            }`}
                          >
                            <MdOutlineArrowDropDown size={20} />
                          </div>
                        </>
                      )}
                    </AccordionItemState>
                  </AccordionItemButton>
                </AccordionItemHeading>

                <AccordionItemPanel>
                  <p className="aDetail ">{item.detail}</p>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default MAbout;
