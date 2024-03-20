import React from "react";
import { Text, Image, StyleSheet, View } from "react-native";

const BookDetail = ({book}) => {
    return (
        <View style={{ flexDirection: 'column' }}>
            <View style={styles.cardContainerStyle}>
                <View style={styles.cardSectionStyle}>
                    <Image
                        style={styles.imageStyle}
                        source={{ uri: book.image }}
                    />
                </View>
            </View>
            <View>
                <Text style={styles.headerTitleStyle}>{book.bookname}</Text>
                <Text style={styles.headerContentStyle}>{book.author}</Text>
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    cardContainerStyle: {
      marginRight: 16,
      marginTop: 16,
      paddingLeft: 0
    },
    headerTitleStyle: {
      color: '#000',
      marginTop: 16,
      fontSize: 16,
      lineHeight: 18,
      fontWeight: 'bold',
    },
    headerContentStyle: {
      marginTop: 8,
      fontSize: 12,
      fontWeight: '300',
      color: "#131313",
      width: '100%'
    },
    imageStyle: {
      height: 200,
      width: 140,
    }
    ,homeStarList: {
      marginTop: 16.5
    }
  });

export default BookDetail;


