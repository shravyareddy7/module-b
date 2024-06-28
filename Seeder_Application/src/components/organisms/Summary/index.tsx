import React, { useState } from 'react';
import SliderComponent from '../../atoms/Slider';

const SummaryComponent: React.FC = () => {
  const [sliderValue, setSliderValue] = useState<number>(100);

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setSliderValue(newValue as number);
  };

  return (
    <div>
      <SliderComponent max={sliderValue} />
    </div>
  );
};

export default SummaryComponent;
