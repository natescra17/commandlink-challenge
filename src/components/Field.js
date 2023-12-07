import classes from "./Field.module.css"
import { useFormContext } from 'react-hook-form'
import { findInputError } from '../utils/findInputErrors'
import { isFormInvalid } from "../utils/isFormInvalid"

export default function Field({inputField}) {
    const { id, type, placeholder, validation } = inputField

    const {
        register,
        formState: { errors },
    } = useFormContext()

    const inputErrors = findInputError(errors, id)
    const isInvalid = isFormInvalid(inputErrors)

    const renderInputText = () => {
        return (
            <input
                    className={classes.input}
                    id={id}
                    type={type}    
                    placeholder={placeholder||id||""}
                    {...register(id, validation)}
                />
        )
    }

    const renderInputSelect = () => {
        const {options} = inputField
        return (
            <select
                id={id} 
                {...register(id, validation)}>
                {options.map((opt) => <option value={opt}>{opt}</option>)}
            </select>
        )
    }
    
    return (
        <div>
            <label for={id} className={classes.label}>{placeholder||id}</label>
            {(type === "text" || type === "textarea") ? renderInputText() : null}
            {(type === "select") ? renderInputSelect() : null}
            {isInvalid && (
            <InputError
              message={inputErrors.error.message}
              key={inputErrors.error.message}
            />
          )}
        </div>
    )

}

const InputError = ({ message }) => {
    return (
      <p className={classes.error}>
        {message}
      </p>
    )
  }