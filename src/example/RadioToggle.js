import { Toggle } from "../lib";

const Dots = () => {
  return (
    <>
      <div>
        <Toggle onChange={v => console.log(`toggle: ${v}`)} />
        <br />
        <Toggle active />
        <br />
        <Toggle disabled />
      </div>
    </>
  );
};

export default Dots;
