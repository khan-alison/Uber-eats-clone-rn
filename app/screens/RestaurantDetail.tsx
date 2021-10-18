import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Divider } from "react-native-elements";
import About from "../components/RestaurantDetail/About";
import MenuItems from "../components/RestaurantDetail/MenuItems";
import ViewCart from "../components/RestaurantDetail/ViewCart";

const foods = [
  {
    title: "Pho",
    description:
      "Vietnamese soup that is normally made with a bone-beef broth, banh pho noodles, and thinly sliced beef",
    price: "$10",
    image:
      "https://i.pinimg.com/474x/b9/54/f0/b954f0dc87ce4e58ce08ba30d3d10aae.jpg",
  },
  {
    title: "Bun Cha",
    description:
      "Vietnamese dish of grilled pork and noodle, which is thought to have originated from Hanoi, Vietnam. ✨ ",
    price: "$10",
    image:
      "https://i.pinimg.com/474x/c6/16/10/c616105e94bd259c1ffffe0070ddf40a.jpg",
  },
  {
    title: "Bun Dau Mam Tom",
    description: "Vietnam is a paradise for food lovers all over the world 🇻🇳 ",
    price: "$10",
    image:
      "https://i.pinimg.com/474x/e3/ae/98/e3ae987d6331e2794ea301f5341791aa.jpg",
  },
  {
    title: "Hu Tieu",
    description:
      "Hu tieu is a noodle soup made using pork bone broth and sugar for a sweet undertone. 🔥 ",
    price: "$10",
    image:
      "https://i.pinimg.com/474x/f6/ba/78/f6ba789373e00648c36445571e8fb6c1.jpg",
  },
  {
    title: "Hu Tieu",
    description:
      "Hu tieu is a noodle soup made using pork bone broth and sugar for a sweet undertone. 🔥 ",
    price: "$10",
    image:
      "https://i.pinimg.com/474x/f6/ba/78/f6ba789373e00648c36445571e8fb6c1.jpg",
  },
  {
    title: "Hu Tieu",
    description:
      "Hu tieu is a noodle soup made using pork bone broth and sugar for a sweet undertone. 🔥 ",
    price: "$10",
    image:
      "https://i.pinimg.com/474x/f6/ba/78/f6ba789373e00648c36445571e8fb6c1.jpg",
  },
  {
    title: "Hu Tieu",
    description:
      "Hu tieu is a noodle soup made using pork bone broth and sugar for a sweet undertone. 🔥 ",
    price: "$10",
    image:
      "https://i.pinimg.com/474x/f6/ba/78/f6ba789373e00648c36445571e8fb6c1.jpg",
  },
  {
    title: "Hu Tieu",
    description:
      "Hu tieu is a noodle soup made using pork bone broth and sugar for a sweet undertone. 🔥 ",
    price: "$10",
    image:
      "https://i.pinimg.com/474x/f6/ba/78/f6ba789373e00648c36445571e8fb6c1.jpg",
  },
];

const RestaurantDetail = ({ route, navigation }: any) => {
  return (
    <View>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItems restaurantName={route.params.name} foods={foods} />
      <ViewCart navigation={navigation} />
    </View>
  );
};

export default RestaurantDetail;

const styles = StyleSheet.create({});
