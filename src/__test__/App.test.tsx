import {
  fireEvent,
  render,
  screen,
  waitFor,
  // waitForElementToBeRemoved,
} from "@testing-library/react";
import "@testing-library/jest-dom";

import Client from "../common/api";
import App from "../App";
// import Home from "../pages/Home";

describe("When starting the application...", () => {
  // let container: HTMLElement;

  beforeEach(() => {
    // container = render(<App />).container;
    render(<App />);
  });

  describe("If not loged...", () => {
    describe("Should be render", () => {
      it("The email input from login.", () => {
        const emailInput = screen.getByTestId("email");

        expect(emailInput).toBeInTheDocument();
      });

      it("The button login.", () => {
        const loginButton = screen.getByTestId("button");

        expect(loginButton).toBeInTheDocument();
      });
    });

    describe("On login attempt", () => {
      it("Show the loading", () => {
        const emailInput = screen.getByTestId("email");
        const loginButton = screen.getByTestId("button");

        fireEvent.change(emailInput, {
          target: { value: "kleversousa13@gmail.com" },
        });
        fireEvent.click(loginButton);

        expect(screen.getByAltText("Loading")).toBeInTheDocument();
      });

      it("Be able to login", async () => {
        const mockAPI = jest.spyOn(Client, "post");
        const emailInput = screen.getByTestId("email");
        const loginButton = screen.getByTestId("button");

        fireEvent.change(emailInput, {
          target: { value: "kleversousa13@gmail.com" },
        });
        fireEvent.click(loginButton);

        await waitFor(() => {
          expect(mockAPI).toBeCalledTimes(1);
          expect(global.window.location.pathname).toEqual("/dogList");
        });
      });
    });
  });
});
