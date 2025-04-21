import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "./Theme/ThemeContext";

const rootEl = document.getElementById("root");
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}
