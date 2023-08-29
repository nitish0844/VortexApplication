import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

const data = [
  {
    food: 'Salad with thousand island proteins',
    calories: '500 Calories',
    img: 'https://w7.pngwing.com/pngs/650/1008/png-transparent-greek-salad-caesar-salad-wrap-bean-salad-pasta-salad-salad-vegetable-salad-leaf-vegetable-food-recipe-thumbnail.png',
  },
  {
    food: 'Salad with Pepper',
    calories: '800 Calories',
    img: 'https://w7.pngwing.com/pngs/650/1008/png-transparent-greek-salad-caesar-salad-wrap-bean-salad-pasta-salad-salad-vegetable-salad-leaf-vegetable-food-recipe-thumbnail.png',
  },
  {
    food: 'Salad with thousand island proteins',
    calories: '200 Calories',
    img: 'https://w7.pngwing.com/pngs/650/1008/png-transparent-greek-salad-caesar-salad-wrap-bean-salad-pasta-salad-salad-vegetable-salad-leaf-vegetable-food-recipe-thumbnail.png',
  },
  {
    food: 'Salad with thousand island proteins',
    calories: '500 Calories',
    img: 'https://w7.pngwing.com/pngs/650/1008/png-transparent-greek-salad-caesar-salad-wrap-bean-salad-pasta-salad-salad-vegetable-salad-leaf-vegetable-food-recipe-thumbnail.png',
  },
  {
    food: 'Salad with thousand island proteins',
    calories: '500 Calories',
    img: 'https://w7.pngwing.com/pngs/650/1008/png-transparent-greek-salad-caesar-salad-wrap-bean-salad-pasta-salad-salad-vegetable-salad-leaf-vegetable-food-recipe-thumbnail.png',
  },
];

const NutrientFood = () => {
  const [Dietdata, setDietData] = useState([]);

  const options = {
    method: 'GET',
    url: 'https://edamam-recipe-search.p.rapidapi.com/api/recipes/v2',
    params: {
      type: 'public',
      co2EmissionsClass: 'A+',
      'field[0]': 'uri',
      beta: 'true',
      random: 'true',
      'cuisineType[0]': 'Indian',
      'imageSize[0]': 'SMALL',
      'mealType[0]': 'Breakfast',
      'health[0]': 'alcohol-cocktail',
      'diet[0]': 'low',
      'dishType[0]': 'Salad',
    },
    headers: {
      'Accept-Language': 'en',
      'X-RapidAPI-Key': 'd8c437c626msh86202fb6d2607bep123fc6jsnb8e6f7877b37',
      'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com',
    },
  };

  const fetchData = async () => {
    try {
      const response = await axios.request(options);
      // console.log(response.data);
      setDietData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // console.log(Dietdata.receipe);

  const renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      <Image source={{uri: item.img}} style={styles.itemImage} />
      <View style={styles.itemContent}>
        <Text style={styles.itemFood}>{item.food}</Text>
        <Text style={styles.itemCalories}>🔥 {item.calories}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.HeadContainer}>
        <Text style={styles.title}>Nutrition foods</Text>
        <TouchableOpacity style={styles.ViewContainer}>
          <Text style={styles.ViewAll}>View All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.flatListContent}
        style={styles.flatList} // Add this style
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    // marginLeft: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#000',
    top: 50,
  },
  HeadContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  ViewAll: {
    color: '#FFA500',
    textAlign: 'center',
  },
  ViewContainer: {
    alignItems: 'flex-end',
  },
  itemContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
  },
  itemImage: {
    width: 60,
    height: 60,
    marginRight: 10,
    borderRadius: 10,
  },
  itemContent: {
    flex: 1,
  },
  itemFood: {
    fontSize: 16,
    fontWeight: '500',
    color: '#fff',
  },
  itemCalories: {
    fontSize: 14,
    color: '#C5C5C5',
  },
  flatListContent: {
    paddingBottom: 80,
  },
  flatList: {
    flex: 1, // Make the FlatList take up all available space
    // paddingBottom: 80, // Adjust this value as needed
  },
});

export default NutrientFood;
