import "./App.css";

import React, { useRef,useState } from "react";
import Lottie from "react-lottie";
import animationData from "./dev_anima.json";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Canvas,useFrame } from 'react-three-fiber';
import { themeOptions } from "./theme/AppTheme";
import { Points, PointMaterial } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'
import { Typography } from "@mui/material";

function Stars(props) {
  const ref = useRef()
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }))
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10
    ref.current.rotation.y -= delta / 15
  })
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial transparent color="#ffa0e0" size={0.005} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  )
}
const theme = createTheme(themeOptions);
function App() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };


  return (
    <ThemeProvider theme={theme}>
      <div className="App">
          <Canvas camera={{ position: [0, 0, 1] }} style={{position:"fixed"}}>
            <Stars />
          </Canvas>
          <Lottie options={defaultOptions} height={400} width={400} />
          <Typography  variant="h2" component="h2">
            Rushab Ambre
          </Typography>
      </div>
    </ThemeProvider>
  );
}

export default App;
