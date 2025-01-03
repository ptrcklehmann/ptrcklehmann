import { SVGProps } from "react";

import { StyledLogo } from "./styled";

export const Logo = (props: SVGProps<SVGSVGElement>) => (
    <StyledLogo xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" {...props}>
        <defs>
            <linearGradient id="linear-yellow" x1="0%" x2="100%" y1="0%" y2="100%">
                <stop offset="0%" stopColor="#ddd92a" />
                <stop offset="33%" stopColor="#cdca32" />
                <stop offset="66%" stopColor="#b9ac1c" />
                <stop offset="100%" stopColor="#c8a001" />
            </linearGradient>
        </defs>
        <path d="M300 250.438V0H0v300h300v-30.273H29.432V29.294l241.136.002v191.846H77.195V76.582H184.72c12.961 0 22.642 3.575 29.458 10.368 6.841 6.82 10.397 16.163 10.397 28.386 0 12.426-3.657 21.988-10.719 29.028l-.015.014-.014.015c-6.829 7.002-16.4 10.659-29.107 10.659H95.525v28.975h91.449c20.686 0 35.095-6.157 48.094-18.444l.009-.009.01-.009c13.113-12.62 19.564-29.473 19.564-50.229 0-20.732-6.33-37.389-19.254-49.597-12.607-12.114-27.146-18.13-48.423-18.13H47.763v202.829H300Z" />
    </StyledLogo>
);

