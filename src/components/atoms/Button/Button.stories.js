import React from "react";
import Button from "./Button"; // Adjust this import path to your actual Button component

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["primary", "secondary", "danger", "disabled", "loading"],
      },
    },
    size: {
      control: {
        type: "select",
        options: ["regular", "small", "text"],
      },
    },
    showText: { control: "boolean" },
    leftIcon: {
      control: {
        type: "select",
        options: [null, "LoadingIcon"], // List all possible icons
      },
      defaultValue: "LoadingIcon", // Set default value
    },
    rightIcon: {
      control: {
        type: "select",
        options: [null, "LoadingIcon"], // List all possible icons
      },
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: "primary",
  size: "regular",
  showText: true,
  textValue: "Click Me!",
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: "secondary",
  size: "regular",
  showText: true,
  textValue: "Click Me!",
};
