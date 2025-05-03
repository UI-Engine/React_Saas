// routesConfig.tsx
import Layout from "../layout";
import Dashboard from "../pages/Dashboard";
import Landing from "../pages/Landing";

const routesConfig = [
  {
    element: <Layout />,
    children: [
      { element: <Landing />, index: true },
      { path: "dashboard", element: <Dashboard /> },
    ],
  },
];

export default routesConfig;
