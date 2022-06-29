import { Avatar } from "@rneui/themed";

const HeaderAvatar = () => {
  return (
    <Avatar
      size={32}
      rounded
      source={{
        uri: "https://images.pexels.com/photos/11293709/pexels-photo-11293709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      }}
    />
  );
};

export default HeaderAvatar;
