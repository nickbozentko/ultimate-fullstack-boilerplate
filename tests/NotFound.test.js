import React from 'react';
import 'jest';
import renderer from 'react-test-renderer';

import NotFound from '../src/client/NotFound/NotFound.jsx';

test('renders NotFound without crashing', () => {
    renderer.create(<NotFound />);
})