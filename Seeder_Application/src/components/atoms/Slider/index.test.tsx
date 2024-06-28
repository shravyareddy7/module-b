import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '@emotion/react'; 
import theme from '../../../theme'; 
import SliderComponent from '.';

describe('SliderComponent', () => {
  it('renders slider with default value and max prop', () => {
    render(
      <ThemeProvider theme={theme}>
        <SliderComponent max={100} />
      </ThemeProvider>
    );

    // Find the slider input element
    const slider = screen.getByRole('slider') as HTMLInputElement;

    // Check initial value and max attribute
    expect(slider).toBeInTheDocument();
    expect(slider.value).toBe('0'); // Default value check
    expect(slider.max).toBe('100'); // Max value check
  });

  it('changes value on user interaction', () => {
    render(
      <ThemeProvider theme={theme}>
        <SliderComponent max={100} />
      </ThemeProvider>
    );

    // Find the slider input element
    const slider = screen.getByRole('slider') as HTMLInputElement;

    // Simulate user interaction by changing the slider value
    fireEvent.change(slider, { target: { value: '50' } });

    // Assert that the slider value has changed
    expect(slider.value).toBe('50');
  });

//   it('applies custom rail color from theme', () => {
//     render(
//       <ThemeProvider theme={theme}>
//         <SliderComponent max={100} />
//       </ThemeProvider>
//     );

//     // Find the slider component using the data-testid attribute
//     const slider = screen.getByTestId('slider-component');

//     // Find the rail element within the slider component
//     const rail = slider.querySelector('.MuiSlider-rail') as HTMLElement;

//     // Assert that the rail element has the correct background color
//     expect(rail).toHaveStyle(`background-color: ${theme.palette.customColors.railTrack}`);
//   });


});
