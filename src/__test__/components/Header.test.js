import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import { Header } from '../../components/Header';
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

it('render Header with or without a title', () => {
  act(() => {
    render(<Header />, container);
  });

  expect(container.length).toBe(undefined);

  act(() => {
    render(<Header title="xebia" />, container);
  });
  expect(container.textContent).toBe('xebia');
});
