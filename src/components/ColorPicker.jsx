import React from 'react';
import { SketchPicker } from 'react-color';
import { useSnapshot } from 'valtio';

import state from '../store';

const ColorPicker = () => {
  const snap = useSnapshot(state);

  return (
    <div className='absolute left-full ml-3'>
      <SketchPicker 
        color={snap.color}
        disableAlpha
        presetColors={[
          '#000000',
          '#FFFFFF',
          '#FF0000',
          '#00FF00',
          '#0000FF',
          '#FFFF00',
          '#00FFFF',
          '#FF00FF',
          '#C0C0C0',
          '#808080',
          '#800000',
          '#808000',
        ]}
        onChange={(color) => state.color = color.hex}
      />
    </div>
  )
}

export default ColorPicker
