import { Image, Platform, Pressable, StyleSheet, Text, View } from "react-native"
import { Meal } from "../models/meal";
import { useNavigation } from "@react-navigation/native"

interface Props {
    itemMeal: Meal;
    onPress: () => void
}
function MealItem({itemMeal, onPress}: Props) {
    return (
        <View style={styles.itemContainer}>
            <Pressable onPress={onPress} style={({ pressed }) => [styles.pressable, pressed ? styles.buttonPressed : null]} android_ripple={{ color: '#ccc' }}>
                <View style={styles.innerContainer}>
                    <View>
                        <Image style={styles.imageContainer} source={{ uri: itemMeal.imageUrl }}></Image>
                        <Text style={styles.styleTitle}>{itemMeal.title}</Text>
                    </View>
                    <View style={styles.itemDetail}>
                        <Text style={styles.textItemDetail}>{itemMeal.duration}m</Text>
                        <Text style={styles.textItemDetail}>{itemMeal.complexity.toUpperCase()}</Text>
                        <Text style={styles.textItemDetail}>{itemMeal.affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        margin: 32,
        marginHorizontal: 64,
        borderRadius: 8,
        backgroundColor: 'white',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 16,
        shadowColor: 'black',
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden'
    },
    pressable: {
        flex: 1,
    },
    buttonPressed: {
        opacity: 0.5
    },
    imageContainer: {
        width: '100%',
        height: 200,
        alignItems: 'center',
        justifyContent: 'center'
    },
    styleTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        margin: 8
    },
    itemDetail: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    textItemDetail: {
        padding: 4,
        color: 'black'
    }
})

export default MealItem