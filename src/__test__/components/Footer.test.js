import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import { Footer } from '../../components/Footer';
import { it } from '@jest/globals';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

const date = () => {
  return new Date().getFullYear();
};

it('render Footer', () => {
  act(() => {
    render(<Footer />, container);
  });

  expect(container.textContent).toBe(
    `Xebia Test All rights reserved © ${date()}`
  );
});
