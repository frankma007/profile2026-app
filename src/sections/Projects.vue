<script setup lang="ts">
import { projects } from '../data/resume'
import ProjectCard from '../components/ProjectCard.vue'
</script>

<template>
  <section id="projects" class="scroll-mt-28 py-4">
    <div class="mx-auto max-w-7xl px-5">
      <header class="max-w-2xl" data-reveal>
        <p class="section-eyebrow text-sm">03 · Projects</p>
        <h2 class="mt-1 text-xl font-medium leading-tight">项目经历</h2>
      </header>

      <div class="mt-4 grid gap-4 ">
        <ProjectCard v-for="project in projects" :key="project.name" :project="project" />
      </div>
    </div>
  </section>
</template>
