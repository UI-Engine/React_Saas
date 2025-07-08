import React, { useEffect } from "react";
import { EditorConfig } from "./EditorConfig";
import { Button } from "@/components/ui/button";
interface ConfigFormProps {
  config: EditorConfig;
  onChange: (newConfig: EditorConfig) => void;
  defaultConfig: EditorConfig;
}

const ConfigForm: React.FC<ConfigFormProps> = ({
  config,
  onChange,
  defaultConfig,
}) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, type } = e.target;
    let value: string | boolean;

    if (type === "checkbox") {
      value = (e.target as HTMLInputElement).checked;
    } else {
      value = e.target.value;
    }

    onChange({ ...config, [name]: value });
  };

  const handleReset = () => {
    onChange({ ...defaultConfig });
  };

  useEffect(() => {
    console.log(config.backgroundColor);
    console.log(resolveCSSVariable(config.backgroundColor));
  }, []);

  const resolveCSSVariable = (value: any): string => {
    if (value.startsWith("var(")) {
      const varName = value.slice(4, -1).trim();
      return (
        getComputedStyle(document.documentElement)
          .getPropertyValue(varName)
          .trim() || value
      );
    }
    return value;
  };

  return (
    <form className="space-y-4">
      {/* Background Color */}
      <div>
        <label className="block text-sm font-medium">Background Color</label>
        <div className="flex items-center">
          <input
            type="color"
            name="backgroundColor"
            value={resolveCSSVariable(config.backgroundColor)}
            onChange={handleChange}
            className="mt-1 h-8 w-16"
          />
          <span className="ml-4 text-sm ">
            {resolveCSSVariable(config.backgroundColor)}
          </span>
        </div>
      </div>

      {/* Text Color */}
      <div>
        <label className="block text-sm font-medium ">Text Color</label>
        <div className="flex items-center">
          <input
            type="color"
            name="textColor"
            value={resolveCSSVariable(config.textColor)}
            onChange={handleChange}
            className="mt-1 h-8 w-16"
          />
          <span className="ml-4 text-sm ">
            {resolveCSSVariable(config.textColor)}
          </span>
        </div>
      </div>

      {/* Tab Size */}
      <div>
        <label className="block text-sm font-medium ">Tab Size</label>
        <input
          type="number"
          name="tabSize"
          value={config.tabSize}
          onChange={handleChange}
          className="mt-1 border p-1"
        />
      </div>

      {/* Line Numbers */}
      <div className="flex items-center">
        <input
          type="checkbox"
          name="lineNumbers"
          checked={config.lineNumbers}
          onChange={handleChange}
          className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
        />
        <label className="ml-2 block text-sm ">Show Line Numbers</label>
      </div>

      {/* Fold Gutter */}
      <div className="flex items-center">
        <input
          type="checkbox"
          name="foldGutter"
          checked={config.foldGutter}
          onChange={handleChange}
          className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
        />
        <label className="ml-2 block text-sm ">Enable Fold Gutter</label>
      </div>

      {/* Highlight Active Line */}
      <div className="flex items-center">
        <input
          type="checkbox"
          name="highlightActiveLine"
          checked={config.highlightActiveLine}
          onChange={handleChange}
          className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
        />
        <label className="ml-2 block text-sm ">Highlight Active Line</label>
      </div>

      {/* Read Only */}
      <div className="flex items-center">
        <input
          type="checkbox"
          name="readOnly"
          checked={config.readOnly}
          onChange={handleChange}
          className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
        />
        <label className="ml-2 block text-sm">Read Only</label>
      </div>

      <Button type="button" onClick={handleReset} className="">
        Reset to Default
      </Button>
    </form>
  );
};

export default ConfigForm;
