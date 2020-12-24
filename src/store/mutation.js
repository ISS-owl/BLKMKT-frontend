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
    }
}