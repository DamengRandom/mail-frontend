const testProviderList = [
  { value: 'sendgrid', label: 'SendGrid' },
  { value: 'mailgun', label: 'MailGun' },
];

const testEmailList = [
  { value: 'damonmaozewu@gmail.com', label: 'damonmaozewu@gmail.com' },
  { value: '1h0f1.aus@gmail.com', label: '1h0f1.aus@gmail.com' },
  { value: 'Luke.Hoggett@coatesgroup.com', label: 'Luke.Hoggett@coatesgroup.com' },
  { value: 'gabi.triani@coatesgroup.com', label: 'gabi.triani@coatesgroup.com' },
];

const multiSelectFields = [
  {name: 'provider', placeholder: 'Please select the mail provider', option: testProviderList},
  {name: 'to', placeholder: 'Please select the receiver email(s)', option: testEmailList},
  {name: 'cc', placeholder: 'Please select the cc receiver email(s)', option: testEmailList},
  {name: 'bcc', placeholder: 'Please select the bcc receiver email(s)', option: testEmailList}
];

const baseUrl = '/api'; // local test base url

export {
  testProviderList,
  testEmailList,
  multiSelectFields,
  baseUrl,
};
