import React from 'react';
import 'jest';
import renderer from 'react-test-renderer';

import Home from '../src/client/Home/Home.jsx';

test('renders Home without crashing', () => {
    renderer.create(<Home />);
})