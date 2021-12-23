import { Block, Input } from "../lib";

const Blocks = () => {
  return (
    <Block>
      <Input />
      <br />
      <Input icon="search-normal-1" placeholder="Search" />
      <br />
      <Input type="password" />
      <br />
      <Input icon="profile-circle" title="Name" warning />
      <br />
      <Input disabled />
    </Block>
  );
};

export default Blocks;
