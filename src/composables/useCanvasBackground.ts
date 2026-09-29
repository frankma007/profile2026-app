import { onBeforeUnmount, onMounted, type Ref } from 'vue'

const RING_COUNT = 8
const RIPPLE_SPEED = 0.05
const RIPPLE_ALPHA = 0.055
const RIPPLE_SQUASH = 0.82
const INK_RGB = '28, 28, 30'

// Canvas 涟漪背景用连续扩散的同心弧替代彩色粒子，保持白上白的安静层次。
export function useCanvasBackground(canvas: Ref<HTMLCanvasElement | null>) {
  let context: CanvasRenderingContext2D | null = null
  let animationId = 0
  let startTime = 0
  let pausedAt = 0

  const resizeCanvas = () => {
    const element = canvas.value
    if (!element || !context) return

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const { width, height } = element.getBoundingClientRect()
    element.width = width * dpr
    element.height = height * dpr
    context.setTransform(dpr, 0, 0, dpr, 0, 0)
  }

  const drawFrame = (now: number) => {
    const element = canvas.value
    if (!element || !context) return

    const elapsedSeconds = (now - startTime) / 1000
    const { width, height } = element.getBoundingClientRect()
    const centerX = width * 0.74
    const centerY = height * 0.34
    const maxRadius = Math.hypot(width, height) * 0.72

    context.clearRect(0, 0, width, height)

    for (let index = 0; index < RING_COUNT; index += 1) {
      const progress = (elapsedSeconds * RIPPLE_SPEED + index / RING_COUNT) % 1
      const radius = maxRadius * (1 - (1 - progress) ** 2)
      const alpha = RIPPLE_ALPHA * (1 - progress) ** 1.6

      context.beginPath()
      context.strokeStyle = `rgba(${INK_RGB}, ${alpha.toFixed(3)})`
      context.lineWidth = Math.max(0.5, 1 - progress * 0.4)
      context.ellipse(centerX, centerY, radius, radius * RIPPLE_SQUASH, -0.1, 0, Math.PI * 2)
      context.stroke()
    }

    animationId = window.requestAnimationFrame(drawFrame)
  }

  const startAnimation = () => {
    if (animationId) return
    if (!startTime) startTime = performance.now()
    else startTime += performance.now() - pausedAt
    animationId = window.requestAnimationFrame(drawFrame)
  }

  const pauseAnimation = () => {
    if (!animationId) return
    window.cancelAnimationFrame(animationId)
    animationId = 0
    pausedAt = performance.now()
  }

  const handleVisibilityChange = () => {
    if (document.visibilityState === 'hidden') pauseAnimation()
    else startAnimation()
  }

  onMounted(() => {
    context = canvas.value?.getContext('2d') ?? null
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    document.addEventListener('visibilitychange', handleVisibilityChange)
    startAnimation()
  })

  onBeforeUnmount(() => {
    pauseAnimation()
    window.removeEventListener('resize', resizeCanvas)
    document.removeEventListener('visibilitychange', handleVisibilityChange)
  })
}
