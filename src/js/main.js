import { font8x8_bescii } from '../data/bescii.js';
import { setupCanvas, scaleDrawCanvasToWindow } from './render.js';
import { initTools } from './tools.js';
import { initPalette } from './palette.js';
import { initPicker } from './picker.js';
import { initFloodFill } from './floodfill.js';

window.addEventListener('load', () => {
  setupCanvas(font8x8_bescii);
  initTools(font8x8_bescii);
  initPalette();
  initPicker(font8x8_bescii);
  initFloodFill();
  scaleDrawCanvasToWindow();
});

window.addEventListener('resize', scaleDrawCanvasToWindow);
