import { Button, useDarkMode } from "../lib";

const Div = ({ ...rest }) => <div style={{ margin: "10px", display: "flex", gap: "10px" }} {...rest} />;

const Buttons = () => {
  const { dark, toggleMode, setMode } = useDarkMode();

  return (
    <>
      <Div>
        <Button icon={dark ? "sun" : "moon"} onClick={toggleMode}>
          Click
        </Button>
        <Button icon="alarm" iconRight onClick={() => setMode("dark")}>
          Click
        </Button>
        <Button onClick={() => setMode("light")}>Click</Button>
        <Button icon="arrow-down" />
        <Button icon="refresh" disabled iconSpin>
          Click
        </Button>
      </Div>
      <Div>
        <Button type="secondary" to="/some-where" icon="cross-square">
          Click
        </Button>
        <Button to="/home" newTab type="secondary" icon="shield-cross" iconRight>
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
