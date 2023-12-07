import { useSelector, useDispatch } from "react-redux";
import { resetData } from "../store/application";
import { useNavigate } from "react-router-dom";


export default function Submission() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const data = useSelector((state) => state.application.data)

    console.log(data)

    const goBack = () => {
        dispatch(resetData({}))
        navigate("/");
    }

    return (
        <section>
            <p onClick={goBack} >thank you</p>

        </section>
    )
}