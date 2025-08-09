import { FileUser } from "lucide-react"

import { StyledFabLink } from './styled';


export const FAB = () => {
    return (
        <StyledFabLink
            href="https://cv.ptrcklehmann.com"
            target="_blank"
            rel="noopener noreferrer"
        >
            <FileUser />
            Resume
        </StyledFabLink>
    );
};
