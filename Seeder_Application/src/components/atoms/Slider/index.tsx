// import React, { useState } from 'react';
// import { Box, Slider, Stack } from '@mui/material';
// import { styled, useTheme } from '@mui/material/styles';
// import { VolumeDown, VolumeUp } from '@mui/icons-material';

// const StyledSlider = styled(Slider)(({ theme }) => ({
//   color: theme.palette.primary.main,
//   borderRadius: 0,
//   '& .MuiSlider-rail': {
//     borderRadius: '8px',
//     height: '8px',
//     backgroundColor: theme.palette.customColors.railTrack,
//   },
//   '& .MuiSlider-track': {
//     borderRadius: '8px',
//     height: '8px',
//     backgroundColor: theme.palette.primary.main,
//   },
//   '& .MuiSlider-thumb': {
//     width: '23px',
//     height: '23px',
//     borderRadius: '8px',
//     border: '3px solid',
//     borderColor: theme.palette.primary.purple['400'],
//     '&:before': {
//       boxShadow: 'none',
//       borderRadius: '8px',
//       backgroundColor: 'inherit',
//     }
//   },
// }));

// export interface SliderComponentProps {
//   max: number;
// }

// const SliderComponent: React.FC<SliderComponentProps> = ({ max }) => {
//   const theme = useTheme();
//   const [value, setValue] = useState<number>(0);

//   const handleChange = (event: Event, newValue: number | number[]) => {
//     setValue(newValue as number);
//   };

//   return (
//     <Box width='200px' margin={5}>
//       <StyledSlider
//         value={value}
//         max={max}
//         onChange={handleChange}
//         sx={{ backgroundColor: theme.palette.background.elevation1 }}
//         aria-labelledby="slider-component-title"
//         data-testid="slider-component"
//       />
//       {/* <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
//   <VolumeDown />
//   <Slider aria-label="Volume" value={value} onChange={handleChange} />
//   <VolumeUp />
// </Stack>
// <Slider disabled defaultValue={30} aria-label="Disabled slider" /> */}
//     </Box>
//   );
// };

// export default SliderComponent;

import React, { useState } from 'react';
import { Box, Slider } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';

const StyledSlider = styled(Slider)(({ theme }) => ({
  color: theme.palette.primary.main,
  borderRadius: 0,
  '& .MuiSlider-rail': {
    borderRadius: '8px',
    height: '8px',
    backgroundColor: theme.palette.customColors.railTrack,
  },
  '& .MuiSlider-track': {
    borderRadius: '8px',
    height: '8px',
    backgroundColor: theme.palette.primary.main,
  },
  '& .MuiSlider-thumb': {
    width: '23px',
    height: '23px',
    borderRadius: '8px',
    border: '3px solid',
    borderColor: theme.palette.primary.purple['400'],
    '&:before': {
      boxShadow: 'none',
      borderRadius: '8px',
      backgroundColor: 'inherit',
    }
  },
}));

export interface SliderComponentProps {
  max: number;
}

const SliderComponent: React.FC<SliderComponentProps> = ({ max }) => {
  const theme = useTheme();
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  return (
    <Box width='200px' margin={5}>
      <StyledSlider
        value={value}
        max={max}
        onChange={handleChange}
        sx={{ backgroundColor: theme.palette.background.elevation1 }}
        aria-labelledby="slider-component-title"
        data-testid="slider-component"
      />
    </Box>
  );
};

export default SliderComponent;
