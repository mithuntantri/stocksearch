<template>
  <div>
    <div v-if="isLoading" class="article-preview">Loading corporate announcements...</div>
    <div v-else>
      <div v-if="corpactions.length === 0" class="article-preview">
        No Corporate Announcements are here... yet.
      </div>
      <RwvAnnouncementsPreview
        v-for="(announcement, index) in corpannouncements"
        :announcement="announcement"
        :key="announcement.time + index"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import RwvAnnouncementsPreview from "./VAnnouncementsPreview";
import RwvCorpInfo from "./VCorpInfo";
import { FETCH_SYMBOL } from "../store/actions.type";

export default {
  name: "RwvSymbolList",
  components: {
    RwvCorpInfo,
    RwvAnnouncementsPreview
  },
  props: {
  },
  computed: {
    ...mapGetters(["corpinfo", "isLoading", "tracker", "message", "corpactions", "corpannouncements"])
  },
  methods: {
    fetchSymbol() {
      this.$store.dispatch(FETCH_SYMBOL, this.symbol);
    }
  }
};
</script>
