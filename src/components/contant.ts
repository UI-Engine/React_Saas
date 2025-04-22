import {
  CoreComponents,
  UniqueComponents,
  ComplexComponents,
  HardComponents,
} from "./enum";

export const componentGroups = {
  Core: CoreComponents,
  Unique: UniqueComponents,
  Complex: ComplexComponents,
  Hard: HardComponents,
} as const;
