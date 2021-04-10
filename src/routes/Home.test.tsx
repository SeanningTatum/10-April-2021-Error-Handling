import React from 'react';

import { render, screen } from '@testing-library/react';
import { expect } from 'chai';

import Home from './Home';
import { DialogProvider } from '~/store/DialogStore';
import { ValidationError } from '~/types/Errors';
import type { ValidationErrorType } from '~/types/ValidationError';

const errors: ValidationErrorType[] = [
  {
    location: 'body',
    msg: 'Invalid value',
    param: 'title',
  },
  {
    location: 'body',
    msg: 'Invalid value',
    param: 'description',
  },
  {
    location: 'body',
    msg: 'Invalid value',
    param: 'content',
  },
];

it('shows error message matching with the validation errors', async () => {
  const { container } = render(
    <DialogProvider>
      <Home
        mocks={{
          errorType: new ValidationError(errors),
        }}
      />
    </DialogProvider>,
  );

  // Wait for page to update with query text
  const errorText = await screen.findByText(
    /The amount of body errors you have are 3. Located at title, description, content/,
  );

  expect(errorText.innerText).to.equal(
    'The amount of body errors you have are 3. Located at title, description, content',
  );
});
