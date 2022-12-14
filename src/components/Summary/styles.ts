import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -10rem;

    overflow-x: auto;

    div {
        background-color: var(--shape);
        padding: 1.5rem 2rem;
        min-width: 17rem;
        border-radius: 0.25rem;
        color: var(--text-title);

        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        strong {
            display: block;
            inline-size: max-content;
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: 500;
            line-height: 3rem;
        }
    
        .saidas {
            color: var(--red);
        }

        &.highlight-background-green {
            background-color: var(--green);
            color: #FFF;
        }
        &.highlight-background-red {
            background-color: var(--red);
            color: #FFF;
        }
    }
`;