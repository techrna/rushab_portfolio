import "./App.css";
import Lottie from "react-lottie";
import animationData from "./dev_anima.json";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { themeOptions } from "./theme/AppTheme";
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
        <header className="App-header">
        
              <Lottie options={defaultOptions} height={400} width={400} />
              <Typography variant="h3" component="h3">
                Rushab Ambre
              </Typography>
       
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
