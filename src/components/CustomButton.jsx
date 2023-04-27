import React from 'react'
import state from '../store';
import { useSnapshot } from 'valtio';
import { getContrastingColor } from '../config/helpers';

const CustomButton = ({ type, title, customStyles, handleClick }) => {
    const snap = useSnapshot(state);
    const gererateStyles = (type) => {
        if (type === "filled") {
            return {
                backgroundColor: snap.color, //backgroundColor: snap.theme === "dark" ? "#fff" : "#000",
                color: getContrastingColor(snap.color), //color: snap.theme === "dark" ? "#000" : "#fff",
            }
        } else if (type === "outline") {
            return {
                backgroundColor: snap.color, //backgroundColor: snap.theme === "dark" ? "#fff" : "#000",
                color: getContrastingColor(snap.color), //color: snap.theme === "dark" ? "#000" : "#fff",
                border: `1px solid ${snap.color}`, //border: `1px solid ${snap.theme === "dark" ? "#000" : "#fff"}`,
            }
        }
    }

  return (
    <button className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`} style={gererateStyles(type)} onClick={handleClick}>
        {title}
    </button>
  )
}

export default CustomButton
