import { styled } from 'styled-components'

export const Repository = styled.li`
    display: flex;
    gap: 15px;
    font-size: 1.2rem;
    color: #835757;
    &:hover {
        opacity: 0.5;
        cursor: pointer;
    }

    & > :nth-child(1) {
        width: 250px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    & > :nth-child(2) {
        width: 50px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    & > :nth-child(3) {
        width: 250px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    & > :nth-child(4) {
        max-width: 500px;
        flex-grow: 1;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`
