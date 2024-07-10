import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import TopBar from "../../components/TopBar";

const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUseNavigate,
}));

describe("TopBar compnent", () => {
  test("render container and TopBar", () => {});

  test("BLOG button should navigate to home", () => {});

  test("Contact link should have path to contact", () => {});

  test("Contact link should have active style", () => {});

  test("Contact link should not have active style", () => {});
});
