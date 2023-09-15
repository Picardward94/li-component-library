import * as React from "react";
import Button from "./components/atoms/Button";
import LiTypography from "./components/tokens/LiTypography";
import { ThemeProvider } from "@mui/material/styles";
import { StyledEngineProvider } from "@mui/system";
import theme from "./components/tokens/theme.js";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <div className="App">
          <h1>Welcome to My App</h1>

          {/* Using the Button component */}
          <Button textValue="Click me!"></Button>
          <Button textValue="Click me!" size="text"></Button>
          <Button textValue="Click me!" type="secondary"></Button>

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
