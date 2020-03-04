import React from "react";
import App from "./App";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("App Component Shallow Testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("has h1 tag with following text...", () => {
    expect(wrapper.find("h1")).toHaveLength(1);
    expect(wrapper.find("h1").text()).toEqual("Hello CodeSandbox");
  });

  it("has h2 tag with following text...", () => {
    expect(wrapper.find("h2")).toHaveLength(1);
    expect(wrapper.find("h2").text()).toEqual(
      "Start editing to see some magic happen!"
    );
  });
});
