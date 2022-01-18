import { Block, Avatar } from "../lib";

const Div = ({ ...rest }) => <div style={{ margin: "10px", display: "flex", gap: "10px" }} {...rest} />;

const Avatars = () => {
  return (
    <>
      <Div>
        <Block>
          <Avatar src="https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg" />
        </Block>
      </Div>
      <Div>
        <Block>
          <Avatar size={100} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo4zGSr25cTfr__JnNBlxju18g9geM7uir_g&usqp=CAU" />
        </Block>
      </Div>
    </>
  );
};

export default Avatars;
