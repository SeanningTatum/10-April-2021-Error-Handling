import React from 'react';

import { render, screen } from '@testing-library/react';
import { expect } from 'chai';

import Home from './Home';
import Layout from '~/components/Layout';
import { DialogProvider } from '~/store/DialogStore';
import { ServerError, ValidationError } from '~/types/Errors';
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
      <Layout>
        <Home
          mocks={{
            errorType: new ValidationError(errors),
          }}
        />
      </Layout>
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

it('shows error message matching with the server error', async () => {
  const { container } = render(
    <DialogProvider>
      <Layout>
        <Home
          mocks={{
            errorType: new ServerError(),
          }}
        />
      </Layout>
    </DialogProvider>,
  );

  // Wait for page to update with query text
  const errorText = await screen.findByText(/Server Error Occurred!/);

  expect(errorText.innerText).to.equal('Server Error Occurred!');
});

it('should render the blogs', async () => {
  const { container } = render(
    <DialogProvider>
      <Layout>
        <Home />
      </Layout>
    </DialogProvider>,
  );

  const successText = await screen.findByText(
    'How to make errors in axios more readable and maintainable with a few lines of code!',
  );

  console.log(successText);

  expect(successText.innerText).to.equal(
    'How to make errors in axios more readable and maintainable with a few lines of code!',
  );
});
