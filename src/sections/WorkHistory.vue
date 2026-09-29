<script setup lang="ts">
import { workExperience } from '../data/resume'
import TimelineItem from '../components/TimelineItem.vue'
</script>

<template>
  <section id="work" class="scroll-mt-28 py-4">
    <div class="mx-auto max-w-7xl px-5">
      <header class="max-w-2xl" data-reveal>
        <p class="section-eyebrow text-sm">02 · Work</p>
        <h2 class="mt-1 text-xl font-medium leading-tight">工作经历</h2>
      </header>

      <ol class="timeline mt-4">
        <TimelineItem
          v-for="experience in workExperience"
          :key="`${experience.company}-${experience.period}`"
          :experience="experience"
        />
      </ol>
    </div>
  </section>
</template>
