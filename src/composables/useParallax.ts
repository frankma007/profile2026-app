import { onBeforeUnmount, onMounted } from 'vue'

// 只在桌面端写入 --scroll，移动端保留纯淡入并减少滚动计算。
export function useParallax() {
  let frameId = 0

  const writeScroll = () => {
    frameId = 0
    document.documentElement.style.setProperty('--scroll', String(window.scrollY))
  }

  const requestScrollWrite = () => {
    if (frameId) return
    frameId = window.requestAnimationFrame(writeScroll)
  }

  onMounted(() => {
    const canParallax =
      window.matchMedia('(min-width: 768px)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!canParallax) return

    window.addEventListener('scroll', requestScrollWrite, { passive: true })
    window.addEventListener('resize', requestScrollWrite, { passive: true })
    writeScroll()
  })

  onBeforeUnmount(() => {
    if (frameId) window.cancelAnimationFrame(frameId)
    window.removeEventListener('scroll', requestScrollWrite)
    window.removeEventListener('resize', requestScrollWrite)
  })
}
