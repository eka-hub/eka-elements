import { useEffect, useState } from "react";

const useTabs = (children, hashActive = false, rowRef) => {
  const [tabs, setTabs] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (tabs.length > 0 && hashActive) {
      const id = Number(window.location.hash.substring(1));
      if (id < tabs.length) {
        setActive(id);
        try {
          if (rowRef && id > tabs.length / 2) {
            setImmediate(() => {
              rowRef.current.scrollLeft = rowRef.current.scrollWidth;
            });
          }
        } catch {
          console.error("Tabs row 'div' is needed.");
        }
      }
    }
  }, [tabs, hashActive, rowRef]);

  useEffect(() => {
    if (Array.isArray(children)) {
      children.forEach((tab, id) => saveTab(tab, id));
    } else {
      saveTab(children);
    }
    // eslint-disable-next-line
  }, [children]);

  const saveTab = (element, id = 0) => {
    // Keep instances of Tab component only
    if (element?.type?.name === "Tab") {
      const { active = false, children: content, ...rest } = element.props;
      setTabs((prev) => [...prev, { id, content, ...rest }]);
      if (active && !hashActive) {
        setActive(id);
      }
    }
  };

  return { tabs, active, setActive };
};

export default useTabs;
