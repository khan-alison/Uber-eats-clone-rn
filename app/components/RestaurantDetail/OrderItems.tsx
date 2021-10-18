import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface IOrderItemsProps {
  item: any;
}

const OrderItems = (props: IOrderItemsProps) => {
  const { title, price } = props.item;
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: "black",
      }}
    >
      <Text style={{ fontSize: 16, fontWeight: "600" }}>{title}</Text>
      <Text style={{ opacity: 0.7, fontSize: 16 }}>{price}</Text>
    </View>
  );
};

export default OrderItems;

const styles = StyleSheet.create({});
