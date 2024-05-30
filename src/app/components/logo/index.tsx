import { SVGProps } from "react";
import styles from "./logo.module.css";

export const Logo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 90 55.99"
    style={{ fill: "var(--primary)" }}
    className={styles.logo}
    {...props}
  >
    <path d="M71.02 28.83H19.69v-4.92h50.98c2.52 0 4.57-2.05 4.57-4.57s-2.05-4.57-4.57-4.57h-55.9v26.46h70.31V4.92H4.92v46.15H90v4.92H0V0h90v46.15H9.84V9.84h60.82c5.24-.1 9.57 4.07 9.67 9.32s-4.07 9.57-9.32 9.67Z" />
  </svg>
);

