import { Block, Select } from "../lib";

const Selects = () => {
  return (
    <Block>
      <Select>
        <option>Option 1</option>
        <option>this is really Very long option</option>
        <option>Option 3</option>
      </Select>
      <br />
      <Select title="Language" hint="You can select a language">
        <option>Option 1</option>
        <option>this is really Very long option</option>
        <option>Option 3</option>
      </Select>
      <br />
      <Select multiple>
        <option>Option 1</option>
        <option>Option 1.5</option>
        <option>Option 2</option>
        <option>Option 3</option>
        <option>this is really Very long option</option>
      </Select>
    </Block>
  );
};

export default Selects;
