/* eslint-disable testing-library/no-debugging-utils */
import { render } from "@testing-library/react";
import Provider from "provider";
import MangaList from ".";

test("renders manga success", () => {
  const { debug } = render(
    <Provider>
      <MangaList />
    </Provider>
  );

  debug();
});
