import React from "react";
import { View } from "react-native";
import BookList from "../component/BooksList";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{flex: 1}}>
      <BookList 
        navigation={navigation}
      />
    </View>
  );
};

export default HomeScreen;