import { InputComponent } from './Input.style'
import { useState } from 'react'
import CSS from 'csstype'

interface IInput {
    propsValue: string
    style?: CSS.Properties
}

function Input({ propsValue, style }: IInput) {
    const [value, setValue] = useState(propsValue)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value)
    }

    return (
        <div>
            <InputComponent
                placeholder="Enter repository name"
                value={value}
                onChange={handleChange}
                style={style}
            />
        </div>
    )
}

export default Input
