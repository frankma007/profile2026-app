<script setup lang="ts">
import BasicInfo from '../sections/BasicInfo.vue'
import Skills from '../sections/Skills.vue'
import WorkHistory from '../sections/WorkHistory.vue'
import Projects from '../sections/Projects.vue'
import { useParallax } from '../composables/useParallax'
import { useScrollReveal } from '../composables/useScrollReveal'

useParallax()
useScrollReveal()
</script>

<template>
  <main class="relative">
    <BasicInfo />
    <Skills />
    <WorkHistory />
    <Projects />
  </main>
</template>
