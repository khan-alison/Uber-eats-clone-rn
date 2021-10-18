import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import LottieView from "lottie-react-native";
import MenuItems from "../components/RestaurantDetail/MenuItems";
import firebase from "firebase";

const OrderCompleted = () => {
  const [lastOrder, setLastOrder] = useState({
    items: [
      {
        title: "Pho",
        description:
          "Vietnamese soup that is normally made with a bone-beef broth, banh pho noodles, and thinly sliced beef",
        price: "$10",
        image:
          "https://i.pinimg.com/474x/b9/54/f0/b954f0dc87ce4e58ce08ba30d3d10aae.jpg",
      },
    ],
  });
  const [modalVisible, setModalVisible] = useState(false);
  const { items, restaurantName } = useSelector(
    (state: any) => state.cartReducer.selectedItems
  );
  const total = items
    .map((item: any) => Number(item.price.replace("$", "")))
    .reduce((prev: any, curr: any) => prev + curr, 0);
  const totalUSD = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });

  useEffect(() => {
    const db = firebase.firestore();
    const unsubscribe = db
      .collection("orders")
      .orderBy("createAt", "desc")
      .limit(1)
      .onSnapshot((snapshot: any) => {
        snapshot.docs.map((doc: any) => {
          setLastOrder(doc.data());
        });
      });
    return () => unsubscribe();
  }, []);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ margin: 15, alignItems: "center" }}>
        <LottieView
          style={{ height: 100, alignSelf: "center", marginBottom: 30 }}
          source={require("../assets/animations/check-mark.json")}
          autoPlay
          speed={0.5}
          loop={false}
        />
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Your orders at {restaurantName} has been placed for {totalUSD}{" "}
        </Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <MenuItems foods={lastOrder.items} hideCheckbox={true} />
          <LottieView
            style={{ height: 200, alignSelf: "center", marginBottom: 50 }}
            source={require("../assets/animations/cooking.json")}
            autoPlay
            speed={0.5}
          />
          <View style={{ height: 150, width: 1 }} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default OrderCompleted;

const styles = StyleSheet.create({});
