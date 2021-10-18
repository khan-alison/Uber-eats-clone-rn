import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";
import BouncyCheckBox from "react-native-bouncy-checkbox";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/actions/addToCartAction";

interface IMenuItemsProps {
  foods?: any;
  restaurantName?: any;
  hideCheckbox?: boolean;
  marginLeft?: number;
}

const MenuItems = (props: IMenuItemsProps) => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state: any) => {
    return state.cartReducer.selectedItems.items;
  });

  const isFoodInCart = (food: any, cartItems: any) => {
    return Boolean(cartItems.find((item: any) => item.title === food.title));
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {props.foods.map((food: any, index: number) => (
        <View key={index}>
          <View style={styles.menuItemStyle}>
            {props.hideCheckbox ? (
              <></>
            ) : (
              <BouncyCheckBox
                iconStyle={{
                  borderColor: "green",
                  borderRadius: 2,
                }}
                fillColor="green"
                onPress={(checkboxValue) => {
                  dispatch(
                    addToCart({
                      ...food,
                      restaurantName: props.restaurantName,
                      checkboxValue: checkboxValue,
                    })
                  );
                }}
                isChecked={isFoodInCart(food, cartItems)}
              />
            )}
            <FoodInfo food={food} />
            <FoodImage
              food={food}
              marginLeft={props.marginLeft ? props.marginLeft : 0}
            />
          </View>
          <Divider
            width={0.5}
            orientation="vertical"
            style={{ marginHorizontal: 20 }}
          />
        </View>
      ))}
      {props.hideCheckbox ? (
        <></>
      ) : (
        <View style={{ width: 1, height: 350 }}></View>
      )}
    </ScrollView>
  );
};

export default MenuItems;

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
  titleStyle: {
    fontSize: 19,
    fontWeight: "600",
  },
});

interface IFoodInfoProps {
  food: any;
}

const FoodInfo = (props: IFoodInfoProps) => (
  <View style={{ width: 240, justifyContent: "space-evenly" }}>
    <Text style={styles.titleStyle}>{props.food.title}</Text>
    <Text>{props.food.description}</Text>
    <Text>{props.food.price}</Text>
  </View>
);

interface IFoodImageProps {
  food: any;
  marginLeft: number;
}

const FoodImage = (props: IFoodImageProps) => (
  <View>
    <Image
      source={{ uri: props.food.image }}
      style={{ width: 100, height: 100, borderRadius: props.marginLeft }}
    />
  </View>
);
