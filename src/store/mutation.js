export default {
    setToken(state, newToken) {
        state.token = newToken;
    },
    setRefreshToken(state, newRefreshToken) {
        state.refreshToken = newRefreshToken;
    },
    setUserId(state, newUserId) {
        state.userId = newUserId;
    },
    setPagePos(state, newPagePos) {
        state.pagePos = newPagePos;
    },
    addItem(state, item) {
        let existItem = state.cart.find(value =>
            value.id == item.id
        );
        if (existItem) {
            existItem.count += item.count;
        }
        else {
            state.cart.push(item);
        }
    },
    deleteItem(state, id) {
        state.cart = state.cart.filter((value) => {
            return value.id != id;
        })
    }
}