import { useEffect, useState } from "react"
import { getFieldSet } from "../server/getFieldSet"
import { sendFormData } from "../server/sendFormData"

import { FormProvider, useForm } from 'react-hook-form'

import Card from "../components/Card"
import Field from "../components/Field"

import classes from "./Form.module.css"

export default function Form () {

    const methods = useForm()

    const [fields, setFields] = useState([])

    useEffect(() => {
        async function fetchData() {
            const data = await getFieldSet();
            setFields(data);
        }

        fetchData()
    }, [])


    const onSubmit = methods.handleSubmit(async (data) => {
        await sendFormData(data)
        methods.reset()
    })
    
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
    
    return (
        <Card>
            <h2 className={classes.title}>Application form</h2>
            <FormProvider {...methods}>
                <form
                    className={classes.formcontainer}
                    onSubmit={e => e.preventDefault()}
                    noValidate
                    autoComplete="off">
                    {renderFields(fields)}
                    <button className={[classes.submitbutton, classes.singleitem].join(' ')} onClick={onSubmit}>Send my application</button>
                </form>
            </FormProvider>
        </Card>
            
    )
}