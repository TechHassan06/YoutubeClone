export const API_KEY='AIzaSyDgFNdSFVdW6WgV7MO2QsO21CXHO5MsIXY'

export const value_converter = (value) => {
  if (!value) return "0";   // <-- important fix

  if (value >= 1000000) {
    return Math.floor(value / 1000000) + "M";
  } else if (value >= 1000) {
    return Math.floor(value / 1000) + "K";
  } else {
    return value;
  }
};