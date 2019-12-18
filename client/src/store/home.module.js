import { SymbolsService } from "@/commons/api.service";
import { FETCH_SYMBOL } from "./actions.type";
import {
  FETCH_START,
  FETCH_END,
  FETCH_WRONG_END
} from "./mutations.type";

const state = {
  isLoading: true,
  corpactions: [],
  corpannouncements : [],
  corpinfo : {},
  tracker: {},
  message: null
};

const getters = {
  corpactions(state) {
    return state.corpactions;
  },
  corpannouncements(state) {
    return state.corpannouncements;
  },
  message(state){
    return state.message
  },
  tracker(state){
    return state.tracker
  },
  isLoading(state) {
    return state.isLoading;
  },
  corpinfo(state) {
    return state.corpinfo;
  }
};

const actions = {
  [FETCH_SYMBOL]({ commit }, params) {
    commit(FETCH_START);
    return SymbolsService.query(params)
      .then(({ data }) => {
        console.log(data)
        if(data.data.corpinfo){
          commit(FETCH_END, data.data);
        }else{
          commit(FETCH_WRONG_END, data.data)
        }
      })
      .catch(error => {
        throw new Error(error);
      });
  }
};

/* eslint no-param-reassign: ["error", { "props": false }] */
const mutations = {
  [FETCH_START](state) {
    state.isLoading = true;
    state.message = null
  },
  [FETCH_END](state, { corpinfo, corpannouncements, corpactions, tracker }) {
    console.log("FETCH_END")
    state.corpinfo = corpinfo;
    state.corpannouncements = corpannouncements.announcements;
    state.corpactions = corpactions.actions;
    state.tracker = tracker;
    state.isLoading = false;
    state.message = null;
    console.log(state)
  },
  [FETCH_WRONG_END](state, {message}){
    console.log("FETCH_WRONG_END", message)
    state.isLoading = false;
    state.message = message
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
