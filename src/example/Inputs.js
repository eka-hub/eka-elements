import { Block, Input } from "../lib";

const Blocks = () => {
  return (
    <Block>
      <Input />
      <br />
      <Input icon="search" placeholder="Search" />
      <br />
      <Input type="password" />
      <br />
      <Input icon="user-info" title="Name" warning />
      <br />
      <Input disabled />
    </Block>
  );
};

export default Blocks;
