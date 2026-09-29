<script setup lang="ts">
import SkillTag from './SkillTag.vue'
import type { Project } from '../data/resume'

defineProps<{ project: Project }>()
</script>

<template>
  <article data-reveal>
    <div class="panel project-card relative overflow-hidden p-4 md:p-5">
      <div class="project-card__ripple" aria-hidden="true" />

      <div class="relative z-10">
        <div class="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
          <h3 class="text-base leading-tight">{{ project.name }}</h3>
          <p v-if="project.company" class="text-sm text-muted">{{ project.company }} ｜ {{ project.period }}</p>
        </div>

        <p class="mt-3 text-muted">{{ project.description }}</p>

        <div v-if="project.highlights.length" class="mt-4">
          <h4 class="text-sm text-muted">亮点</h4>
          <ul class="mt-2 space-y-1">
            <li v-for="highlight in project.highlights" :key="highlight" class="text-muted">
              {{ highlight }}
            </li>
          </ul>
        </div>

        <ul class="mt-5 flex flex-wrap gap-2">
          <li v-for="tech in project.stack" :key="tech">
            <SkillTag :label="tech" />
          </li>
        </ul>
      </div>
    </div>
  </article>
</template>
