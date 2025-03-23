import { SVGProps } from "react";

import { StyledLogo } from "./styled";

export const Logo = (props: SVGProps<SVGSVGElement>) => (
    <StyledLogo xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" {...props}>
        <defs>
            <linearGradient
                id="yellow-linear"
                x1="150"
                x2="150"
                y1="300"
                y2="0"
                gradientUnits="userSpaceOnUse"
            >
                <stop offset=".33" stopColor="#3f7940" />
                <stop offset=".66" stopColor="#679d65" />
                <stop offset="1" stopColor="#62a760" />
            </linearGradient>
        </defs>
        <path d="M300 249.947V0H0v300h300v-30.572H29.723V26.614l243.524.001v193.746H77.959V77.341h107.106c6.686 0 11.806.925 16.145 2.721 4.335 1.795 7.984 4.496 11.682 8.183 3.709 3.696 6.419 7.255 8.215 11.413 1.797 4.156 2.722 9.006 2.722 15.335 0 12.861-3.796 22.925-11.262 30.367l-.007.007-.008.008c-3.675 3.768-7.277 6.294-11.541 7.897-4.282 1.61-9.329 2.325-15.946 2.325H96.471v30.252h90.869c20.634 0 36.778-9.138 49.53-21.191l.01-.009c12.976-12.488 17.322-29.159 17.322-49.656 0-20.678-7.312-37.055-19.973-49.012-6.17-5.93-12.594-10.424-20.16-13.424-7.563-3-16.19-4.477-26.729-4.477H48.236v201.867H300Z" />
    </StyledLogo>
);
