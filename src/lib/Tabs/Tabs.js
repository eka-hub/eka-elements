import cn from "classnames";
import PropTypes from "prop-types";
import { Block, Button } from "..";
import css from "./Tabs.module.scss";

const Tabs = ({ className, ...rest }) => <div className={cn(css.tabs, className)} {...rest} />;

Tabs.propTypes = {
  className: PropTypes.string,
  rest: PropTypes.any,
};

const TabsRow = ({ className, ...rest }) => <div className={cn(css["tabs-row"], className)} {...rest} />;

TabsRow.propTypes = {
  className: PropTypes.string,
  rest: PropTypes.any,
};

const TabContent = ({ className, ...rest }) => <Block className={cn(css.content, className)} {...rest} />;

TabContent.propTypes = {
  className: PropTypes.string,
  rest: PropTypes.any,
};

const Tab = ({ className, active = false, ...rest }) => (
  <Button
    className={cn(css.tab, className, active ? css.active : "")}
    design={active ? "default" : "secondary"}
    {...rest}
  />
);

Tab.propTypes = {
  className: PropTypes.string,
  active: PropTypes.bool,
  rest: PropTypes.any,
};

export { Tabs, TabsRow, TabContent, Tab };
