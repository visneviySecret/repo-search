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

export const Title = styled.h3`
    margin-top: 1.5rem;
    font-size: 2rem;
`

export const ListWrapper = styled.div`
    min-height: 350px;
`

export const List = styled.ul<{ page: number }>`
    background-color: ${({ page }) => generateColor(page)};
    border-radius: 2rem;
    padding: 1rem;
    list-style: none;
`
