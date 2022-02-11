import { useEffect, useState } from "react";
import { Tabs, Icon } from "../lib";

const Div = ({ ...rest }) => <div style={{ margin: "10px", display: "flex", gap: "10px" }} {...rest} />;

const TabsBlock = () => {
  const [homes, setHomes] = useState([]);
  useEffect(() => {
    setHomes([
      { id: 1, title: "Title 1", content: "For title 1" },
      { id: 2, title: "Title 2", content: "For title 2" },
      { id: 3, title: "Title 3", content: "For title 3" },
    ]);
  }, []);

  return (
    <>
      <Div>
        <Tabs
          hashActive
          tabs={[
            ...homes,
            { id: "something", title: "hernya", content: "hernya a ne content" },
            {
              icon: "add",
              onClick: () => alert(44),
            },
          ]}
        />
      </Div>
      <Div>
        <Tabs
          tabs={[
            {
              id: 1,
              title: "Biba",
              content: (
                <p>
                  Content for <b>Biba</b>
                </p>
              ),
            },
            {
              id: 2,
              title: "Boba",
              content: (
                <p>
                  HOBA! This is <b>boba.</b>
                </p>
              ),
            },
            {
              id: 3,
              title: "🚵‍♀️",
              onClick: () => {
                alert(42);
              },
            },
          ]}
        />
      </Div>
      <Div>
        <Icon icon="alarm" className="stranege" />
      </Div>
    </>
  );
};

export default TabsBlock;
