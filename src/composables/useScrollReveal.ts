import { onBeforeUnmount, onMounted } from 'vue'

// 入场动画只在元素第一次进入视口时触发，离开后不重复播放。
export function useScrollReveal() {
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      revealItems.forEach((item) => item.classList.add('is-visible'))
      return
    }

    observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-visible')
          currentObserver.unobserve(entry.target)
        })
      },
      { threshold: 0.18, rootMargin: '0px 0px -10% 0px' },
    )

    revealItems.forEach((item) => observer?.observe(item))
  })

  onBeforeUnmount(() => observer?.disconnect())
}
