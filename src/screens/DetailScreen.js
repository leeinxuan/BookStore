import React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import StarList from '../component/StarList';

const DetailScreen = ({ route }) => {
  const {
    bookname,
    author,
    image,
    star,
    descriptions,
    showStar,
  } = route.params;
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: image }}
        style={styles.ImageStyle}
      />
      <View style={styles.info}>
        <Text style={styles.bookTextStyle}>{bookname}</Text>
        <Text style={styles.authorTextStyle}>{author}</Text>
        <View style={styles.starSection}>
          {showStar ? <StarList star={star} /> : null}
          {showStar ? <Text style={styles.score}>
            {star}.0 <Text style={styles.scoreNum}>/ 5.0</Text>
          </Text> : null}
        </View>
        <Text style={styles.descriptionText}>{descriptions}</Text>
      </View>
      
      <Pressable style={styles.buttonStyle}>
        <Text style={styles.buttonText}>Buy Now for $46.99</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 20
  },
  ImageStyle: {
    width: 210,
    height: 300
  },
  info: {
    alignItems: 'center',
    marginTop:28,
    marginBottom:28
  },
  bookTextStyle: {
    fontSize: 24,
    fontWeight: '500',
  },
  authorTextStyle: {
    fontSize: 14,
    fontWeight: '400',
    color: '#666666',
    marginBottom:8
  },
  starSection: {
    flexDirection: 'row',
    marginBottom:8
  },
  scoreNum:{
    color:'#666666'
  },
  descriptionText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#131313',
    lineHeight: 24,
    
    textAlign: 'center'
  },
  buttonStyle: {
    width:190,
    height:36,
    backgroundColor:'#6200EE',
    borderRadius:4,
    justifyContent:'center',
    alignItems:'center'
  },
  buttonText:{
    color:'#fff',
    fontSize:16,
    letterSpacing: 0.8,
  }

});

export default DetailScreen;