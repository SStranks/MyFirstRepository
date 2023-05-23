import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import CategoryLayout from './CategoryLayout';

describe('Appearance', () => {
  test('Component render matches snapshot', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <CategoryLayout
            productCategory="dummyProductCategory"
            productList={[
              {
                id: 1,
                new: true,
                productName: 'dummyProductName',
                description: 'dummyDescription',
                categoryImage: {
                  desktop: 'desktopImgURL',
                  tablet: 'tabletImgURL',
                  mobile: 'mobileImgURL',
                },
              },
            ]}
          />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Component base should be fully rendered', () => {
    render(
      <CategoryLayout
        productCategory="dummyProductCategory"
        productList={[
          {
            id: 1,
            new: true,
            productName: 'dummyProductName',
            description: 'dummyDescription',
            categoryImage: {
              desktop: 'desktopImgURL',
              tablet: 'tabletImgURL',
              mobile: 'mobileImgURL',
            },
          },
        ]}
      />,
      { wrapper: BrowserRouter }
    );

    const component = screen.getByRole('region');
    const headingH1 = screen.getByRole('heading', {
      name: 'dummyProductCategory',
      level: 1,
    });
    const productArticle = screen.getByLabelText('dummyProductName');

    expect(component).toBeInTheDocument();
    expect(component).toHaveAttribute(
      'aria-labelledby',
      'dummyProductCategory'
    );
    expect(headingH1).toBeInTheDocument();
    expect(productArticle).toBeInTheDocument();
  });
});
