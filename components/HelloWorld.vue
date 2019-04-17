<template>
  <div
    class="absolute w-full h-full flex flex-col justify-center items-center bg-gray-200"
  >
    <fa-icon icon="globe" class="text-4xl world mb-2" />
    <div>Hello, world!</div>
  </div>
</template>

<script>
export default {
  components: {},
  props: [],
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>

<style scoped>
.world {
  @apply text-blue-500;
}
</style>
