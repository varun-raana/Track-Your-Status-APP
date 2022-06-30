import { StyleSheet, Image, View } from "react-native";

const ImageList = () => {
  return (
    <View style={styles.imageContainer}>
      <Image
        style={styles.image}
        source={{
          uri: "https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg?auto=compress&cs=tinysrgb&w=1600",
        }}
      />
      <Image
        style={styles.image}
        source={{
          uri: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1600",
        }}
      />
      <Image
        style={styles.image}
        source={{
          uri: "https://images.pexels.com/photos/2117283/pexels-photo-2117283.jpeg?auto=compress&cs=tinysrgb&w=1600",
        }}
      />
    </View>
  );
};

export default ImageList;

const styles = StyleSheet.create({
  image: {
    height: 30,
    width: 30,
    resizeMode: "cover",
    borderRadius: 50,
    marginLeft: -15,
    borderWidth: 1,
    borderColor: "white",
    overflow: "hidden",
  },
  imageContainer: {
    flexDirection: "row",
  },
});
