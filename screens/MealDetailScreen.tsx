import React, { useContext, useLayoutEffect } from "react"
import { RouteProp, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native"
import List from "../components/MealDetail/List";
import SubTitle from "../components/MealDetail/SubTitle";
import { RootStackParamList } from "../components/types";
import { FavoritesContext } from "../store/context/favorites-context";
import { IconButton } from 'react-native-paper';

interface Props {
    navigation: NativeStackNavigationProp<RootStackParamList, 'MealDetailScreen'>;
}

function MealDetailScreen({navigation}: Props) {
    const favoriteMealsCtx = useContext(FavoritesContext)

    const route = useRoute<RouteProp<RootStackParamList, 'MealDetailScreen'>>();

    const meal = route.params?.meal;

    const mealIsFavorite = favoriteMealsCtx.ids.includes(meal.id)

    function changeFavoriteStatusHandler() {
        if (mealIsFavorite){

        }

    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <IconButton icon="rocket" size={30} iconColor="#900" onPress={changeFavoriteStatusHandler} />
                )
            }
        })

    })
    return (
        <ScrollView style={styles.itemContainer}>
            <View>
                <Image style={styles.imageContainer} source={{ uri: meal.imageUrl }}></Image>
                <Text style={styles.styleTitle}>{meal.title}</Text>
            </View>
            <View style={styles.itemDetail}>
                <Text style={styles.textItemDetail}>{meal.duration}m</Text>
                <Text style={styles.textItemDetail}>{meal.complexity.toUpperCase()}</Text>
                <Text style={styles.textItemDetail}>{meal.affordability.toUpperCase()}</Text>
            </View>
            <View style={styles.listOuterContainer}>
                <SubTitle children="Ingredients"></SubTitle>
                <List list={meal.ingredients} />
                <SubTitle children="Steps"></SubTitle>
                <List list={meal.steps} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden'
    },
    listOuterContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    pressable: {
        flex: 1,
    },
    buttonPressed: {
        opacity: 0.5
    },
    imageContainer: {
        width: '100%',
        height: 300,
        alignItems: 'center',
        justifyContent: 'center'
    },
    styleTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        margin: 8
    },
    itemDetail: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    textItemDetail: {
        padding: 4,
        color: 'white'
    },
})

export default MealDetailScreen