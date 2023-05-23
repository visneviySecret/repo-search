import { InputComponent } from './Input.style'
import { useState } from 'react'

function Input({ propsValue }: { propsValue: string }) {
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
            />
        </div>
    )
}

export default Input
