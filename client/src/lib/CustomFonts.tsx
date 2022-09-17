import { Global } from '@mantine/core';
import bold from './../assets/Poppins/Poppins-Bold.ttf';
import black from './../assets/Poppins/Poppins-Black.ttf';
import regular from './../assets/Poppins/Poppins-Regular.ttf';
import light from './../assets/Poppins/Poppins-Light.ttf';
import medium from './../assets/Poppins/Poppins-Medium.ttf';
import semibold from './../assets/Poppins/Poppins-SemiBold.ttf';

export function CustomFonts() {
  return (
    <Global
      styles={[
        {
          '@font-face': {
            fontFamily: 'Poppins',
            src: `url('${bold}') format("ttf")`,
            fontWeight: 700,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Poppins',
            src: `url('${semibold}') format("ttf")`,
            fontWeight: 600,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Poppins',
            src: `url('${medium}') format("ttf")`,
            fontWeight: 500,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Poppins',
            src: `url('${regular}') format("ttf")`,
            fontWeight: 400,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Poppins',
            src: `url('${black}') format("ttf")`,
            fontWeight: 300,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Poppins',
            src: `url('${light}') format("ttf")`,
            fontWeight: 200,
            fontStyle: 'normal',
          },
        },
      ]}
    />
  );
}