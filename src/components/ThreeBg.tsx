'use client'
import { useEffect } from 'react'

export default function ThreeBg() {
  useEffect(() => {
    let THREE: any
    let renderer: any, camera: any, scene: any, torusKnot: any

    const runThree = async () => {
      THREE = (await import('three')).default
      scene = new THREE.Scene()
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
      renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('bg'), alpha: true })
      renderer.setSize(window.innerWidth, window.innerHeight)

      const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16)
      const material = new THREE.MeshStandardMaterial({ color: 0x6366f1, wireframe: true })
      torusKnot = new THREE.Mesh(geometry, material)
      scene.add(torusKnot)

      const pointLight = new THREE.PointLight(0xffffff)
      pointLight.position.set(20, 20, 20)
      scene.add(pointLight)

      camera.position.z = 50
      function animate() {
        requestAnimationFrame(animate)
        torusKnot.rotation.x += 0.003
        torusKnot.rotation.y += 0.003
        renderer.render(scene, camera)
      }
      animate()

      window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
      })
    }

    runThree()
    // clean up
    return () => {
      window.removeEventListener('resize', () => {})
    }
  }, [])

  return (
    <canvas id="bg" />
  )
}
