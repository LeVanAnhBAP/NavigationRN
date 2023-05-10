import { FlatList, StyleSheet, View } from "react-native"
import CategoryGridItem from "../components/CategoryGridItem"
import { CATEGORIES } from "../data/dummy-data"
import { Category } from "../models/category"
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from "../components/types";

interface Props {
    navigation: NativeStackNavigationProp<RootStackParamList, 'MealDetailScreen'>;
}

function CategoriesScreen({navigation}: Props) {
    function renderItemCategory(itemCategory: Category) {
        function pressHandler() {
            navigation.navigate('MealsOverViewScreen', { mealId: itemCategory.id });
        }
        return (
            <CategoryGridItem onPress={pressHandler} title={itemCategory.title} color={itemCategory.color}></CategoryGridItem>
        )
    }
    return (
        <View style={styles.flatListContainer}>
            <FlatList data={CATEGORIES} keyExtractor={(itemCategory) => itemCategory.id} renderItem={(itemCategory) => renderItemCategory(itemCategory.item)} numColumns={2}></FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
    flatListContainer: {
        flex: 1,
        marginHorizontal: 16,
        marginTop: 32
    }
})

export default CategoriesScreen