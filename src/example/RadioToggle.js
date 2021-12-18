import { Block, Toggle, Radio, useDarkMode } from "../lib";
const Div = ({ ...rest }) => <div style={{ margin: "10px", display: "flex", gap: "10px" }} {...rest} />;

const Dots = () => {
  const { setMode } = useDarkMode();
  return (
    <Div>
      <Block>
        <Toggle onChange={(v) => console.log(`toggle: ${v}`)} />
        <br />
        <Toggle active />
        <br />
        <Toggle onChange={(dark) => setMode(dark ? "dark" : "light")} />
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
