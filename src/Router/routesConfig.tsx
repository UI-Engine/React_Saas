// routesConfig.tsx
import Layout from "../layout";
import CodeEditor from "../pages/CodeEditor";
import Dashboard from "../pages/Dashboard";
import Landing from "../pages/Landing";

const routesConfig = [
  {
    element: <Layout />,
    children: [
      { element: <Landing />, index: true },
      { path: "dashboard", element: <Dashboard /> },
      {
        path: "saas-components",
        children: [{ path: "code-editor", element: <CodeEditor /> }],
      },
    ],
  },
];

export default routesConfig;
