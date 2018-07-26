import { reversePalette } from 'styled-theme/composer';

const theme = {};

theme.palette = {
  primary: ['#212121', '#1f1f1f'],
  custome: ['#D500F9', '#E040FB', '#4A148C', '#8E24AA'],
  danger: ['#d32f2f', '#f44336', '#f8877f', '#ffcdd2'],
  alert: ['#ffa000', '#ffc107', '#ffd761', '#ffecb3'],
  success: ['#388e3c', '#4caf50', '#7cc47f', '#c8e6c9'],
  white: ['#fff', '#fff', '#f9f9f9', '#cacaca'],
  dark: ['#212121', '#1f1f1f'],
  green: ['#C6FF00', '#8BC34A'],
  grayscale: [
    '#f9f9fb',
    '#414141',
    '#616161',
    '#9e9e9e',
    '#bdbdbd',
    '#e0e0e0',
    '#eeeeee',
    '#ffffff',
  ],
};

theme.reversePalette = reversePalette(theme.palette);

theme.fonts = {
  primary: 'Helvetica Neue, Helvetica, Roboto, sans-serif',
  pre: 'Consolas, Liberation Mono, Menlo, Courier, monospace',
  quote: 'Georgia, serif',
  default: '-apple-system,BlinkMacSystemFont,Segoe WPC,Segoe UI,HelveticaNeue-Light,Ubuntu,Droid Sans,sans-serif;'
};

theme.sizes = {
  maxWidth: '1100px',
  maxWidthGrids: '650px',
};

export default theme;
