import Input from '@/shared/ui/Input'

interface IProps {
    value: string
    onChange: (value: React.ChangeEvent<HTMLInputElement>) => void
}

function SearchBar({ value, onChange }: IProps) {
    return (
        <>
            <Input value={value} onChange={onChange} />
        </>
    )
}

export default SearchBar
