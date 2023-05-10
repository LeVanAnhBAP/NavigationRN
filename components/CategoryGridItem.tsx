import { View, Text, StyleSheet, Pressable, Platform } from "react-native"

interface Props {
    title: string,
    color: string,
    onPress: () => void
}

function CategoryGridItem(props: Props) {
    return (
        <View style={styles.gridItem}>
            <Pressable onPress={props.onPress} android_ripple={{ color: '#cccccc' }} style={({ pressed }) => [styles.styleButton, pressed ? styles.buttonPressed : null]}>
                <View style={[styles.innerContainer, {backgroundColor: props.color}]}>
                    <Text style={styles.textTitle}>{props.title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        height: 150,
        borderRadius: 8,
        margin: 16,
        elevation: 4,
        shadowColor: 'black',
        backgroundColor: 'white',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    buttonPressed: {
        opacity: 0.5
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8
    },
    textTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'
    },
    styleButton: {
        flex: 1
    }
})

export default CategoryGridItem