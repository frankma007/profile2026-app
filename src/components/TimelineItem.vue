<script setup lang="ts">
import type { WorkExperience } from '../data/resume'

defineProps<{ experience: WorkExperience }>()
</script>

<template>
  <li class="timeline-item grid gap-4" data-reveal>
    <span class="timeline-node" aria-hidden="true" />

    <article class="panel p-4 md:p-5">
      <div class="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <h3 class="text-base leading-tight">{{ experience.company }}</h3>
        <p class="text-sm text-muted">{{ experience.period }}</p>
      </div>

      <p class="mt-1 text-muted">{{ experience.role }}</p>

      <ul class="mt-4 space-y-2">
        <li v-for="duty in experience.duties" :key="duty" class="flex gap-3">
          <span class="mt-2.5 h-1 w-1 rounded-full bg-ink/20" />
          <span class="text-muted">{{ duty }}</span>
        </li>
      </ul>
    </article>
  </li>
</template>
