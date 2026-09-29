<script setup lang="ts">
defineProps<{ label: string }>()
</script>

<template>
  <span class="rounded-full border border-hairline bg-card px-4 py-1 text-sm text-muted">
    {{ label }}
  </span>
</template>
