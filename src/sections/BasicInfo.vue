<script setup lang="ts">
import { onBeforeUnmount, ref } from 'vue'
import { profile } from '../data/resume'

const copiedLabel = ref('')
let copyTimer: number | undefined

async function copyContact(label: string, value: string) {
  const resetAfterDelay = () => {
    window.clearTimeout(copyTimer)
    copyTimer = window.setTimeout(() => {
      copiedLabel.value = ''
    }, 1800)
  }

  try {
    if (!navigator.clipboard) throw new Error('Clipboard unavailable')
    await navigator.clipboard.writeText(value)
    copiedLabel.value = `已复制${label}`
  } catch {
    copiedLabel.value = '复制失败'
  }

  resetAfterDelay()
}

onBeforeUnmount(() => window.clearTimeout(copyTimer))
</script>

<template>
  <section id="basic" class="scroll-mt-28">
    <div class="mx-auto max-w-7xl px-5 pt-28">
      <div class="grid w-full gap-14 md:grid-cols-[minmax(0,300px),1fr] md:items-center md:gap-20">
        <!-- <div class="mx-auto w-full max-w-72 parallax-photo">
          <div class="photo-frame overflow-hidden" data-reveal="ripple">
            <img
              :src="profile.photo"
              :alt="profile.name"
              class="h-full w-full rounded-full object-cover"
            />
          </div>
        </div> -->

        <div class="parallax-text">
          <div class="grid gap-x-6 gap-y-5 md:grid-cols-2" data-reveal>
            <div>
              <p class="section-eyebrow text-sm">{{ profile.title }}</p>
              <h1 class="mt-2 text-3xl font-medium leading-tight md:text-4xl">{{ profile.name }}</h1>
            </div>

            <p class="text-muted md:self-end md:justify-self-end">{{ profile.meta }}</p>

            <!-- <button
              type="button"
              class="ink-button min-w-0 px-6 py-2 text-sm"
              aria-label="复制手机号"
              @click="copyContact('手机号', profile.phone)"
            >
              {{ profile.phone }}
            </button> -->

            <button
              type="button"
              class="ghost-button min-w-0 px-6 py-2 text-sm"
              aria-label="复制邮箱"
              @click="copyContact('邮箱', profile.email)"
            >
              {{ profile.email }}
            </button>

            <p class="h-6 text-sm text-muted md:col-span-2" aria-live="polite">{{ copiedLabel }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
