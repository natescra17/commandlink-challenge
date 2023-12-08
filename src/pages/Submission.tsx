import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { resetData } from "../store/application";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";

import "./Form.css";

type ApplicationData = {
  name: string;
  value: string;
};

const Submission = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const data = useSelector((state: any) => state.application.data);

  const goBack = () => {
    dispatch(resetData({}));
    navigate("/");
  };

  const renderFields = () => {
    const results: React.JSX.Element[] = [];

    data.forEach((item: ApplicationData) => {
      if (Array.isArray(item)) {
        item.forEach((column) => {
          results.push(
            <div className="inputcolumn" key={column.name}>
              <h4>{column.name}</h4>
              <p>{column.value}</p>
            </div>
          );
        });
      } else {
        results.push(
          <div className="singleitem inputcolumn" key={item.name}>
            <h4>{item.name}</h4>
            <p>{item.value}</p>
          </div>
        );
      }
    });

    return results;
  };

  return (
    <Card>
      <h2 className="title">Thank You</h2>
      <p>
        {" "}
        Your application has been sent, here is a summary of the information
        sent
      </p>
      <div className="formcontainer">{data ? renderFields() : null}</div>
      <input type="button" onClick={goBack} value={"Go back"} />
    </Card>
  );
};

export default Submission;
