import cn from "classnames";
import PropTypes from "prop-types";
import { useRef } from "react";
import { Block, Button } from "..";
import css from "./Tabs.module.scss";
import useTabs from "./useTabs";

export const Tabs = ({ children, hashActive = false }) => {
  const rowRef = useRef();
  const { tabs, active, setActive } = useTabs(children, hashActive, rowRef);

  return (
    <div className={css.tabs}>
      {tabs.length > 0 ? (
        <>
          <div className={css["tabs-row"]} ref={rowRef}>
            {tabs.map(({ id, title, onClick, /* ignore */ content, ...rest }) => (
              <Button
                key={id}
                className={cn(css.tab, active === id ? css.active : "")}
                design={active === id ? "default" : "secondary"}
                onClick={() => {
                  if (typeof onClick === "function") {
                    onClick();
                  } else if (!rest?.to) {
                    setActive(id);
                    if (hashActive) {
                      window.location.hash = id;
                    }
                  }
                }}
                {...rest}
              >
                {title}
              </Button>
            ))}
          </div>
          <Block className={css.content}>{tabs.find((tab) => tab.id === active)?.content}</Block>
        </>
      ) : null}
    </div>
  );
};

Tabs.propTypes = {
  children: PropTypes.any,
  hashActive: PropTypes.bool,
};

/**
 * Just for semantic.
 *
 * @prop title (string): Title of the Tab;
 * @prop active (bool): Is this tab current;
 * @prop children (any): Content of the tab;
 * @prop ...rest - other props of the <Button /> component, such as 'icon', 'onClick', etc.
 */
export const Tab = () => <div />;
