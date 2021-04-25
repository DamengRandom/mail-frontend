// import renderer from 'react-test-renderer';
import { cleanup, render } from '@testing-library/react';
import EmailForm, { tFormInputs } from "./EmailForm";

describe('<EmailForm /> test', () => {
  let componentProps: JSX.IntrinsicAttributes & tFormInputs,
      componentContainer: HTMLElement;

  beforeEach(() => {
    // Arrange
    const props: tFormInputs = {
      provider: ['sendgrid'],
      from: 'test1@test.co',
      to: ['test2@test.co'],
      cc: ['test3@test.co'],
      bcc: ['test4@test.co'],
      subject: 'subject text',
      html: 'body content',
    };
    componentProps = props;
    // Act
    const { container } = render(<EmailForm {...componentProps} />);
    componentContainer = container;
  });

  afterEach(cleanup);

  it('snapshot test for EmailForm component', () => {
    // Assert
    expect(componentContainer.firstChild).toMatchSnapshot();
  });
});
