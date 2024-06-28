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

// import '@testing-library/jest-dom';
// import React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
// import { ThemeProvider } from '@emotion/react'; 
// import theme from '../../../theme'; 
// import SliderComponent from '.';

// describe('SliderComponent', () => {
//   it('renders slider with default value and max prop', () => {
//     render(
//       <ThemeProvider theme={theme}>
//         <SliderComponent max={100} />
//       </ThemeProvider>
//     );

//     // Find the slider input element
//     const slider = screen.getByRole('slider') as HTMLInputElement;

//     // Check initial value and max attribute
//     expect(slider).toBeInTheDocument();
//     expect(slider.value).toBe('0'); // Default value check
//     expect(slider.max).toBe('100'); // Max value check
//   });

//   it('changes value on user interaction', () => {
//     render(
//       <ThemeProvider theme={theme}>
//         <SliderComponent max={100} />
//       </ThemeProvider>
//     );

//     // Find the slider input element
//     const slider = screen.getByRole('slider') as HTMLInputElement;

//     // Simulate user interaction by changing the slider value
//     fireEvent.change(slider, { target: { value: '50' } });

//     // Assert that the slider value has changed
//     expect(slider.value).toBe('50');
//   });

//   // it('applies custom rail color from theme', () => {
//   //   render(
//   //     <ThemeProvider theme={theme}>
//   //       <SliderComponent max={100} />
//   //     </ThemeProvider>
//   //   );

//   //   // Find the slider component using the data-testid attribute
//   //   const slider = screen.getByTestId('slider-component');

//   //   // Find the rail element within the slider component
//   //   const rail = slider.querySelector('.MuiSlider-rail') as HTMLElement;

//   //   // Assert that the rail element has the correct background color
//   //   expect(rail).toHaveStyle(`background-color: ${theme.palette.customColors.railTrack}`);
//   // });

//   it('updates value when slider is dragged', () => {
//     render(
//       <ThemeProvider theme={theme}>
//         <SliderComponent max={100} />
//       </ThemeProvider>
//     );

//     // Find the slider input element
//     const slider = screen.getByRole('slider') as HTMLInputElement;

//     // Simulate dragging the slider by changing its value
//     fireEvent.mouseDown(slider, { clientX: 0 });
//     fireEvent.mouseMove(slider, { clientX: 50 });
//     fireEvent.mouseUp(slider);

//     // Assert that the slider value has updated
//     expect(slider.value).toBe('50');
//   });

//   it('does not exceed the maximum value', () => {
//     render(
//       <ThemeProvider theme={theme}>
//         <SliderComponent max={100} />
//       </ThemeProvider>
//     );

//     // Find the slider input element
//     const slider = screen.getByRole('slider') as HTMLInputElement;

//     // Simulate user interaction by trying to set the slider value beyond the max
//     fireEvent.change(slider, { target: { value: '150' } });

//     // Assert that the slider value does not exceed the max
//     expect(slider.value).toBe('100');
//   });
// });

