import { Tab, Tabs, Icon } from "../lib";

const Div = ({ ...rest }) => <div style={{ margin: "10px", display: "flex", gap: "10px" }} {...rest} />;

const TabsBlock = () => {
  return (
    <>
      <Div>
        <Tabs hashActive>
          <Tab title="Title 1">tab 1 content</Tab>
          <Tab title="Title 3">tab 124 content</Tab>
          <Tab title="Title 4">tab 11 content</Tab>
          <Tab title="Title 5">tab 12 content</Tab>
          <Tab title="Title 6">tab 15 content</Tab>
          <Tab title="Title 7">tab 135 content</Tab>
          <Tab title="Title 8">tab 42 content</Tab>
          <Tab title="Title 2" icon="🚵‍♀️" active>
            tab 2 content
            <Icon icon="award" />
            <hr />
            Hello!
          </Tab>
          <Tab title="Hele" icon="award" to="/home" />
          <Tab icon="add" onClick={() => alert(44)}></Tab>

          <Tab title="hernya">hernya a ne content</Tab>
        </Tabs>
      </Div>
      <Div>
        <Tabs hashActive>
          <Tab title="Biba">Button in the Tabs</Tab>
          <Tab title="Boba">HOBA! This is boba.</Tab>
        </Tabs>
      </Div>
      <Div>
        <Icon icon="alarm" className="stranege" />
      </Div>
    </>
  );
};

export default TabsBlock;
