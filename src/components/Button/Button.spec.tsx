// import renderer from 'react-test-renderer';
import { cleanup, render, screen } from '@testing-library/react'
import Button, { tButton } from "./Button";

describe('<Button /> test', () => {
  let componentProps: JSX.IntrinsicAttributes & tButton,
      componentContainer: HTMLElement;

  beforeEach(() => {
    // Arrange
    const props: tButton = {
      type: "button",
      text: 'test text',
      disabled: false,
    };
    componentProps = props;
    // Act
    const { container } = render(<Button {...componentProps} />);
    componentContainer = container;
  });

  afterEach(cleanup);

  it('snapshot test for Button component', () => {
    // Assert
    expect(componentContainer.firstChild).toMatchSnapshot();
  });

  it('should render props for Button component', async () => {
    // Arrange
    componentProps = {
      ...componentProps,
      disabled: true,
    };
    // Act
    const { container } = render(<Button {...componentProps} />);
    const button = await screen.findAllByText('test text');
    // Assert
    expect(button).toBeDefined();
    expect((container.firstChild as HTMLInputElement).disabled).toBeTruthy();
  });
});
