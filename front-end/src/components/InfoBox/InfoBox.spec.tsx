import '@testing-library/jest-dom'
import { render } from "@testing-library/react";
import InfoBox from ".";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";

describe("InfoBox component", () => {
  it("info box renders correctly", () => {
    const { getByText } = render(
    <ThemeProvider theme={theme}>
      <InfoBox loadedCount={4} searchCount={4}/>
    </ThemeProvider>);
    
    expect(getByText("4 Files loaded")).toBeInTheDocument();
    expect(getByText("4 Occurrences found")).toBeInTheDocument();
  });
});
