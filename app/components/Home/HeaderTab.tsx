import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface IHeaderButton {
  text: string;
  textColor: string;
  buttonColor: string;
  activeTab: string;
  setActiveTab: any;
}

interface IHeaderTabProps {
  activeTab: string;
  setActiveTab: any;
}

const HeaderTab = (props: IHeaderTabProps) => {
  const [activeTab, setActiveTab] = useState("Delivery");
  return (
    <View style={{ flexDirection: "row", alignSelf: "center" }}>
      <HeaderButton
        text="Delivery"
        textColor="white"
        buttonColor="black"
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      />
      <HeaderButton
        text="Pickup"
        textColor="white"
        buttonColor="black"
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      />
    </View>
  );
};

export default HeaderTab;

const styles = StyleSheet.create({});

const HeaderButton = (props: IHeaderButton) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: props.activeTab == props.text ? "black" : "white",
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 30,
      }}
      onPress={() => props.setActiveTab(props.text)}
    >
      <View>
        <Text
          style={{
            color: props.activeTab == props.text ? "white" : "black",
            fontSize: 14,
            fontWeight: "900",
          }}
        >
          {props.text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
