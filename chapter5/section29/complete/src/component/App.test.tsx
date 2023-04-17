import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";
import { rest } from "msw";
import { setupServer } from "msw/node";

const server = setupServer(
  rest.get("http://localhost:3001/todo_tasks", (req, res, ctx) => {
    return res(
      ctx.json({
        todo_tasks: [],
      })
    );
  }),
  rest.post("http://localhost:3001/todo_tasks", (req, res, ctx) => {
    return res(
      ctx.json({
        todo_task: { id: 3, content: "ガソリン給油" },
      })
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("add new task", async () => {
  render(<App />);

  const input = screen.getByRole("textbox");

  await userEvent.type(input, "ガソリン給油");
  userEvent.click(screen.getByRole("button"));
  expect(screen.queryByDisplayValue("ガソリン給油")).toBeNull();

  expect(await screen.findByText("ガソリン給油")).toBeInTheDocument();
});
