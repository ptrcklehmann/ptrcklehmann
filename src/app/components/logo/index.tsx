import { SVGProps } from "react";

export const Logo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 108 70"
    fill="none"
    style={{ fill: "var(--primary)", width: "6rem" }}
    className="logo-icon"
    {...props}
  >
    <g clipPath="url(#a)">
      <path d="M85.219 36.595H23.625v-5.906h61.172a5.484 5.484 0 1 0 0-10.97H17.719v31.752h84.375V7.906H5.906v55.377H108v5.907H0V2h108v55.377H11.812V13.813h72.985a11.392 11.392 0 0 1 .422 22.782Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path d="M0 0h108v69.19H0z" />
      </clipPath>
    </defs>
  </svg>
);
