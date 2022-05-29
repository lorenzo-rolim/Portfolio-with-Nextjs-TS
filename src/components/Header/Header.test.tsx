import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import HelloWorld from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<HelloWorld />', () => {
  it('should render', () => {
    const { container } = renderTheme(<HelloWorld></HelloWorld>);
    expect(container).toMatchSnapshot();

    const title = screen.getByRole('heading', { name: /Hello World!/i });

    expect(title).toBeInTheDocument();
    screen.debug();
  });
});
