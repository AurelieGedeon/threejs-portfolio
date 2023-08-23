import './style.css'

import * as THREE from 'three'

const sizes = {
  height: window.innerHeight,
  width: window.innerWidth
}

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000)

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg')
})

renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(sizes.width, sizes.height)
camera.position.setZ(30)

renderer.render(scene, camera)

const geometry = new THREE.TorusGeometry(10, 1, 16, 100)
const material = new THREE.MeshBasicMaterial({
  color: 0xFF6347,
  wireframe: true
});
const torus = new THREE.Mesh( geometry, material )
scene.add(torus)