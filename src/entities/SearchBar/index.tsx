import Input from '@/shared/ui/Input/Input'

interface IProps {
    value: string
    onClick: () => void
    onChange: (value: React.ChangeEvent<HTMLInputElement>) => void
}

function SearchBar({ value, onClick, onChange }: IProps) {
    return (
        <>
            <Input value={value} onChange={onChange} />
            <button onClick={onClick} />
        </>
    )
}

export default SearchBar
