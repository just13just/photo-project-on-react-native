import { photosAPI } from "../api/api"

const SET_PHOTOS = "SET_PHOTOS"
const SET_PAGE_NUM = "SET_PAGE_NUM"
const SET_BIG_PHOTO = "SET_BIG_PHOTO"

const initialState = {
    photos: [],
    pageNum: 1,
    bigPhoto: null
}

const photosReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_PHOTOS:
            return { ...state, photos: [...action.photos] }

        case SET_PAGE_NUM:
            return { ...state, pageNum: action.num }

        case SET_BIG_PHOTO:
            return { ...state, bigPhoto: action.bigPhoto }

        default:
            return state
    }
}

export const setPhotos = (photos) => {
    return { type: SET_PHOTOS, photos }
}
export const setPageNum = (num) => {
    return { type: SET_PAGE_NUM, num }
}
export const setBigPhoto = (bigPhoto) => {
    return { type: SET_BIG_PHOTO, bigPhoto }
}

export const getPhotos = (currentPage) => {
    return dispatch => {
        photosAPI.getPhotos(currentPage)
            .then(res => res.json())
            .then(res => dispatch(setPhotos(res)))
            .catch(err => console.error(err))
    }
}

export default photosReducer;