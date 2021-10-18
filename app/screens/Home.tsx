import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import Categories from "../components/Home/Categories";
import HeaderTab from "../components/Home/HeaderTab";
import RestaurantItems, {
  localRestaurants,
} from "../components/Home/RestaurantItems";
import SearchBar from "../components/Home/SearchBar";
import { Divider } from "react-native-elements";
import BottomTab from "../components/Home/BottomTab";
import navigation from "../../navigation";

const YELP_API_KEY =
  "c3vXppTdP06W_Clug2HqImsb6avtlaqM4rM8-pGr7NTYTC3Ranrclj0FLdjCCuXUqvmvlkIN4QLbp8PDrLU3MYkopCyEGD24DMGbpwOBTNCWOZcSoCgYlWO4L-5oYXYx";

interface IHomeProps {
  navigation: any;
}

const Home = (props: IHomeProps) => {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState("San Francisco");
  const [activeTab, setActiveTab] = useState("Delivery");
  const getRestaurantFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    // const apiOptions = {
    //   headers: {
    //     Authorization: `Bearer ${YELP_API_KEY}`,
    //   },
    // };
    // return fetch(yelpUrl, apiOptions)
    //   .then((res) => res.json())
    //   .then((json) =>
    //     setRestaurantData(
    //       json.businesses.filter((business: any) =>
    //         business.transactions.includes(activeTab.toLowerCase())
    //       )
    //     )
    //   );
    axios
      .get(`${yelpUrl}`, {
        headers: {
          Authorization: `Bearer ${YELP_API_KEY}`,
        },
      })
      .then((res: any) => {
        setRestaurantData(
          res.data.businesses.filter((business: any) =>
            business.transactions.includes(activeTab.toLowerCase())
          )
        );
      });
  };

  useEffect(() => {
    getRestaurantFromYelp();
  }, [city, activeTab]);
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "#fff", padding: 15 }}>
        <HeaderTab activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar cityHandle={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems
          restaurantData={restaurantData}
          navigation={props.navigation}
        />
      </ScrollView>
      <Divider width={1} />
      <BottomTab />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
