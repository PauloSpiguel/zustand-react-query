/* eslint-disable testing-library/no-debugging-utils */
import { render } from "@testing-library/react";
import Provider from "provider";
import Home from ".";

test("home renders correctly", () => {
  const { debug } = render(
    <Provider>
      <Home />
    </Provider>
  );

  debug();
});
