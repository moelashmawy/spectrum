import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { ReactElement } from "react";

export const createSnapshot = (ComponentToTest: ReactElement) => {
  const {
    container: { firstChild: actual },
  } = render(ComponentToTest);
  expect(actual).toMatchSnapshot();
};
