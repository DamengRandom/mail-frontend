// import renderer from 'react-test-renderer';
import { cleanup, render, screen } from '@testing-library/react'
import ErrorMessage, { tError } from "./ErrorMessage";

describe('<ErrorMessage /> test', () => {
  let componentProps: JSX.IntrinsicAttributes & tError,
      componentContainer: HTMLElement;

  beforeEach(() => {
    // Arrange
    const props: tError = {
      className: "message",
      message: 'test message',
    };
    componentProps = props;
    // Act
    const { container } = render(<ErrorMessage {...componentProps} />);
    componentContainer = container;
  });

  afterEach(cleanup);

  it('snapshot test for ErrorMessage component', () => {
    // Assert
    expect(componentContainer.firstChild).toMatchSnapshot();
  });

  it('should render props for ErrorMessage component', async () => {
    // Arrange
    const newErrorMessage = "new error test message";
    componentProps = {
      ...componentProps,
      message: newErrorMessage,
    };
    // Act
    const { container } = render(<ErrorMessage {...componentProps} />);
    const errorMessage = await screen.findAllByText(newErrorMessage);
    // Assert
    expect(errorMessage).toBeDefined();
    expect((container.firstChild as HTMLInputElement).textContent).toEqual(newErrorMessage);
  });
});
