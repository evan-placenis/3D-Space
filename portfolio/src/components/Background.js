
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

function Background(){
    const canvasRef = useRef(null);
    useEffect(()=>{
        // Code to run on component mount
        


        // Moon DELETE MOON
        // const moonTexture = new THREE.TextureLoader().load('moon.jpg');
        // const normalTexture = new THREE.TextureLoader().load('normal.jpg');

        // const moon = new THREE.Mesh(
        //   new THREE.SphereGeometry(3, 32, 32),
        //   new THREE.MeshStandardMaterial({
        //     map: moonTexture,
        //     normalMap: normalTexture,
        //   })
        // );

        // scene.add(moon);
        // Perform any side effects or async operations here
    }, []); // Empty dependency array to run the effect only once on mount
  
    return <canvas ref={canvasRef} />;
        
}

export default Background



    
        // // Setup

        // const scene = new THREE.Scene();

        // const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

        // const renderer = new THREE.WebGLRenderer({
        //     canvas: canvasRef.current,
        // });

        // renderer.setPixelRatio(window.devicePixelRatio);
        // renderer.setSize(window.innerWidth, window.innerHeight);
        // camera.position.setZ(50);
        // camera.position.setX(10);

        // renderer.render(scene, camera);

        // // Torus  DELETE TORUS

        // const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
        // const material = new THREE.MeshStandardMaterial({ color: 0x808080 });
        // const torus = new THREE.Mesh(geometry, material);
        // torus.position.set(-10,0,-10);
        // scene.add(torus);

        // // Lights

        // const pointLight = new THREE.PointLight(0xffffff);
        // pointLight.position.set(5, 5, 5);

        // const ambientLight = new THREE.AmbientLight(0xffffff);
        // scene.add(pointLight, ambientLight);

        // // Helpers

        // const lightHelper = new THREE.PointLightHelper(pointLight)
        // const gridHelper = new THREE.GridHelper(200, 50);
        // scene.add(lightHelper, gridHelper)

        // const controls = new OrbitControls(camera, renderer.domElement);

        // function addStar() {
        // const geometry = new THREE.SphereGeometry(0.25, 24, 24);
        // const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
        // const star = new THREE.Mesh(geometry, material);

        // const [x, y, z] = Array(3)
        //     .fill()
        //     .map(() => THREE.MathUtils.randFloatSpread(100));

        // star.position.set(x, y, z);
        // scene.add(star);
        // }

        // Array(200).fill().forEach(addStar);

        // // Background

        // const spaceTexture = new THREE.TextureLoader().load('background/bg3.jpg');
        // scene.background = spaceTexture;

        // const galaxyTexture = new THREE.TextureLoader().load('background/galaxy.jpg');
        // // Avatar (add blocks)
        // function addGalaxy(){
        
        // const galaxy = new THREE.Mesh(new THREE.SphereGeometry(6,32,32), new THREE.MeshBasicMaterial({ map: galaxyTexture }));

        // const [x, y, z] = Array(3)
        //     .fill()
        //     .map(() => THREE.MathUtils.randFloatSpread(100));

        //     galaxy.position.set(x, y, z);
        //     scene.add(galaxy);
        // }

        // Array(5).fill().forEach(addGalaxy);


        // const boxTexture = new THREE.TextureLoader().load('background/sky.jpg');
        // const box = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ map: boxTexture }));
        // box.position.z = -5;
        // box.position.x = 2;
        // scene.add(box);

        // // Scroll Animation
        // function moveCamera() {
        // const t = document.body.getBoundingClientRect().top;

        // box.rotation.y += 0.05;
        // box.rotation.z += 0.05;

        // camera.position.z = t * -0.01;
        // camera.position.x = t * -0.0005;
        // camera.rotation.y = t * -0.0002;

        // }

        // document.body.onscroll = moveCamera;
        // moveCamera();

        // // Animation Loop

        // function animate() {
        // requestAnimationFrame(animate);

        // torus.rotation.x += 0.01;
        // torus.rotation.y += 0.005;
        // torus.rotation.z += 0.01;


        // //controls.update();

        // renderer.render(scene, camera);
        
        // }

        // animate();
