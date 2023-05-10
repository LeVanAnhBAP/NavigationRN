import { FlatList, StyleSheet, Text, View } from "react-native"
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from "../components/types";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { Meal } from "../models/meal";
import { useLayoutEffect } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

interface Props {
    navigation: NativeStackNavigationProp<RootStackParamList, 'MealsOverViewScreen'>;
}

function MealsOverViewScreen({navigation}: Props) {
    const route = useRoute<RouteProp<RootStackParamList, 'MealsOverViewScreen'>>();
    const mealId = route.params?.mealId;

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(mealId) >= 0
    })


    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => {
            return category.id === mealId
        })?.title

        navigation.setOptions({
            title: categoryTitle
        })
    }, [mealId, navigation])

    function renderItemMeals(itemMeal: Meal) {
        function onPressHandler() {
            navigation.navigate('MealDetailScreen', { meal: itemMeal });
        }
        return <MealItem onPress={onPressHandler} itemMeal={itemMeal}></MealItem>
    }

    return (
        <View style={styles.containerFlatListMeals}>
            <FlatList data={displayedMeals} keyExtractor={(item) => item.id} renderItem={(itemData) => renderItemMeals(itemData.item)} />
        </View>
    )
}

const styles = StyleSheet.create({
    containerFlatListMeals: {
        flex: 1
    }
})

export default MealsOverViewScreen