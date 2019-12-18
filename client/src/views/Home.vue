<template>
  <div class="home-page">
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">stock-ex</h1>
        <p>One-Stop-Shop for Indian Stock Market</p>
      </div>
    </div>
    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <router-link
                  :to="{ name: 'home' }"
                  exact
                  class="nav-link"
                  active-class="active"
                >
                  Stock Details
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  :to="{ name: 'corpactions' }"
                  exact
                  class="nav-link"
                  active-class="active"
                >
                  Corporate Actions
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  :to="{ name: 'announcements' }"
                  exact
                  class="nav-link"
                  active-class="active"
                >
                  Announcements
                </router-link>
              </li>
            </ul>
          </div>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import RwvTag from "@/components/VTag";
import { FETCH_SYMBOL } from "@/store/actions.type";

export default {
  name: "home",
  components: {
    RwvTag
  },
  mounted() {
    
  },
  computed: {
    ...mapGetters([]),
    tag() {
      return this.$route.params.tag;
    }
  }
};
</script>
