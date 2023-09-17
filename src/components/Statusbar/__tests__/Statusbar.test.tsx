import React from 'react';
import { render } from '@testing-library/react-native';
import Statusbar from '../Statusbar';

describe("Statusbar", ()=> {
  test("the component rendered", ()=> {
    render(<Statusbar />)
  })
});