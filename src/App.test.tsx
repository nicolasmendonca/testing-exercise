import App from "./App";
import React from "react";
import { mount } from "enzyme";

it("has John Doe as default value", () => {
  const component = shallow(<App />);

  expect(component.find("input").props().value).toEqual("John Doe");
});

it("changes the input value", () => {
  const component = shallow(<App />);

  component.find("input").simulate("change", { target: { value: "test" } });
  expect(component.find("input").props().value).toEqual("test");
});

it("submits the form", () => {
  let isSubmitted = false;
  const component = shallow(
    <App
      onSubmit={() => {
        isSubmitted = true;
      }}
    />
  );

  component.find("form").simulate("submit");
  expect(isSubmitted).toBe(true);
});
