import React from "react";
import FooterComponent from "./footer";

// testing library react....
import { cleanup } from "@testing-library/react";

//snapshot testing....
import renderer from "react-test-renderer";

afterEach(cleanup);

xit("Matches SnapShot ", () => {
  const tree = renderer.create(<FooterComponent />).toJSON();
  expect(tree).toMatchSnapshot();
});
