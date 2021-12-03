import { Dot } from "../lib";

const Div = ({ ...rest }) => <div style={{ margin: "10px", display: "flex", gap: "10px" }} {...rest} />;

const Dots = () => {
  return (
    <>
      <Div>
        <Dot /> 
        <Dot state="active" />
      </Div>
    </>
  );
};

export default Dots;
