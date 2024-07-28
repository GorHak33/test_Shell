import type { Meta, StoryObj } from "@storybook/react";
import FormComponent from "./FormComponent";
import { FormValues } from "../../types/types";

const meta = {
  title: "Example/FormComponent",
  component: FormComponent,
  tags: ["autodocs"],
  args: {
    onSubmit: (values: FormValues) => console.log(values),
    posts: [
      { id: 1, title: "title1", body: "1" },
      { id: 2, title: "title2", body: "2" },
    ],
  },
} satisfies Meta<typeof FormComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isSubmitted: false,
  },
};

export const Submitted: Story = {
  args: {
    isSubmitted: true,
  },
};
