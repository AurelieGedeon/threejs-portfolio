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

