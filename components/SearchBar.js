import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  Pressable,
} from "react-native";
import React, { useRef, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";

const width = Dimensions.get("window").width;
// In reality, I will only retrieve the Post Id and process everything here

const SearchBar = () => {
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);

  const handleCancelPress = () => {
    inputRef.current.blur();
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#E5E5E5",
          borderRadius: 7,
        }}
      >
        <FontAwesome
          name="search"
          size={14}
          color="gray"
          style={{ marginLeft: 10 }}
        />
        <TextInput
          ref={inputRef}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder="Rechercher"
          style={{
            flex: 1,
            padding: 10,
            fontSize: 16,
            fontWeight: "600",
            // backgroundColor: "red",
          }}
        />
      </View>
      {isFocused && (
        <Pressable onPress={handleCancelPress}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
            }}
          >
            Annuler
          </Text>
        </Pressable>
      )}
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    flexDirection: "row",
    alignItems: "center",
    width: width - 40,
    marginHorizontal: 20,
    marginVertical: 5,
  },
});
