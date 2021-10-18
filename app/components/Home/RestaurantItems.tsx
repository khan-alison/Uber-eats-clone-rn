import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const localRestaurants = [
  {
    name: "Beachside bar",
    image_url:
      "https://i.pinimg.com/474x/8d/3e/40/8d3e408a28ce796ec66df4d302f21e0b--swinging-chair-beach-bars.jpg",
    categories: ["Cafe", "Bar"],
    price: "$$",
    review: 1234,
    rating: 4.5,
  },
  {
    name: "taylor restaurant",
    image_url:
      "https://i.pinimg.com/564x/91/22/c4/9122c4e19c692d38d67d4649175a943a.jpg",
    categories: ["Cafe", "Bar"],
    price: "$$",
    review: 1234,
    rating: 5,
  },
  {
    name: "dusk coffee",
    image_url:
      "https://i.pinimg.com/564x/6b/ac/0e/6bac0e730cc52bbe82046cd81773b559.jpg",
    categories: ["Cafe", "Bar"],
    price: "$$",
    review: 1234,
    rating: 4.9,
  },
  {
    name: "dawn restaurant",
    image_url:
      "https://i.pinimg.com/564x/31/e7/90/31e790608f4193d4174a19dd19a4dd33.jpg",
    categories: ["Food", "Bar"],
    price: "$$",
    reviews: 1234,
    rating: 3.6,
  },
];

interface IRestaurantItemsProps {
  restaurantData: any;
  navigation: any;
}

const RestaurantItems = (props: IRestaurantItemsProps) => {
  return (
    <>
      {props.restaurantData.map((restaurant: any, index: number) => (
        <TouchableOpacity
          key={index}
          activeOpacity={1}
          style={{ marginBottom: 10 }}
          onPress={() =>
            props.navigation.navigate("RestaurantDetail", {
              name: restaurant.name,
              image: restaurant.image_url,
              price: restaurant.price,
              reviews: restaurant.review_count,
              rating: restaurant.rating,
              categories: restaurant.categories,
            })
          }
        >
          <View
            style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}
          >
            <RestaurantImage image={restaurant.image_url} />
            <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
};

export default RestaurantItems;

const styles = StyleSheet.create({});

interface IRestaurantImage {
  image: any;
}

const RestaurantImage = (props: IRestaurantImage) => (
  <>
    <Image
      source={{
        uri: props.image,
      }}
      style={{
        height: 180,
        width: "100%",
      }}
    />
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
      <MaterialCommunityIcons name="heart-outline" size={24} color="white" />
    </TouchableOpacity>
  </>
);

interface IRestaurantInfo {
  name: string;
  rating: number;
}

const RestaurantInfo = (props: IRestaurantInfo) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
    }}
  >
    <View>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
      <Text style={{ fontSize: 13, color: "grey" }}>30-45 &middot; min</Text>
    </View>
    <View
      style={{
        backgroundColor: "#eee",
        height: 30,
        width: 30,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
      }}
    >
      <Text>{props.rating}</Text>
    </View>
  </View>
);
