<template>
  <div class="article-preview">
    <div v-text="action.date"></div>
    <div v-text="action.action"></div>
  </div>
</template>

<script>

export default {
  name: "RwvActionPreview",
  components: {
  },
  props: {
    action: { type: Object, required: true }
  },
};
</script>
