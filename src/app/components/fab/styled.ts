import styled from 'styled-components';

export const StyledFabLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    height: 2rem;
    padding: 0 0.5rem;
    gap: 0.25rem;
    font-weight: 700;
    font-size: 12px;
    line-height: 1;
    white-space: nowrap;
    border-radius: 0.375rem;
    border-width: 1px;
    border-style: solid;
    border-color: var(--foreground, #e5e7eb);
    background-color: rgba(var(--background, 255, 255, 255), 0.9);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
    transition: box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out;
    outline: 2px solid transparent;
    outline-offset: 2px;
    flex-shrink: 0;
    color: inherit;

    & svg {
        pointer-events: none;
        flex-shrink: 0;
    }

    & svg:not([class*='size-']) {
        width: 1rem;
        height: 1rem;
    }

    &:hover {
        box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
        transform: translateY(-0.1rem);
    }
`;
