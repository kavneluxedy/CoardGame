import React from 'react'

type Props = {
    type: string,
    id: string,
    defaultValue?: string | string[] | number
    className?: string
}

const Input = ({ type, id, defaultValue, className }: Props): JSX.Element => {
    return (
        <>
            {
                (type === 'submit')
                    ? ""
                    : <label htmlFor={id} >
                        {id}
                    </label>
            }
            <input
                type={type}
                id={id}
                name={id}
                placeholder={id}
                defaultValue={defaultValue}
                className={className}
                required
            />
        </>
    )
}

export default Input