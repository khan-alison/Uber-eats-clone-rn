import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

interface IAboutProps {
  route: any;
}

const About = (props: IAboutProps) => {
  const { name, image, price, reviews, rating, categories } =
    props.route.params;
  // yelpRestaurantInfo;

  const formatCategories = categories.map((cat: any) => cat.title).join(" • ");

  const description = `${formatCategories} ${
    price ? " • " + price : ""
  } • 🎫 • ⭐ (${reviews}+)`;
  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantName name={name} />
      <RestaurantDescription description={description} />
    </View>
  );
};

export default About;

const styles = StyleSheet.create({});

interface IRestaurantImageProps {
  image: string;
}

const RestaurantImage = (props: IRestaurantImageProps) => (
  <Image source={{ uri: props.image }} style={{ width: "100%", height: 180 }} />
);

interface IRestaurantNameProps {
  name: string;
}

const RestaurantName = (props: IRestaurantNameProps) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: "600",
      margin: 10,
      marginHorizontal: 15,
    }}
  >
    {props.name}
  </Text>
);

interface IRestaurantDescriptionProps {
  description: string;
}

const RestaurantDescription = (props: IRestaurantDescriptionProps) => (
  <Text
    style={{
      marginTop: 10,
      marginHorizontal: 15,
      fontWeight: "400",
      fontSize: 15.5,
    }}
  >
    {props.description}
  </Text>
);
