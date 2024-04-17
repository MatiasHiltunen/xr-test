import { Canvas } from "@react-three/fiber";
import { Controllers, Hands, VRButton, XR } from "@react-three/xr";


function Demo(){
 return  <>
 <VRButton />
 <Canvas>
   <XR>
     <Controllers />
     <Hands />
     <mesh>
       <boxGeometry />
       <meshBasicMaterial color="blue" />
     </mesh>
   </XR>
 </Canvas>
</>
}


export default function App(){

 return <div>
  <Demo></Demo>
 </div>
}