import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { Colors } from "../assets/utilities";

const SearchInput = () => {
  return (
    <View>
      <TextInput
        placeholder="What are you looking for ?"
        placeholderTextColor={Colors.Border600}
        style={[styles.searchInput]}
        autoCapitalize="sentences"
      />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  searchInput: {
    borderWidth: 0.2,
    borderColor: Colors.Border600,
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 15,
    letterSpacing: 0.8,
    fontSize: 16,
    color: Colors.Main,
  },
});
