import { Text, View, StyleSheet } from "react-native"

interface Props {
    children: string
}
function SubTitle({ children }: Props) {
    return (
        <View style={styles.titleContainer}>
            <Text style={styles.textTitle}>{children}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    titleContainer: {
        alignItems: 'center',
        marginHorizontal: 16,
        marginVertical: 16,
        paddingBottom: 8,
        borderBottomColor: 'white',
        borderBottomWidth: 2,
        width: '60%',
    },
    textTitle: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        alignItems: 'center',
    }
})
export default SubTitle