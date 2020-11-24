import React, { useEffect } from 'react'
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import {
  Provider,
  useDispatch,
  useSelector
} from 'react-redux'
import MainPageContainer from './components/MainPageContainer';
import { getPhotos } from './redux/photosReducer'
import store from './redux/redux-store'

const App = () => {

  const photos = useSelector(state => state.photos)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPhotos())
  }, [dispatch])

  if (!photos.length) {
    return <View style={styles.preloaderWrap}>
      <Text style={styles.text}>Hello</Text>
    </View>
  }
  return (
    <View style={styles.sectionContainer}>
      <MainPageContainer />
    </View>
  )
}

export default withStore = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  preloaderWrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'tomato',
  },
  text: {
    fontSize: 30,
    color: 'white'
  }
})
