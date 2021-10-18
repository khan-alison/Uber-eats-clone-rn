import { ActionSheetIOS } from "react-native";

const initialState = {
  selectedItems: {
    items: [],
    restaurantName: "",
  },
};

export const cartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      let newState = { ...state };
      if (action.payload.checkboxValue) {
        newState.selectedItems = {
          //@ts-ignore
          items: [...newState.selectedItems.items, action.payload],
          restaurantName: action.payload.restaurantName,
        };
      } else {
        newState.selectedItems = {
          items: [
            ...newState.selectedItems.items.filter(
              (item: any) => item.title !== action.payload.title
            ),
          ],
          restaurantName: action.payload.restaurantName,
        };
      }
      return newState;
    }

    default:
      return initialState;
  }
};
