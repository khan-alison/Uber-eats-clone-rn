import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

const items = [
  {
    image: require("../../assets/image/shopping-bag.png"),
    text: "Pick up",
  },
  {
    image: require("../../assets/image/soft-drink.png"),
    text: "Sof drink",
  },
  {
    image: require("../../assets/image/bread.png"),
    text: "Bakery items",
  },
  {
    image: require("../../assets/image/fast-food.png"),
    text: "Fast food",
  },
  {
    image: require("../../assets/image/deals.png"),
    text: "Deals",
  },
  {
    image: require("../../assets/image/bread.png"),
    text: "Coffee & tea",
  },
  {
    image: require("../../assets/image/coffee.png"),
    text: "Fast food",
  },
  {
    image: require("../../assets/image/desserts.png"),
    text: "Desserts",
  },
];

const Categories = () => {
  return (
    <View
      style={{
        marginTop: 5,
        backgroundColor: "#fff",
        paddingVertical: 10,
        paddingLeft: 20,
      }}
    >
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {/* loop start */}
        {items.map((item: any, index: number) => (
          <View key={index} style={{ alignItems: "center", marginRight: 30 }}>
            <Image
              source={item.image}
              style={{
                width: 50,
                height: 40,
                resizeMode: "contain",
              }}
            />
            <Text style={{ fontSize: 14, fontWeight: "900" }}>{item.text}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({});
