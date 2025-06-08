import React, { useEffect, useState } from "react";
import {
  DEFAULT_EDITOR_CONFIG,
  EditorConfig,
} from "../components/saas/CodeEditor/EditorConfig";
import CodeMirrorEditor from "../components/saas/CodeEditor/CodeMirrorEditor";
import Icon from "../components/Icons";
import { Tooltip } from "flowbite-react";
import ConfigForm from "../components/saas/CodeEditor/CodeEditorConfigForm";
import { useTheme } from "../Theme/ThemeContext";

const CodeEditor = () => {
  const [code, setCode] = useState(`function greeting() {
  console.log("Hello from your code editor!");
}`);
  const [config, setConfig] = useState<EditorConfig>(DEFAULT_EDITOR_CONFIG);
  const [fullScreen, setFullScreen] = useState(false);
  const toggleFullScreen = () => {
    setFullScreen(!fullScreen);
  };

  return (
    <div className="h-full lg:w-3/4 xl:w-1/2">
      <h1 className="mb-6 text-2xl font-bold">Code Editor Demo</h1>

      {/* Config display (temporary until we add controls) */}
      <div className="p-4 mb-6 bg-white rounded-sm shadow dark:bg-gray-800">
        {/* <pre className="text-sm text-gray-600 dark:text-gray-300">
          {JSON.stringify(config, null, 2)}
        </pre> */}
        <ConfigForm
          config={config}
          onChange={setConfig}
          defaultConfig={DEFAULT_EDITOR_CONFIG}
        />
      </div>

      <div
        className={`h-[400px] overflow-hidden rounded-sm shadow-lg ${
          fullScreen ? "fullscreen" : ""
        }`}
      >
        <div className="h-[2.5rem] border-b-0 border bg-base flex justify-end items-center gap-4 p-2">
          <LanguageDropdown config={config} />
          <Tooltip
            content={fullScreen ? "Minimize" : "Maximize"}
            placement="bottom"
            style="light"
          >
            <Icon
              name={fullScreen ? "Shrink" : "Expand"}
              className="pointer"
              onClick={toggleFullScreen}
            />
          </Tooltip>
        </div>
        <CodeMirrorEditor
          value={code}
          onChange={setCode}
          config={{
            ...config,
          }}
          className="h-full border"
        />
      </div>
    </div>
  );
};

interface LanguageDropdownProps {
  config: EditorConfig;
}

const LanguageDropdown: React.FC<LanguageDropdownProps> = ({ config }) => {
  return (
    <>
      <div>
        {/* <label className="block text-sm font-medium">Language</label> */}
        <select
          name="language"
          value={config.language}
          onChange={() => {}}
          className="mt-1 block w-full"
        >
          <option value="javascript">JavaScript</option>
          <option value="typescript">TypeScript</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
          <option value="csharp">C#</option>
          <option value="cpp">C++</option>
          <option value="html">HTML</option>
          <option value="css">CSS</option>
        </select>
      </div>
    </>
  );
};

export default CodeEditor;
