import { Block, Input } from "../lib";

const Inputs = () => {
  return (
    <Block>
      <Input />
      <br />
      <Input icon="search-normal-1" placeholder="Search" />
      <br />
      <Input type="password" />
      <br />
      <Input icon="profile-circle" title="Name" warning={Math.random() >= 0.5} hint="This is hint" />
      <br />
      <Input disabled />
    </Block>
  );
};

export default Inputs;
