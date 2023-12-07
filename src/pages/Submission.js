import { useSelector, useDispatch } from "react-redux";
import { resetData } from "../store/application";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";

import classes from "./Form.module.css"

export default function Submission() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const data = useSelector((state) => state.application.data)
    console.log(data)

    const goBack = () => {
        dispatch(resetData({}))
        navigate("/");
    }

    const renderFields = () => {
        const results = []

        data.forEach(item => {
            if (Array.isArray(item)) {
                item.forEach(column => {
                    results.push(
                        <div className={classes.inputcolumn} key={column.name}>
                            <h4>{column.name}</h4>
                            <p>{column.value}</p>
                        </div>
                    )
                })
            } else {
                results.push(
                    <div className={[classes.singleitem, classes.inputcolumn].join(' ')} key={item.id}>
                        <h4>{item.name}</h4>
                        <p>{item.value}</p>
                    </div>
                )
            }
        })

        return results
    }

    return (
        <Card>
            <h2 className={classes.title}>Thank You</h2>
            <p> Your application has been sent, here is a summary of the information sent</p>
            <div className={classes.formcontainer}>
                {data ? renderFields() : null}
            </div>
            <input type="button" onClick={goBack} value={"Go back"}/>
        </Card>
    )
}