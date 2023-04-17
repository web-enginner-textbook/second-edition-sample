import React from "react";
import { render, screen } from "@testing-library/react";
import { Task } from "./Task";

test("Task", () => {
  render(
    <Task
      content={"testContent"}
      id={1}
      onDelete={() => {}}
      onUpdate={() => {}}
    />
  );
  expect(screen.getByText("testContent")).toBeInTheDocument();
});
