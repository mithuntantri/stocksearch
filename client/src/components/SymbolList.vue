<template>
  <div>
    <div v-if="isLoading" class="article-preview">Loading symbol info...</div>
    <div v-if="!isLoading && message" class="article-preview" v-text="message"></div>
    <div v-if="!isLoading && !message">
      <RwvCorpInfo :info="corpinfo" :tracker="tracker"/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import RwvCorpInfo from "./VCorpInfo";
import { FETCH_SYMBOL } from "../store/actions.type";

export default {
  name: "RwvSymbolList",
  components: {
    RwvCorpInfo
  },
  props: {
  },
  computed: {
    ...mapGetters(["corpinfo", "isLoading", "tracker", "message"])
  },
  mounted() {
    this.symbol=window.localStorage.getItem('symbol')?window.localStorage.getItem('symbol'):"RELINFRA"
    this.fetchSymbol();
  },
  methods: {
    fetchSymbol() {
      this.$store.dispatch(FETCH_SYMBOL, this.symbol);
    }
  }
};
</script>
