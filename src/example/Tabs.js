import { useEffect, useState } from "react";
import { Tabs, TabsRow, Tab, TabContent } from "../lib";

const Div = ({ ...rest }) => <div style={{ margin: "10px", display: "flex", gap: "10px" }} {...rest} />;

const TabsBlock = () => {
  const [homes, setHomes] = useState([]);
  const [active, setActive] = useState(null);
  useEffect(() => {
    setHomes([
      { id: 1, title: "Title 1", content: "For title 1" },
      { id: 2, title: "Title 2", content: "For title 2" },
      { id: 3, title: "Title 3", content: "For title 3" },
    ]);
    setActive(1);
  }, []);

  return (
    <Div>
      <Tabs>
        <TabsRow>
          {homes.map((home) => (
            <Tab key={home.id} onClick={() => setActive(home.id)} active={home.id === active}>
              {home.title}
            </Tab>
          ))}
          <Tab onClick={() => alert(42)} icon="add" />
        </TabsRow>
        <TabContent>{homes.find((home) => home.id === active)?.content}</TabContent>
      </Tabs>
    </Div>
  );
};

export default TabsBlock;
