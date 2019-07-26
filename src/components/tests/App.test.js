import React from "react";
import { shallow } from "enzyme";
import App from "components/base/App/App";

describe("App", () => {
  it("Matches Snapshot", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
