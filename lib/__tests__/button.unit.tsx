import renderer from "react-test-renderer";
import Button from "../button";
import React from "react";

describe("button tests", () => {
  it("是个 div", () => {
    const json = renderer.create(<Button />).toJSON();
    expect(json).toMatchSnapshot();
  });
});
