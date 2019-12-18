<template>
  <div class="article-preview">
    <div v-text="announcement.time"></div>
    <div v-text="announcement.name"></div>
  </div>
</template>

<script>

export default {
  name: "RwvAnnouncementsPreview",
  components: {
  },
  props: {
    announcement: { type: Object, required: true }
  },
};
</script>
