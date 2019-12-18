<template>
  <div class="article-preview">
    <div style="display:flex;">
    <h1 v-text="info.symbol_name"/>
      &nbsp;
      &nbsp;
      <h1>[<b><span v-text="tracker.ltp"></span></b>
      <ChevronUpIcon v-if="tracker.change >= 0" style="margin:0 5px;line-height: 30px;fill:#2ecc71;font-size:30px;"/>
      <ChevronDownIcon v-if="tracker.change < 0" style="margin:0px 5px;line-height: 35px;fill:#ff4d5a;font-size:30px;"/>
      <span v-text="tracker.change" style="font-size:15px;">
      </span><span style="font-size:15px;">%</span>]</h1>
    </div>
    <div style="margin: 10px 0;color:#5d5d5d;">
      Open: <span v-text="tracker.open" style="font-size:17px;"></span> | 
      High: <span v-text="tracker.high" style="font-size:17px;"></span> |
      Low: <span v-text="tracker.low" style="font-size:17px;"></span> |
      Close: <span v-text="tracker.close" style="font-size:17px;"></span>
    </div>
    <div style="color:#5d5d5d;">
      Traded Volume: <span v-text="tracker.volume" style="font-size:17px;"></span>
    </div>
  </div>
</template>

<script>
import ChevronUpIcon from 'vue-ionicons/dist/ios-arrow-dropup-circle.vue'
import ChevronDownIcon from 'vue-ionicons/dist/ios-arrow-dropdown-circle.vue'

export default {
  name: "RwvCorpInfo",
  components: {
    ChevronUpIcon,
    ChevronDownIcon
  },
  props: {
    info: { type: Object, required: true },
    tracker: { type: Object, required: true}
  },
  computed: {
    
  }
};
</script>
