<template>
  <div class="root">
    <div
      v-if="currentTime !== null"
      class="time"
    >
      <span
        v-if="currentTime.day"
        class="day">
          {{ currentTime.day }}d
        </span>
      <span class="hour">
        {{ currentTime.hour.toString().padStart(2, '0') }}:
      </span>
      <span class="minute">
        {{ currentTime.minute.toString().padStart(2, '0') }}:
      </span>
      <span class="second">
        {{ currentTime.second.toString().padStart(2, '0') }}
      </span>
    </div>
  </div>
</template>

<style scoped>
.root {
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
}

.time {
  display: flex;
}
</style>

<script lang="ts">
/* global nodecg */
import { Vue, Component } from 'vue-property-decorator';
import { CurrentTime } from '../../../nodecg/generated';

@Component
export default class App extends Vue {
  currentTime: CurrentTime|null = null;

  created(): void {
    nodecg.Replicant('currentTime').on('change', (newVal) => {
      this.currentTime = newVal;
    });
  }

}
</script>
