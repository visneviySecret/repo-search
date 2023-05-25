import { InputComponent } from './Input.style'
import CSS from 'csstype'

interface IInput {
    value: string
    onChange: (value: React.ChangeEvent<HTMLInputElement>) => void
    style?: CSS.Properties
}

function Input({ value, onChange, style }: IInput) {
    return (
        <InputComponent
            placeholder="Enter repository name"
            value={value}
            onChange={onChange}
            style={style}
        />
    )
}

export default Input
