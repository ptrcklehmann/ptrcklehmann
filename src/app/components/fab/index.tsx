import { FileUser } from "lucide-react"

import { StyledFabLink } from './styled';


export const FAB = () => {
    return (
        <StyledFabLink href="https://cv.ptrcklehmann.com" target="__blank">
            <FileUser />
            Resume
        </StyledFabLink>
    );
};
