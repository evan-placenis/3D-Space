
// import React, { useState, useEffect} from 'react';
// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// function Objects(){
//     const [position, setPosition] = useState()
//     // Torus  DELETE TORUS
//     const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
//     const material = new THREE.MeshStandardMaterial({ color: 0x808080 });
//     const torus = new THREE.Mesh(geometry, material);
//     torus.position.set(-10,0,-10);
//     scene.add(torus);

//     // Avatar (add blocks)
//     function addGalaxy(){

//     const galaxy = new THREE.Mesh(new THREE.SphereGeometry(6,32,32), new THREE.MeshBasicMaterial({ map: galaxyTexture }));

//     const [x, y, z] = Array(3)
//         .fill()
//         .map(() => THREE.MathUtils.randFloatSpread(100));

//         galaxy.position.set(x, y, z);
//         scene.add(galaxy);
//     }

//     Array(5).fill().forEach(addGalaxy);

//     return(
//         <div>
//         </div>
//     )

// }
// export default Objects