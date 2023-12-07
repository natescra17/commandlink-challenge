import { useEffect, useState } from "react"
import { getFieldSet } from "../server/getFieldSet"

import Card from "../components/Card"
import Field from "../components/Field"

import classes from "./Form.module.css"

export default function Form () {

    const [fields, setFields] = useState([])
    const [formData, setFormData] = useState([])

    useEffect(() => {
        async function fetchData() {
            const data = await getFieldSet();
            setFields(data);

            
        }

        fetchData()
    }, [])

    useEffect(() => {

        console.log(fields)
        fields.forEach(field => {
            if (Array.isArray(field)) {
                field.forEach((fld) => {
                    setFormData(current => [...current, {id: fld.id, value: ""}])
                })
            } else {
                setFormData(current => [...current, {id: field.id, value: ""}])
                
            }
        })

    }, [fields])


    const renderFields = (fieldsData) => {
        const results = []
        fieldsData.forEach(field => {

            if (Array.isArray(field)) {

                field.forEach(column => {
                    results.push(
                        <div className={classes.inputcolumn} key={column.id}>
                            <Field inputField={column}/>
                        </div>
                    )
                })

            } else {
                results.push(
                    <div className={[classes.singleitem, classes.inputcolumn].join(' ')} key={field.id}>
                        <Field  inputField={field} />
                    </div>
                )
            }


        });

        return results;
    }


    const onSubmitForm = () => {
console.log("call")
    }
    
    return (
        <Card>
            <h2 className={classes.title}>Application form</h2>
            <form className={classes.formcontainer} onSubmit={onSubmitForm()}>
                {renderFields(fields)}
                <input type="submit" className={[classes.submitbutton, classes.singleitem].join(' ')} value="Send my application" onClick={onSubmitForm}/>
            </form>
        </Card>
            
    )
}