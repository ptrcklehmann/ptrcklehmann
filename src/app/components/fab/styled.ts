import styled from 'styled-components';

export const StyledFabLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 1rem;
    right: 2rem;
    padding: 0.5rem 0.5rem;
    gap: 0.25rem;
    font-weight: 700;
    font-size: var(--fs-tiny);
    line-height: 1;
    white-space: nowrap;
    border-radius: 0.375rem;
    border: 1px solid var(--foreground);
    background-color: var(--background);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    transition: all 0.25s ease-in-out;
    flex-shrink: 0;
    color: var(--foreground);

    & svg {
        pointer-events: none;
        width: 1rem;
        height: 1rem;
    }

    &:hover {
        box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
        transform: translateY(-1px);
    }
`;
