import { render } from "@testing-library/react";
import Provider from "provider";
import App from "./App";

test("App renders correctly", () => {
  render(
    <Provider>
      <App />
    </Provider>
  );
});
