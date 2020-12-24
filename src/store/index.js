import { createStore } from 'vuex';

import state from './state.js';
import mutations from './mutation.js';
import actions from './action.js';
import getters from './getters.js';

const store = createStore({
    state,
    mutations,
    actions,
    getters
}
);

export default store;