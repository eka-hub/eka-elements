import { Block, Button, Icon } from "../lib";

const Div = ({ ...rest }) => <div style={{ margin: "10px", display: "flex", gap: "10px" }} {...rest} />;

const Blocks = () => {
  return (
    <>
      <Div>
        <Block>Hello</Block>
      </Div>
      <Div>
        <Block>
          <Button>Button in the block</Button>
        </Block>
      </Div>
      <Div>
        <Icon icon="alarm" className="stranege" />
      </Div>
    </>
  );
};

export default Blocks;
