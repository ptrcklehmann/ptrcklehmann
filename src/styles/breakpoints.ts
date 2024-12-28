import { generateMedia } from "styled-media-query";

export const BREAKPOINT_EXTRASMALL = 576;
export const BREAKPOINT_SMALL = 768;
export const BREAKPOINT_MEDIUM = 992;
export const BREAKPOINT_LARGE = 1200;

export const BREAKPOINTS = {
  extrasmall: `${BREAKPOINT_EXTRASMALL}px`,
  small: `${BREAKPOINT_SMALL}px`,
  medium: `${BREAKPOINT_MEDIUM}px`,
  large: `${BREAKPOINT_LARGE}px`,
};
export type BreakpointString = "extrasmall" | "small" | "medium" | "large";

export const { between, greaterThan, lessThan } =
  generateMedia<any>(BREAKPOINTS);
