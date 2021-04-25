import * as yup from "yup";

export const validationSchema = yup.object().shape({
  provider: yup.array().required("Email provider is required."),
  to: yup.array().required('Email receiver is required.'),
  subject: yup.string().max(100, "Subject cannot beyond 100 characters.").required("Email subject is required."),
  html: yup.string().max(1000, "body text cannot beyond 100 characters.").required("Email body is required."),
});
