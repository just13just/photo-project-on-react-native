import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPhotos, setBigPhoto, setPageNum } from '../redux/photosReducer'
import MainPage from './MainPage'
import ModalPage from './ModalPage'


const MainPageContainer = () => {

    const dispatch = useDispatch()
    const photos = useSelector(state => state.photos)
    const pageNum = useSelector(state => state.pageNum)
    const bigPhoto = useSelector(state => state.bigPhoto)

    const nextPage = () => dispatch(setPageNum(pageNum + 1))
    const prevPage = () => dispatch(setPageNum(pageNum - 1))
    const getBigPhoto = (url) => dispatch(setBigPhoto(url))
    const resetModal = () => getBigPhoto(null)

    useEffect(() => {
        dispatch(getPhotos(pageNum))
    }, [pageNum])

    if (bigPhoto === null) {
        return (
            <MainPage
                photos={photos}
                pageNum={pageNum}
                nextPage={nextPage}
                prevPage={prevPage}
                getBigPhoto={getBigPhoto}
            />
        )
    }
    return (
        <ModalPage
            bigPhoto={bigPhoto}
            resetModal={resetModal} />
    )
}

export default MainPageContainer;