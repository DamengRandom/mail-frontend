// css
import "./EmailForm.css";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
// constants
import {
  multiSelectFields,
  baseUrl,
} from "../../constants";
import CreatableSelect from 'react-select/creatable';
// components
import Button from "../../components/Button/Button";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
// helpers
import postData from "../../utils/fetchHelper";
// form validator
import { validationSchema } from "../../utils/formValidator";

type tListType = string[];

export type tFormInputs = {
  provider: tListType,
  from: string,
  to: tListType,
  cc: tListType,
  bcc: tListType,
  subject: string,
  html: string,
}

export type tMultiSelectInput = {
  value: string,
  label: string,
};

export default function EmailForm() {
  const { control, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const [loader, setLoader] = useState(false);
  const [mailResponse, setMailResponse] = useState({});
  const getEmailInputValue = (array: []) => {
    return array.map(data => (data as tMultiSelectInput).value);
  }

  const onSubmit = (data: tFormInputs) => {
    setLoader(true);
    const {provider, to, cc, bcc, subject, html} = data;
    const requestBody: tFormInputs = {
      provider: getEmailInputValue(provider as []),
      from: 'damon.compliancespace@gmail.com', // @TODO: later can be dynamic (testing only, so made it hardcode first)
      to: getEmailInputValue(to as []),
      cc: getEmailInputValue(cc as []),
      bcc: getEmailInputValue(bcc as []),
      subject,
      html,
    };

    if (provider) {
      provider.map(async (p: any) => {
        await postData(`${baseUrl}/${p.value}`, requestBody)
          .then(data => {
            setMailResponse(data);
            setLoader(false);
          });
      });
    }
  };

  return (
    <>
      <h3>Mailer Service</h3>
      <div className="form-container">
        <form className="email-form" onSubmit={handleSubmit(onSubmit)}>
          {multiSelectFields.map(({ name, placeholder, option }) => (
            <div key={`select-question-${name}`}>
              <Controller
                key={name}
                name={name}
                control={control}
                render={({ field }) => <CreatableSelect
                  key={`select-controller-${field.name}`}
                  className="email-form__field"
                  {...field}
                  isMulti
                  placeholder={placeholder}
                  options={option}
                />}
              />
              {(errors && errors[name])
                && <ErrorMessage
                  className="email-form__error"
                  message={errors[name]?.message}
                />}
            </div>
          ))}
          <Controller
            name="subject"
            control={control}
            defaultValue=""
            render={({ field }) => <input
              className="email-form__field email-form__input"
              placeholder={"Please enter the subject"}
              {...field}
            />}
          />
          {(errors && errors.subject)
            && <ErrorMessage
              className="email-form__error"
              message={errors.subject?.message}
            />}
          <Controller
            name="html"
            control={control}
            defaultValue=""
            render={({ field }) => <textarea
              className="email-form__field email-form__input"
              placeholder={"Please enter the message content"}
              rows={5}
              {...field}
            />}
          />
          {(errors && errors.html)
            && <ErrorMessage
              className="email-form__error"
              message={errors.html?.message}
            />}
          <Button type="submit" text="Submit" disabled={loader} />
        </form>
        {/* context api persist state */}
        <pre>
          {Object.keys(mailResponse).length !== 0 && JSON.stringify(mailResponse, null, 2)}
        </pre>
      </div>
    </>
  );
};
