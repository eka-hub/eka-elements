import { Block, Toggle, Radio, useDarkMode } from "../lib";
const Div = ({ ...rest }) => <div style={{ margin: "10px", display: "flex", gap: "10px" }} {...rest} />;

const Dots = () => {
  const { setMode } = useDarkMode();
  return (
    <Div>
      <Block>
        <Toggle name="e1" onChange={(e) => console.log(`toggle: ${e.target.checked}`)} />
        <br />
        <Toggle name="e2" active />
        <br />
        <Toggle name="e3" onChange={(e) => setMode(e.target.checked ? "dark" : "light")} />
        <br />
        <Toggle disabled />
      </Block>
      <Block>
        <Radio name="contact" value="w1" />
        <br />
        <Radio name="contact" active value="w2" />
        <br />
        <Radio name="contact" value="w3" />
        <br />
        <Radio name="contact" value="w4" disabled />
      </Block>
    </Div>
  );
};

export default Dots;
