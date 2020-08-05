import * as React from "react";
import { shallow } from "enzyme";
import App from "../../components/App/App";

describe("Test test suite", () => {
  it("App component renders correctly", () => {
    const heading = shallow(<App />).find("h1");
    expect(heading.html()).toBe(
      "<h1>Welcome to my React Typescript Preset!</h1>"
    );
  });
});
