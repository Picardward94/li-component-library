import * as React from "react";
import Button from "./components/atoms/Button/Button";
import CustomCheckbox from "./components/atoms/Checkbox";
import LiTypography from "./components/tokens/LiTypography";
import { ThemeProvider } from "@mui/material/styles";
import { StyledEngineProvider } from "@mui/system";
import theme from "./components/tokens/theme.js";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <div style={{ padding: "32px" }}>
          {/* Using the Button component */}
          <div
            style={{
              display: "grid",
              gridTemplateRows: "1fr 1fr 1fr 1fr 1fr",
              gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
              gap: "32px",
            }}
          >
            {" "}
            <div>
              {" "}
              <Button
                leftIcon="LoadingIcon"
                textValue="Click me!"
                rightIcon="LoadingIcon"
              ></Button>
            </div>
            <div>
              <Button
                leftIcon="LoadingIcon"
                textValue="Click me!"
                rightIcon="LoadingIcon"
                type="secondary"
              ></Button>
            </div>
            <div>
              <Button
                leftIcon="LoadingIcon"
                textValue="Click me!"
                rightIcon="LoadingIcon"
                type="danger"
              ></Button>
            </div>
            <div>
              <Button
                leftIcon="LoadingIcon"
                textValue="Click me!"
                rightIcon="LoadingIcon"
                type="loading"
              ></Button>
            </div>
            <div>
              <Button
                leftIcon="LoadingIcon"
                textValue="Click me!"
                rightIcon="LoadingIcon"
                type="disabled"
              ></Button>
            </div>
            <div>
              {" "}
              <Button
                size="small"
                leftIcon="LoadingIcon"
                textValue="Click me!"
                rightIcon="LoadingIcon"
              ></Button>
            </div>
            <div>
              <Button
                size="small"
                leftIcon="LoadingIcon"
                textValue="Click me!"
                rightIcon="LoadingIcon"
                type="secondary"
              ></Button>
            </div>
            <div>
              <Button
                size="small"
                leftIcon="LoadingIcon"
                textValue="Click me!"
                rightIcon="LoadingIcon"
                type="danger"
              ></Button>
            </div>
            <div>
              <Button
                size="small"
                textValue="Click me!"
                type="loading"
              ></Button>
            </div>
            <div>
              <Button
                size="small"
                leftIcon="LoadingIcon"
                textValue="Click me!"
                rightIcon="LoadingIcon"
                type="disabled"
              ></Button>
            </div>
            <div>
              <Button
                textValue="Click me!"
                type="primary"
                size="text"
                href=""
              ></Button>
            </div>
            <div>
              <Button
                textValue="Click me!"
                type="secondary"
                size="text"
                href=""
              ></Button>
            </div>
            <div>
              <Button
                textValue="Click me!"
                type="danger"
                size="text"
                href=""
              ></Button>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateRows: "1fr 1fr 1fr",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "32px",
            }}
          >
            <div>
              <CustomCheckbox label="Sample Checkbox" />
            </div>
            <div>
              <CustomCheckbox
                disabled={true}
                label="Sample Checkbox"
                errorText="This is an error message."
              />
            </div>
            <div>
              <CustomCheckbox
                error={true}
                label="Sample Checkbox"
                errorText="This is an error message."
              />
            </div>
            <div>
              <CustomCheckbox label="Sample Checkbox" checkState="checked" />
            </div>
            <div>
              <CustomCheckbox
                disabled={true}
                checkState="checked"
                label="Sample Checkbox"
                errorText="This is an error message."
              />
            </div>
            <div>
              <CustomCheckbox
                error={true}
                checkState="checked"
                label="Sample Checkbox"
                errorText="This is an error message."
              />
            </div>
            <div>
              <CustomCheckbox label="Sample Checkbox" checkState="partial" />
            </div>
            <div>
              <CustomCheckbox
                disabled={true}
                checkState="partial"
                label="Sample Checkbox"
                errorText="This is an error message."
              />
            </div>
            <div>
              <CustomCheckbox
                error={true}
                checkState="partial"
                label="Sample Checkbox"
                errorText="This is an error message."
              />
            </div>
          </div>

          {/* Using LiTypography with custom typography variants */}
          <LiTypography variant="heading-1">This is heading 1</LiTypography>
          <LiTypography variant="heading-2">Custom Heading 2</LiTypography>
          <LiTypography variant="paragraph">Custom Paragraph</LiTypography>
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
