import type { Meta, StoryObj } from "@storybook/react";
import FormComponent from "./FormComponent";
import { Anime, FormValues } from "../../types/types";

const meta = {
  title: "Example/FormComponent",
  component: FormComponent,
  tags: ["autodocs"],
  args: {
    onSubmit: (values: FormValues) => console.log(values),
    animeItems: [
      { id: 1, title: { english: "Naruto" } },
      { id: 2, title: { english: "One Piece" } },
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
