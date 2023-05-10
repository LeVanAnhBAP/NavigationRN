import { View, Text, StyleSheet } from "react-native"

interface Props {
    list: string[]
}

function List({ list }: Props) {
    return (
        <>
            {list.map((item) => {
                return (
                    <View style={styles.itemContainer} key={item}>
                        <Text>{item}</Text>
                    </View>
                )
            })}
        </>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        marginHorizontal: 24,
        alignItems:'center',
        width:'60%',
        borderRadius: 8,
        backgroundColor:'#ccc',
        marginBottom: 8,
        padding: 8,
    }
})

export default List
