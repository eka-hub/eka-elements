import Blocks from "./Blocks";
import Buttons from "./Buttons";
import Dots from "./Dots";
import MenuItems from "./MenuItems";
import RadioToggle from "./RadioToggle";
import Avatars from "./Avatars";
import Inputs from "./Inputs";
import { Button } from "../lib";

function Example() {
  return (
    <>
      <Button to="/icons" icon="3square">ICONS</Button>
      <br />
      <RadioToggle />
      <hr />
      <Inputs />
      <hr />
      <Avatars />
      <hr />
      <Buttons />
      <hr />
      <MenuItems />
      <hr />
      <Blocks />
      <hr />
      <Dots />
      <hr />
    </>
  );
}

export default Example;
