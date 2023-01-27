import { fetchUser, fetchCart } from "../utils/fetchLocalStorageData"

const userInfo = fetchUser();
const cartInfo = fetchCart();

export const initialState = {
    user: userInfo,
    bibleItems: null,
    cartShow: false,
    cartItems: cartInfo
};