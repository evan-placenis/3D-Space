import React, {useEffect, useRef} from 'react';
import * as THREE from 'three';
import bg3 from '../background/bg3.jpg'
import sky from '../background/sky.jpg'
import galaxy from '../background/galaxy.jpg'

function Setup(){
    // Setup
    const canvasRef = useRef(null);

    useEffect(() =>{
        if (!canvasRef.current) return;
        
        //setup scene, camera, renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
        
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        
        camera.position.setZ(50);
        camera.position.setX(10);
        camera.position.setY(0);

        renderer.render(scene, camera);

        // Background
        const spaceTexture = new THREE.TextureLoader().load(bg3);
        scene.background = spaceTexture;

        // Lights
        const pointLight = new THREE.PointLight(0xffffff);
        pointLight.position.set(5, 5, 5);

        const ambientLight = new THREE.AmbientLight(0xffffff);
        scene.add(pointLight, ambientLight);

        // Torus  DELETE TORUS
        const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
        const material = new THREE.MeshStandardMaterial({ color: 0x808080 });
        const torus = new THREE.Mesh(geometry, material);
        torus.position.set(-10,0,-10);
        scene.add(torus);

        //Stars
        function addStar() {
            const geometry = new THREE.SphereGeometry(0.25, 24, 24);
            const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
            const star = new THREE.Mesh(geometry, material);

            const [x, y, z] = Array(3)
                .fill()
                .map(() => THREE.MathUtils.randFloatSpread(100));

            star.position.set(x, y, z);
            scene.add(star);
        }

        Array(100).fill().forEach(addStar);

         // Galaxy spheres
        const galaxyTexture = new THREE.TextureLoader().load(galaxy);
        function addGalaxy(){
            const galaxy = new THREE.Mesh(new THREE.SphereGeometry(6,32,32), new THREE.MeshBasicMaterial({ map: galaxyTexture }));

            const [x, y, z] = Array(3)
                .fill()
                .map(() => THREE.MathUtils.randFloatSpread(100));

                galaxy.position.set(x, y, z);
                scene.add(galaxy);
        }

        Array(5).fill().forEach(addGalaxy);

        //Box
        const boxTexture = new THREE.TextureLoader().load(sky);
        const box = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ map: boxTexture }));
        box.position.z = -2;
        box.position.x = 2;
        scene.add(box);


        // Animation Loop
        const animate = () =>{
            requestAnimationFrame(animate);
            const t = canvasRef.current.getBoundingClientRect().top;
            torus.rotation.x += 0.01;
            torus.rotation.y += 0.005;
            torus.rotation.z += 0.01;

            //controls.update();
            renderer.render(scene, camera);
        }
        animate();

        //WHEEL METHOD OF SCROLLING
        const handleWheel = (event) => {
            event.preventDefault();
            const delta = event.deltaY;
            const scrollSpeed = 0.015;
            camera.position.z += delta * scrollSpeed;
            camera.position.x += delta * scrollSpeed * -0.1;
            camera.rotation.y += delta * scrollSpeed * -0.0002;

            box.rotation.x += 0.10;
            box.rotation.y += 0.05;
            box.rotation.z += 0.10;
    
            renderer.render(scene, camera);
          };

          canvasRef.current.addEventListener('wheel', handleWheel, { passive: false });

        //handle Window Resizing
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.render(scene, camera);
        };

        window.addEventListener('resize', handleResize);

        //Cleanup
        return() => {
            canvasRef.current.removeEventListener('wheel', handleWheel);
            window.removeEventListener('resize', handleResize);
            renderer.dispose();
        }
    }, []);

    return(
        <div style={{ overflow: 'hidden', width: '100%', height: '100vh' }}>
            <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />
        </div>
    )
        
}

export default Setup