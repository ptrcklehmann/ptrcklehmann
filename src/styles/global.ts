'use client';

import { memo } from 'react';
import { createGlobalStyle, css } from 'styled-components';

const globalStyles = css`
    /*
  1. Use a more-intuitive box-sizing model.
*/
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    /*
  2. Remove default margin
*/
    * {
        margin: 0;
    }

    /*
  Typographic tweaks!
  3. Add accessible line-height
  4. Improve text rendering
*/
    body {
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
    }

    /*
  5. Improve media defaults
*/
    img,
    picture,
    video,
    canvas,
    svg {
        display: block;
        max-width: 100%;
    }

    /*
  6. Remove built-in form typography styles
*/
    input,
    button,
    textarea,
    select {
        font: inherit;
    }

    /*
  7. Avoid text overflows
*/
    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        overflow-wrap: break-word;
    }

    /*
  8. Create a root stacking context
*/
    #root,
    #__next {
        isolation: isolate;
    }

    :root {
        --max-width: 1100px;
        --border-radius: 12px;
        --font-sans: var(--geomanist), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            'Helvetica Neue', Arial, 'Noto Sans', sans-serif;
        --font-mono: ui-monospace, Menlo, Monaco, 'Cascadia Mono', 'Segoe UI Mono', 'Roboto Mono',
            'Oxygen Mono', 'Ubuntu Monospace', 'Source Code Pro', 'Fira Mono', 'Droid Sans Mono',
            'Courier New', monospace;
        --fs-html: 16px;
        --fs-tini-tiny: 0.6rem;
        --fs-tiny: 0.8rem;
        --fs-details: 2rem;
        --fs-small: 1.5rem;
        --fs-medium: 2.5rem;
        --fs-large: 4rem;
        --fs-extra-large: 5.5rem;
        --bg-body: #f4f6f5;
        --bg-card: #e4e6e5;
        --primary: #ddd92a;
        --yellow-gradient: linear-gradient(to top, #b9ac1c, #cdca32, #ddd92a);
        --text: #252728;
    }

    [data-rm='dark'] {
        --bg-body: #252728;
        --bg-card: #424b4e;
        --text: #f4f6f5;
        --primary: #ddd92a;
    }

    html,
    body {
        max-width: 100vw;
        overflow-x: hidden;
        text-rendering: optimizeSpeed;
        scroll-behavior: smooth;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    body {
        transition: background-color 0.3s ease;
        background-color: var(--bg-body);
        color: var(--text);
    }

    a {
        color: 'inherit';
        text-decoration: none;
    }

    @media (prefers-color-scheme: dark) {
        html {
            color-scheme: dark;
        }
    }
`;

export const GlobalStyles = memo(createGlobalStyle`
    ${globalStyles}
`);
