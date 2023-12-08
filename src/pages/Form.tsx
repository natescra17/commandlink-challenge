import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getFieldSet } from "../server/getFieldSet";
import { sendFormData } from "../server/sendFormData";
import { handleFormData } from "../utils/handleFormData";

import { FormProvider, useForm } from "react-hook-form";

import { useDispatch } from "react-redux";
import { setData } from "../store/application";

import Card from "../components/Card";
import Field from "../components/Field";

import "./Form.css";

const Form = () => {
  const methods = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [fields, setFields] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data: any = await getFieldSet();
      setFields(data);
    }

    fetchData();
  }, []);

  const onSubmit = methods.handleSubmit(async (data) => {
    const application = handleFormData(data, fields);
    // mock send to server
    await sendFormData(application);
    // local store for next pages
    dispatch(setData({ data: application }));
    // clear form
    methods.reset();
    // navigate to next page
    navigate("/end");
  });

  const renderFields = (fieldsData: any[]) => {
    const results: React.JSX.Element[] = [];
    fieldsData.forEach(
      (field: {
        forEach: (arg0: (column: any) => void) => void;
        id: React.Key | null | undefined;
      }) => {
        if (Array.isArray(field)) {
          field.forEach((column) => {
            results.push(
              <div className="inputcolumn" key={column.id}>
                <Field inputField={column} />
              </div>
            );
          });
        } else {
          results.push(
            <div className="singleitem inputcolumn" key={field.id}>
              <Field inputField={field} />
            </div>
          );
        }
      }
    );

    return results;
  };

  return (
    <Card>
      <h2 className="title">Application form</h2>
      <FormProvider {...methods}>
        <form
          className="formcontainer"
          onSubmit={(e) => e.preventDefault()}
          noValidate
          autoComplete="off"
        >
          {renderFields(fields)}
          <button className="submitbutton singleitem" onClick={onSubmit}>
            Send my application
          </button>
        </form>
      </FormProvider>
    </Card>
  );
};

export default Form;
