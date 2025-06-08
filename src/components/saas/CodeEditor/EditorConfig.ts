export interface EditorConfig {
  theme: 'dark' | 'light' | 'system';
  language: 'javascript' | 'typescript';
  lineNumbers: boolean;
  foldGutter: boolean;
  highlightActiveLine: boolean;
  tabSize: number;
  readOnly: boolean;
  backgroundColor?: string;
  textColor?: string;
}
  
export const DEFAULT_EDITOR_CONFIG: EditorConfig = {
  theme: 'light',
  language: 'javascript',
  lineNumbers: true,
  foldGutter: true,
  highlightActiveLine: true,
  tabSize: 2,
  readOnly: false,
  backgroundColor: "var(--color-bg)",
  textColor: "var(--text-color)",
};