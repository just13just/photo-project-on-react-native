import React from 'react';
import {
    StyleSheet,
    Text,
    SafeAreaView,
    ScrollView,
    View,
    Image,
    Button, TouchableOpacity
} from 'react-native';

const MainPage = (props) => {

    const { photos, nextPage, prevPage, pageNum, getBigPhoto } = props

    const photosList = photos.map(item => (
        <View key={item.id} style={styles.containerItem}>
            <TouchableOpacity
                onPress={getBigPhoto.bind(null, item.urls.regular)}
            >
                <Image
                    style={styles.thumbImg}
                    source={{ uri: item.urls.thumb }}
                />
            </TouchableOpacity>
            <View>
                <Text style={styles.text}>{item.alt_description}</Text>
                <Text style={styles.name}>Author - {item.user.first_name + ' ' + item.user.last_name}</Text>
            </View>
        </View>))

    const prevNextBtn = (
        <View style={styles.btnRow}>
            <Button onPress={prevPage} title='Previous' disabled={pageNum === 1 ? true : false} />
            <Button onPress={nextPage} title='Next' />
        </View>)

    return (
        <SafeAreaView>
            <ScrollView style={styles.scrollView}>
                {prevNextBtn}
                {photosList}
                {prevNextBtn}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        marginHorizontal: 15,
    },
    text: {
        fontSize: 22,
    },
    thumbImg: {
        width: 150,
        height: 150,
        borderRadius: 5
    },
    btnRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    containerItem: {
        marginVertical: 10,
        padding: 10,
        backgroundColor: '#f5f5f5',
        borderRadius: 5
    }
})

export default MainPage;