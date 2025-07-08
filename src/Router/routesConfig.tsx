// routesConfig.tsx
import Layout from "../layout";
import CodeEditor from "../pages/saas/CodeEditor";
import Dashboard from "../pages/dashboard/Dashboard";
import Landing from "../pages/general/Landing";

// Component imports
import Accordion from "../pages/components/Accordion";
import Alert from "../pages/components/Alert";
import Badge from "../pages/components/Badge";
import Button from "../pages/components/Button";
import Cards from "../pages/components/Cards";
import Charts from "../pages/components/Charts";
import Command from "../pages/components/Command";
import ContextMenu from "../pages/components/ContextMenu";
import Datatable from "../pages/components/Datatable";
import Drawer from "../pages/components/Drawer";
import Dropdown from "../pages/components/Dropdown";
import FileUpload from "../pages/components/FileUpload";
import FormElements from "../pages/components/FormElements";
import Loaders from "../pages/components/Loaders";
import MenuBar from "../pages/components/MenuBar";
import Modal from "../pages/components/Modal";
import Sheet from "../pages/components/Sheet";
import Skeletons from "../pages/components/Skeletons";
import Table from "../pages/components/Table";
import Tabs from "../pages/components/Tabs";
import Toast from "../pages/components/Toast";
import Tooltip from "../pages/components/Tooltip";

const routesConfig = [
  {
    element: <Layout />,
    children: [
      { element: <Landing />, index: true },
      { path: "dashboard", element: <Dashboard /> },
      {
        path: "components",
        children: [
          { path: "accordion", element: <Accordion /> },
          { path: "alert", element: <Alert /> },
          { path: "badge", element: <Badge /> },
          { path: "button", element: <Button /> },
          { path: "cards", element: <Cards /> },
          { path: "charts", element: <Charts /> },
          { path: "command", element: <Command /> },
          { path: "context-menu", element: <ContextMenu /> },
          { path: "datatable", element: <Datatable /> },
          { path: "drawer", element: <Drawer /> },
          { path: "dropdown", element: <Dropdown /> },
          { path: "file-upload", element: <FileUpload /> },
          { path: "form-elements", element: <FormElements /> },
          { path: "loaders", element: <Loaders /> },
          { path: "menu-bar", element: <MenuBar /> },
          { path: "modal", element: <Modal /> },
          { path: "sheet", element: <Sheet /> },
          { path: "skeletons", element: <Skeletons /> },
          { path: "table", element: <Table /> },
          { path: "tabs", element: <Tabs /> },
          { path: "toast", element: <Toast /> },
          { path: "tooltip", element: <Tooltip /> },
        ],
      },
      {
        path: "saas-components",
        children: [{ path: "code-editor", element: <CodeEditor /> }],
      },
    ],
  },
];

export default routesConfig;
