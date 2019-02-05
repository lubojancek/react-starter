import { addDecorator, configure } from '@storybook/react';
import StoryRouter from 'storybook-react-router';

import LocaleDecorator from './addons/LocaleDecorator';

import '../src/app/styles/main.css';

addDecorator(LocaleDecorator);
addDecorator(StoryRouter());

function loadStories() {
  const req = require.context('../src', true, /.story.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);