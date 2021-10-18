import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const BottomTab = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        margin: 10,
        marginHorizontal: 30,
        justifyContent: "space-between",
      }}
    >
      <Icons icon="home" text="Home" />
      <Icons icon="search" text="Browse" />
      <Icons icon="shopping-bag" text="Grocery" />
      <Icons icon="receipt" text="Orders" />
      <Icons icon="user" text="Account" />
    </View>
  );
};

export default BottomTab;

const styles = StyleSheet.create({});

interface IIconsProps {
  icon: any;
  text: string;
}

const Icons = (props: IIconsProps) => (
  <TouchableOpacity>
    <View>
      <FontAwesome5
        name={props.icon}
        size={25}
        style={{ marginBottom: 3, alignSelf: "center" }}
      />
      <Text>{props.text}</Text>
    </View>
  </TouchableOpacity>
);
