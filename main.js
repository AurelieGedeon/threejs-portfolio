import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

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
const pointLight = new THREE.PointLight(0xffffff, 150, 100)
pointLight.position.set(3, 3, 12)

const ambientLight = new THREE.AmbientLight(0xffffff, 1.5)

scene.add(pointLight, ambientLight)

const lightHelper = new THREE.PointLightHelper(pointLight)
const gridHelper = new THREE.GridHelper(200, 50)
scene.add(lightHelper, gridHelper)



//Controls
const controls = new OrbitControls(camera, renderer.domElement)



function addStar(){
  const geometry = new THREE.SphereGeometry(0.25, 24, 24)
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff })
  const star = new THREE.Mesh( geometry, material )

  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100))

  star.position.set(x, y, z)
  scene.add(star)
}

Array(200).fill().forEach(addStar)

const spaceTexture = new THREE.TextureLoader().load('/images/space.jpeg')
spaceTexture.needsUpdate = true
scene.background = spaceTexture


//Avatar
const aurelieTexture = new THREE.TextureLoader().load('/images/aurelie.jpeg')
const aurelie = new THREE.Mesh(
  new THREE.BoxGeometry(3, 3, 3),
  new THREE.MeshBasicMaterial({ map: aurelieTexture })
)
scene.add(aurelie)


//Jupiter
const jupiterTexture = new THREE.TextureLoader().load('/images/jupiter.jpeg')

const jupiter = new THREE.Mesh(
  new THREE.SphereGeometry(5, 32, 32),
  new THREE.MeshStandardMaterial({ map:jupiterTexture })
) 
scene.add(jupiter)



function animate() {
  requestAnimationFrame( animate )

  torus.rotateX(0.01)
  torus.rotateY(0.005)
  torus.rotateZ(0.01)

  controls.update()

  renderer.render( scene, camera )
}

animate()