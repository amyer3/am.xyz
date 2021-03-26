import * as THREE from 'three'
import Stats from 'stats.js'

import './globe.css'
import { Mesh } from 'three'

/**
 * 
 * @param {viewbox_id, canvas_id} props 
 */
const radius = 2.5;
const segments = 60


export default function make_globe(props) {
    let viewbox_id = props != undefined ? props.viewbox_id : 'globe_viewbox'
    let canvas_id = props != undefined ? props.canvas_id : 'globe_canvas'
    // if the browser is IE 10 or earlier, we should fallback onto a CSS or SVG render
    var isIE = /*@cc_on!@*/false || !!document.documentMode;

    const globe_viewbox = document.getElementById(viewbox_id )
    const globe_canvas = document.getElementById(canvas_id)
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, globe_canvas.clientWidth / globe_canvas.clientHeight, 0.1, 2000)
    const renderer = new THREE.WebGLRenderer({canvas: globe_canvas, alpha: true})
    renderer.setSize(globe_viewbox.clientWidth, globe_viewbox.clientHeight)
    renderer.setClearColor(0xffffff, 0);
    //globe_viewbox.appendChild(renderer.domElement)

    const halo_geometry = new THREE.CircleGeometry(radius, segments)
    const halo_material = new THREE.MeshBasicMaterial({ color: "rgb(190, 299, 191)", side: THREE.DoubleSide})
    const halo = new THREE.Mesh(halo_geometry, halo_material)
    halo.scale.multiplyScalar(1.17)

    scene.add(halo)
    

    // const geometry = new THREE.SphereGeometry(radius, segments, segments);
    // const material = new THREE.MeshBasicMaterial({ color: '#0E0E52' });
    // const sphere = new THREE.Mesh(geometry, material);
    // scene.add(sphere);

    var stats = create_stats()
    document.body.appendChild(stats.domElement)

    const spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(100, 1000, 100);

    spotLight.castShadow = true;

    spotLight.shadow.mapSize.width = 1024;
    spotLight.shadow.mapSize.height = 1024;

    spotLight.shadow.camera.near = 500;
    spotLight.shadow.camera.far = 4000;
    spotLight.shadow.camera.fov = 30;

    scene.add(spotLight);

    camera.position.z = 5;
    const animate = function () {
        requestAnimationFrame(animate);

        halo.rotation.y += 0.01;

        renderer.render(scene, camera);
        stats.update()
        
    };

    animate();
}

function create_stats() {
    var stats = new Stats()
    stats.setMode(0);

    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0';
    stats.domElement.style.top = '0';

    return stats;
}