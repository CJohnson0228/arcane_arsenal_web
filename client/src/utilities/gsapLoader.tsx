import gsap from 'gsap'

export const gsapLoader = () => {
  return gsap.to('.content', { autoAlpha: 0, duration: 0.5 })
}