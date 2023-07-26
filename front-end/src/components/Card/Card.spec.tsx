import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Card, CardDataProps } from ".";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";

const mockedCard = {
  data: [
    {
      name: "John Doe",
      city: "New York",
      country: "USA",
      favorite_sport: "Basketball",
    },
    {
      name: "Jane Smith",
      city: "London",
      country: "UK",
      favorite_sport: "Football",
    },
    {
      name: "Mike Johnson",
      city: "Paris",
      country: "France",
      favorite_sport: "Tennis",
    },
    {
      name: "Karen Lee",
      city: "Tokyo",
      country: "Japan",
      favorite_sport: "Swimming",
    },
    {
      name: "Tom Brown",
      city: "Sydney",
      country: "Australia",
      favorite_sport: "Running",
    },
    {
      name: "Emma Wilson",
      city: "Berlin",
      country: "Germany",
      favorite_sport: "Basketball",
    },
  ],
  columns: ["name", "city", "country", "favorite_sport"],
} as CardDataProps;

describe("Card component", () => {
  it("should render all rows content", () => {
    const { getAllByText } = render(
      <ThemeProvider theme={theme}>
        <Card card={mockedCard} />
      </ThemeProvider>
    );

    mockedCard.data.forEach((data) => {
      const values = Object.values(data);
      values.forEach((value) => {
        getAllByText(value).forEach((element) => {
          expect(element).toBeInTheDocument();
        });
      });
    });
  });

  it("should render all columns", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Card card={mockedCard} />
      </ThemeProvider>
    );

    mockedCard.columns.forEach((column) => {
      expect(getByText(column)).toBeInTheDocument();
    });
  });
});
