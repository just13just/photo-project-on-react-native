import React from 'react'
import {
    Image,
    TouchableOpacity,
    View,
    StyleSheet
} from 'react-native'

const ModalPage = ({ bigPhoto, resetModal }) => {

    return (
        <View style={styles.wrap}>
            <View>
                <TouchableOpacity onPress={() => resetModal()} style={styles.container}>
                    <Image style={styles.img} source={{ uri: bigPhoto }}></Image>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ModalPage

const styles = StyleSheet.create({
    img: {
        width: '100%',
        height: '100%',
    }
})

