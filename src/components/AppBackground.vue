<script setup lang="ts">
import { ref } from 'vue'
import { useCanvasBackground } from '../composables/useCanvasBackground'

const canvasElement = ref<HTMLCanvasElement | null>(null)

useCanvasBackground(canvasElement)
</script>

<template>
  <div class="app-background fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
    <canvas ref="canvasElement" class="h-full w-full" />
  </div>
</template>
