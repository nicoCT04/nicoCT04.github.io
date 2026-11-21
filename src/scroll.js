// Scroll suave con la misma curva y duración que la versión en JavaScript
export function smoothScrollTo(targetPosition) {
  const startPosition = window.pageYOffset
  const distance = targetPosition - startPosition

  const baseDuration = 2000
  const distanceFactor = Math.abs(distance) / 1000
  const duration = Math.min(baseDuration + distanceFactor * 500, 3500)

  let startTime = null
  const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime
    const timeElapsed = currentTime - startTime
    const progress = Math.min(timeElapsed / duration, 1)
    window.scrollTo(0, startPosition + distance * ease(progress))
    if (timeElapsed < duration) requestAnimationFrame(animation)
  }

  requestAnimationFrame(animation)
}

// Offset de la barra de navegación
export const NAV_OFFSET = 70

export function scrollToHash(hash) {
  if (!hash || hash === '#') {
    smoothScrollTo(0)
    return
  }
  const target = document.querySelector(hash)
  if (!target) {
    console.error(`No se encontró el elemento con ID ${hash}`)
    return
  }
  smoothScrollTo(target.getBoundingClientRect().top + window.pageYOffset - NAV_OFFSET)
}
