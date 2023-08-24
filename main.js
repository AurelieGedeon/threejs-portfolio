import './style.css'

import * as THREE from 'three'

const sizes = {
  height: window.innerHeight,
  width: window.innerWidth
}

//Scene
const scene = new THREE.Scene()



//Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000)



//Render
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg')
})

renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(sizes.width, sizes.height)
camera.position.setZ(30)



//Geometry
const geometry = new THREE.TorusGeometry(10, 1, 16, 100)
const material = new THREE.MeshStandardMaterial({ color: 0xFF6347 });

const torus = new THREE.Mesh( geometry, material )
scene.add(torus)


//Light
const pointLight = new THREE.PointLight(0xffffff)


function animate() {
  requestAnimationFrame( animate )

  torus.rotateX(0.01)
  torus.rotateY(0.005)
  torus.rotateZ(0.01)
  renderer.render( scene, camera )
}

animate()