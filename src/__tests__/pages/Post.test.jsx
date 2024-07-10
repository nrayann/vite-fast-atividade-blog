import { BrowserRouter } from "react-router-dom";
import { render, waitFor, screen } from "@testing-library/react";

import Post from "../../pages/Post";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    id: "1",
  }),
}));

describe("Post component", () => {
  test("should render a post", async () => {});

  test("should not render a post if request fails", async () => {});
});
