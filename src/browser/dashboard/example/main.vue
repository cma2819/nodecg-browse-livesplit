<template>
  <v-app :style="{minHeight: '520px'}">
    this is example bundle for {{ bundleName }}!
  </v-app>
</template>

<style scoped>
</style>

<script lang="ts">
/* global nodecg */
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class App extends Vue {
  get bundleName(): string {
    return nodecg.bundleName;
  }
}
</script>
