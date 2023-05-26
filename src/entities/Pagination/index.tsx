import { perPage } from './const'
import { List } from './style'
import { arrayFromLength } from './utils'

interface IProps {
    elements: number
    activePage: number
    setPage: (value: number) => void
}

function Pagination({ elements, setPage, activePage }: IProps) {
    if (elements < perPage) return null

    const elementsArr = arrayFromLength(elements)

    const handleClick = (page: number) => {
        setPage(page)
    }

    return (
        <List>
            {elementsArr?.map((element, index) => (
                <button
                    key={element}
                    onClick={() => handleClick(index)}
                    style={{
                        backgroundColor: index === activePage ? '#db7d7d' : '',
                    }}
                >
                    {element}
                </button>
            ))}
        </List>
    )
}

export default Pagination
