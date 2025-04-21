import "./styles/main.css";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { Button } from "./components/Button";
import Spinner from "./components/Spinner";

const App = () => {
  return (
    <>
      <div className="">
        <h1>Rsbuild with React</h1>
        <p>Start building amazing things with Rsbuild.</p>
      </div>
      <div className="p-8 ">
        <h1 className="text-2xl text-secondary">SaaS UI</h1>
        <Button className="mb-2" outline>
          <Spinner size={"sm"} className="mr-2" /> Primary
        </Button>
        <Button color="dark" outline>
          secondary
        </Button>
      </div>
      <ThemeSwitcher />
    </>
  );
};

export default App;
