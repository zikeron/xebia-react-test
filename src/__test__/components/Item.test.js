import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import { Item } from '../../components/Item';
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

const mockElement = {
  name: 'react',
  stargazerCount: 10000,
};

it('render Item', () => {
  act(() => {
    render(<Item item={mockElement} />, container);
  });

  expect(container.textContent).toBe('react🌟 10000');
});
