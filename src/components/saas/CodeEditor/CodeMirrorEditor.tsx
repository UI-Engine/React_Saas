import { useState, useEffect, useMemo } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";
import { EditorView } from "@codemirror/view";
import { EditorConfig } from "./EditorConfig";
import { useTheme } from "../../../Theme/ThemeContext";

interface CodeMirrorEditorProps {
  value: string;
  onChange: (value: string) => void;
  config: EditorConfig;
  className?: string;
}

const CodeMirrorEditor = ({
  value,
  onChange,
  config,
  className,
}: CodeMirrorEditorProps) => {
  const { theme } = useTheme();
  const currentTheme = theme !== "theme-light" ? "dark" : "light";

  const CustomThemeObj = {
    "&": {
      backgroundColor: `${config.backgroundColor || "transparent"} !important`,
      color:
        config.textColor || (currentTheme === "dark" ? "#ffffff" : "#000000"),
    },
    // ".cm-content": {
    //   caretColor: "#fff !important",
    // },
    "&.cm-focused .cm-cursor": {
      // borderLeftColor: "#fff !important",
      border: "1px solid !important",
    },
    // "&.cm-focused .cm-selectionBackground, ::selection": {
    //   backgroundColor: "#074 !important",
    // },
    // ".cm-gutters": {
    //   backgroundColor: "#045 !important",
    //   color: "#ddd !important",
    //   border: "none !important",
    // },
  };

  // Dynamic theme configuration
  const themeExtensions = useMemo(() => {
    const baseTheme = currentTheme === "dark" ? oneDark : [];
    return [baseTheme, EditorView.theme(CustomThemeObj)];
  }, [currentTheme, config.backgroundColor, config.textColor]);

  // Dynamic language configuration
  const languageExtensions = useMemo(
    () =>
      ({
        javascript: javascript(),
        typescript: javascript({ typescript: true }),
      }[config.language]),
    [config.language]
  );

  // Full editor configuration
  const extensions = useMemo(
    () => [languageExtensions, ...themeExtensions, EditorView.lineWrapping],
    [languageExtensions, themeExtensions]
  );

  return (
    <CodeMirror
      value={value}
      height="100%"
      className={className}
      onChange={onChange}
      extensions={extensions}
      basicSetup={{
        lineNumbers: config.lineNumbers,
        foldGutter: config.foldGutter,
        highlightActiveLineGutter: config.highlightActiveLine,
        tabSize: config.tabSize,
      }}
      editable={!config.readOnly}
      readOnly={config.readOnly}
    />
  );
};

export default CodeMirrorEditor;
