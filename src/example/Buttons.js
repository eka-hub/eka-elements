import { Button, useDarkMode } from "../lib";

const Div = ({ ...rest }) => <div style={{ margin: "10px", display: "flex", gap: "10px" }} {...rest} />;

const Buttons = () => {
  const { dark, toggleMode, setMode } = useDarkMode();

  return (
    <>
      <Div>
        <Button icon={dark ? "sun-1" : "🌙"} onClick={toggleMode}>
          Click
        </Button>
        <Button icon="alarm" iconRight onClick={() => setMode("dark")}>
          Click
        </Button>
        <Button onClick={() => setMode("light")}>Click</Button>
        <Button icon="🔔" />
        <Button icon="refresh" disabled iconSpin>
          Click
        </Button>
      </Div>
      <Div>
        <Button type="secondary" to="/some-where" icon="back-square">
          Click
        </Button>
        <Button to="/home" newTab type="secondary" icon="shield-cross" iconRight>
          Click
        </Button>
        <Button type="secondary">Click</Button>
        <Button type="secondary" icon="heart" />
        <Button type="secondary" icon="bluetooth-circle" disabled>
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
        <Button type="empty" icon="location" />
        <Button type="empty" icon="lock" disabled>
          Click
        </Button>
      </Div>
      <Div>
        <Button type="border" icon="🍔">
          Click
        </Button>
        <Button type="border" icon="alarm" iconRight>
          Click
        </Button>
        <Button type="border">Click</Button>
        <Button type="border" icon="printer" />
        <Button type="border" icon="star-1" disabled>
          Click
        </Button>
      </Div>
    </>
  );
};

export default Buttons;
