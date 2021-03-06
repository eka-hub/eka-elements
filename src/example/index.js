import Blocks from "./Blocks";
import Buttons from "./Buttons";
import Dots from "./Dots";
import MenuItems from "./MenuItems";
import RadioToggle from "./RadioToggle";
import Avatars from "./Avatars";
import Inputs from "./Inputs";
import Selects from "./Selects";
import Tabs from "./Tabs";
import { Button, useConnection } from "../lib";
import { useEffect } from "react";


function Example() {
  const { setConnected } = useConnection();

  useEffect(() => {
    window.addEventListener('online', () => {
      setConnected(true);
    })
    window.addEventListener('offline', () => {
      setConnected(false);
    });
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Button to="/icons" icon="3square">ICONS</Button>
      <br />
      <br />
      <Tabs />
      <hr />
      <Selects />
      <hr />
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
