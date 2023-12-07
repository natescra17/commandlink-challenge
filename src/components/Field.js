import classes from "./Field.module.css"

export default function Field({inputField}) {
    const { id, type, required, placeholder, className } = inputField


    const renderInputText = () => {
        return (
            <input
                    className={classes.input}
                    id={id}
                    type={type}    
                    placeholder={placeholder||id||""}
                    required={required||false}
                />
        )
    }

    const renderInputSelect = () => {
        const {options} = inputField
        return (
            <select id={id}>
                {options.map((opt) => <option value={opt}>{opt}</option>)}
            </select>
        )
    }
    
    return (
        <div>
            <label for={id} className={classes.label}>{placeholder||id}</label>
            {(type === "text" || type === "textarea") ? renderInputText() : null}
            {(type === "select") ? renderInputSelect() : null}
        </div>
    )

}