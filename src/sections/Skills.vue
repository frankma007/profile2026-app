<script setup lang="ts">
import { skillAreas } from '../data/resume'
</script>

<template>
  <section id="skills" class="scroll-mt-28 py-4">
    <div class="mx-auto max-w-7xl px-5">
      <header class="max-w-2xl" data-reveal>
        <p class="section-eyebrow text-sm">01 · Skills</p>
        <h2 class="mt-1 text-xl font-medium leading-tight">核心技能</h2>
      </header>

      <div class="mt-4" data-reveal>
        <article class="panel p-4 md:p-5">
          <div class="space-y-5">
            <div v-for="area in skillAreas" :key="area.name">
              <h3 class="text-base leading-tight">{{ area.name }}</h3>
              <p class="mt-2 text-muted">{{ area.description }}</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
