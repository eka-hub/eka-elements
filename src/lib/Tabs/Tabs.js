import cn from "classnames";
import PropTypes from "prop-types";
import React, { useEffect, useRef, useState } from "react";
import { Block, Button } from "..";
import css from "./Tabs.module.scss";

const Tabs = ({ tabs = [], activeId = 0, hashActive = false }) => {
  const rowRef = useRef();
  const [activeTab, setActiveTab] = useState(null);

  useEffect(() => {
    if (tabs.length > 0 && hashActive) {
      const id = window.location.hash.substring(1);
      if (id) {
        setActiveTab(id);
        try {
          const index = tabs.findIndex((tab) => String(tab.id) === String(id));
          if (rowRef && index > tabs.length / 2) {
            setImmediate(() => {
              rowRef.current.scrollLeft = rowRef.current.scrollWidth;
            });
          }
        } catch {
          console.error("Tabs row 'div' is needed.");
        }
      } else if (activeId === 0) {
        setActiveTab(tabs[0]?.id);
      }
    } else {
      setActiveTab(tabs[0]?.id);
    }
  }, [tabs, hashActive, activeId, rowRef]);

  return (
    <div className={css.tabs}>
      {tabs.length > 0 ? (
        <>
          <div className={css["tabs-row"]} ref={rowRef}>
            {tabs.map(({ id, title, onClick, content, ...rest }, index) => (
              <Tab
                key={id || index + title}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                id={id}
                title={title}
                onClick={onClick}
                hashActive={hashActive}
                {...rest}
              />
            ))}
          </div>
          <Block className={css.content}>{tabs.find((tab) => String(tab.id) === String(activeTab))?.content}</Block>
        </>
      ) : null}
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.array,
  activeId: PropTypes.any,
  hashActive: PropTypes.bool,
};

/**
 * Just for semantic.
 *
 * @prop id (any): Unique ID;
 * @prop title (string): Title of the Tab;
 * @prop activeTab (any): Id of the current tab;
 * @prop setActiveTab (func): For setting current tab;
 * @prop hashActive (bool): For saving current tab;
 * @prop ...rest - other props of the <Button /> component, such as 'icon', 'onClick', etc.
 */
const Tab = ({ activeTab, setActiveTab, id, title, onClick, hashActive, ...rest }) => {
  const thisIsActive = String(activeTab) === String(id);
  return (
    <Button
      className={cn(css.tab, thisIsActive ? css.active : "")}
      design={thisIsActive ? "default" : "secondary"}
      onClick={() => {
        if (typeof onClick === "function") {
          onClick();
        } else if (!rest?.to) {
          setActiveTab(id);
          if (hashActive) {
            window.location.hash = id;
          }
        }
      }}
      {...rest}
    >
      {title}
    </Button>
  );
};

Tab.propTypes = {
  activeTab: PropTypes.any,
  setActiveTab: PropTypes.func,
  id: PropTypes.any,
  title: PropTypes.string,
  onClick: PropTypes.func,
  hashActive: PropTypes.bool,
};

export default Tabs;
