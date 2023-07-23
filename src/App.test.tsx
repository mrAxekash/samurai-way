import React from "react";
import {SamuraiJSApp} from "./App";
import {render} from "@testing-library/react";
import ReactDOM from "react-dom";


// test('renders learn react link', () => {
//     render(<SamuraiJSApp />);
//     const linkElement = screen.getByText(/learn react/i);
//     expect(linkElement).toBeInTheDocument();
// });
it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<SamuraiJSApp />, div);
    ReactDOM.unmountComponentAtNode(div)
})
