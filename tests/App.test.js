import React from 'react';
import 'jest';
import renderer from 'react-test-renderer';

import App from '../src/client/App.jsx';

test('renders App without crashing', () => {
    renderer.create(<App />);
})