<template>
  <div>
    <div v-if="isLoading" class="article-preview">Loading corpactions...</div>
    <div v-else>
      <div v-if="corpactions.length === 0" class="article-preview">
        No Corporate Actions are here... yet.
      </div>
      <RwvActionPreview
        v-for="(action, index) in corpactions"
        :action="action"
        :key="action.date + index"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import RwvActionPreview from "./VActionPreview";
import RwvCorpInfo from "./VCorpInfo";
import { FETCH_SYMBOL } from "../store/actions.type";

export default {
  name: "RwvSymbolList",
  components: {
    RwvCorpInfo,
    RwvActionPreview
  },
  props: {
  },
  computed: {
    ...mapGetters(["corpinfo", "isLoading", "tracker", "message", "corpactions"])
  },
  methods: {
    fetchSymbol() {
      this.$store.dispatch(FETCH_SYMBOL, this.symbol);
    }
  }
};
</script>
