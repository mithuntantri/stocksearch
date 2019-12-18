<template>
  <footer>
    <div class="container">
      <span class="attribution">
        Developed & Maintained by&nbsp;
        <router-link class="logo-font" :to="{ name: 'home', params: {} }">
          mithuntantri
        </router-link>
      </span>
    </div>
  </footer>
</template>

<script>
export default {
  name: "RwvFooter"
};
</script>
