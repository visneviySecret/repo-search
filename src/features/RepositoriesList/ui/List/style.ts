import { styled } from 'styled-components'

const colors = [
    '#f6c6c6',
    '#caab8e',
    '#c1ca8e',
    '#d39090',
    '#a88564',
    '#9faa5e',
    '#8f7171',
    '#776a5e',
    '#56888a',
    '#68b378',
]

const generateColor = (page: number) => {
    return colors[page]
}

export const ListWrapper = styled.ul<{ page: number }>`
    min-height: 300px;
    background-color: ${({ page }) => generateColor(page)};
    border-radius: 2rem;
    padding: 1rem;
    list-style: none;
`

export const Warning = styled.h4`
    margin-inline: auto;
    color: #9faa5e;
`
