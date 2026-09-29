<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const navItems = [
  { id: 'basic', label: '基本信息' },
  { id: 'skills', label: '核心技能' },
  { id: 'work', label: '工作经历' },
  { id: 'projects', label: '项目经历' },
] as const

type SectionId = (typeof navItems)[number]['id']
const activeSection = ref<SectionId>('basic')
let sectionObserver: IntersectionObserver | null = null

onMounted(() => {
  const sections = navItems
    .map((item) => document.getElementById(item.id))
    .filter((section): section is HTMLElement => section !== null)

  sectionObserver = new IntersectionObserver(
    (entries) => {
      const current = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

      if (current) activeSection.value = current.target.id as SectionId
    },
    { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.2, 0.5, 0.8, 1] },
  )

  sections.forEach((section) => sectionObserver?.observe(section))
})

onBeforeUnmount(() => sectionObserver?.disconnect())
</script>

<template>
  <nav
    class="fixed left-1/2 top-5 z-20 -translate-x-1/2 rounded-full bg-card/90 px-2 py-1 shadow-ripple-near backdrop-blur-sm"
  >
    <ul class="flex items-center gap-1">
      <li v-for="item in navItems" :key="item.id">
        <a
          :href="`#${item.id}`"
          class="nav-link block rounded-full px-4 py-1.5 text-sm"
          :class="{ 'is-active': activeSection === item.id }"
        >
          {{ item.label }}
        </a>
      </li>
    </ul>
  </nav>
</template>
