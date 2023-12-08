export const handleFormData = (inputData, fieldsData) => {
    const applicationData = []

    fieldsData.forEach((field) => {
        if (Array.isArray(field)) {
            const row = []
            field.forEach((fld) => {
                row.push({
                    name: fld.placeholder || fld.id,
                    value: inputData[fld.id]
                })
            })
            applicationData.push(row)
        } else {
            applicationData.push({
                name: field.placeholder || field.id,
                value: inputData[field.id]
            })
        }
            
    })

    return applicationData

}