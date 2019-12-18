<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <router-link class="navbar-brand" :to="{ name: 'home' }">
        mithuntantri
      </router-link>
      <ul class="nav navbar-nav pull-xs-right">
        <li class="nav-item">
        <form @submit.prevent="onSubmit" style="width:310px;display:flex;line-height: 33px;height: 38px;border-color: #528ff0;border: 1px solid rgba(0,0,0,0.07);box-shadow: 2px 4px 9px 1px rgba(0,0,0,0.05);justify-content:space-between;padding:0 12px;">
            <div class="sidebar">
              <input type="text" style="border:none;text-transform:capitalize;"
              class="form-control form-control-md"
              v-model="symbol"
              placeholder="Search Symbol. Ex: RELINFRA"/>
            </div>
            <button style="position: relative;color: #528ff0;border:none;background:#fff;outline:none;display:flex;">
            Search
            <AlertIcon style="fill:#528ff0;line-height:38px;margin-left:5px;" />
            </button>
            </form>
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link"
            active-class="active"
            exact
            :to="{ name: 'home' }"
          >
            Home
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
import { FETCH_SYMBOL } from "@/store/actions.type";
import AlertIcon from 'vue-ionicons/dist/ios-arrow-forward.vue'

export default {
  name: "RwvHeader",
  data() {
    return {
      symbol: ""
    };
  },
  components:{
    AlertIcon 
  },
  computed: {
    ...mapGetters([])
  },
  methods: {
    onSubmit() {
      if(this.symbol.length > 2){
        this.$store.dispatch(FETCH_SYMBOL, this.symbol)
        window.localStorage.setItem('symbol', this.symbol);      
        this.symbol = ""
      }
    }
  }
};
</script>
