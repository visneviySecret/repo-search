import { styled } from 'styled-components'

export const Title = styled.h3`
    margin-top: 1.5rem;
    font-size: 2rem;
`

export const ListWrapper = styled.div`
    min-height: 350px;
`

export const List = styled.ul<{ page: number }>`
    background-color: #f6c6c6;
    background-color: #${({ page }) =>
            parseInt((page * 12).toString(), 16)
                .toString()
                .repeat(3)};
    border-radius: 2rem;
    padding: 1rem;
    list-style: none;
`
