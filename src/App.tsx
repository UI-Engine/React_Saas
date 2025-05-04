import "./styles/main.css";
import { ThemeProvider } from "./Theme/ThemeContext";
import AppRouter from "./Router";

const App = () => {
  return (
    <>
      <ThemeProvider>
        <AppRouter />
      </ThemeProvider>
    </>
  );
};

export default App;
