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
        <Button design="secondary" to="/some-where" icon="back-square">
          Click
        </Button>
        <Button to="/home" newTab design="secondary" icon="shield-cross" iconRight>
          Click
        </Button>
        <Button design="secondary">Click</Button>
        <Button design="secondary" icon="heart" />
        <Button design="secondary" icon="bluetooth-circle" disabled>
          Click
        </Button>
      </Div>
      <Div>
        <Button design="empty" icon="key">
          Click
        </Button>
        <Button design="empty" icon="info-circle" iconRight>
          Click
        </Button>
        <Button design="empty">Click</Button>
        <Button design="empty" icon="location" />
        <Button design="empty" icon="lock" disabled>
          Click
        </Button>
      </Div>
      <Div>
        <Button design="border" icon="🍔">
          Click
        </Button>
        <Button design="border" icon="alarm" iconRight>
          Click
        </Button>
        <Button design="border">Click</Button>
        <Button design="border" icon="printer" />
        <Button design="border" icon="star-1" disabled>
          Click
        </Button>
      </Div>
    </>
  );
};

export default Buttons;
