import { Button } from "../lib";

const Div = ({ ...rest }) => <div style={{ margin: "10px", display: "flex", gap: "10px" }} {...rest} />;

const Buttons = () => {
  return (
    <>
      <Div>
        <Button icon="attachment">Click</Button>
        <Button icon="alarm" iconRight>
          Click
        </Button>
        <Button>Click</Button>
        <Button icon="arrow-down" />
        <Button icon="refresh" disabled iconSpin>Click</Button>
      </Div>
      <Div>
        <Button type="secondary" icon="cross-square">
          Click
        </Button>
        <Button type="secondary" icon="shield-cross" iconRight>
          Click
        </Button>
        <Button type="secondary">Click</Button>
        <Button type="secondary" icon="heart" />
        <Button type="secondary" icon="eye-closed" disabled>
          Click
        </Button>
      </Div>
      <Div>
        <Button type="empty" icon="key">
          Click
        </Button>
        <Button type="empty" icon="info-circle" iconRight>
          Click
        </Button>
        <Button type="empty">Click</Button>
        <Button type="empty" icon="location-1" />
        <Button type="empty" icon="vertical" disabled>
          Click
        </Button>
      </Div>
      <Div>
        <Button type="border" icon="wallet">
          Click
        </Button>
        <Button type="border" icon="alarm" iconRight>
          Click
        </Button>
        <Button type="border">Click</Button>
        <Button type="border" icon="save" />
        <Button type="border" icon="screen" disabled>
          Click
        </Button>
      </Div>
    </>
  );
};

export default Buttons;
