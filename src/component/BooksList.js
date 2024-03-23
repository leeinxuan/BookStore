import React from "react";
import { Text, FlatList, StyleSheet,View } from "react-native";
import booklist from "../json/book.json";
import BookDetail from "./BookDetail";

const BooksList = ({ navigation }) => {

    return (
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>
          {booklist[0].title}
        </Text>
        <FlatList
          horizontal={true}
          data={booklist[0].data}
          renderItem={({item}) => <BookDetail book={item} navigation={navigation}/>}
          keyExtractor={item => item.bookname}
        />
        <Text style={styles.sectionHeader}>
          {booklist[1].title}
        </Text>
        <FlatList
          horizontal={true}
          data={booklist[1].data}
          renderItem={({item}) => <BookDetail book={item} navigation={navigation}/>}
          keyExtractor={item => item.bookname}
        />
      </View>
    );  
  };

  const styles = StyleSheet.create({
    section: {
      marginLeft: 20,
      backgroundColor:'#fff'
    },
    sectionHeader: {
        fontWeight: 'bold',
        fontSize: 24,
        paddingTop: 8
      }
  })

  export default BooksList;
  

