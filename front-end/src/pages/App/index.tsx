import SearchBar from "@/components/SearchBar";
import { Container } from "./styles";
import Card from "@/components/Card";

export default function App() {
  const csvMock = [
    [
      ["name", "city", "country", "favorite_sport"],
      ["John Doe", "New York", "USA", "Basketball"],
      ["Jane Smith", "London", "UK", "Football"],
      ["Mike Johnson", "Paris", "France", "Tennis"],
      ["Karen Lee", "Tokyo", "Japan", "Swimming"],
      ["Tom Brown", "Sydney", "Australia", "Running"],
      ["Emma Wilson", "Berlin", "Germany", "Basketball"],
    ],
    [
      ["name", "city", "country", "favorite_sport"],
      ["John Doe", "New York", "USA", "Basketball"],
      ["Jane Smith", "London", "UK", "Football"],
      ["Mike Johnson", "Paris", "France", "Tennis"],
      ["Karen Lee", "Tokyo", "Japan", "Swimming"],
      ["Tom Brown", "Sydney", "Australia", "Running"],
      ["Emma Wilson", "Berlin", "Germany", "Basketball"],
    ],
    [
      ["name", "city", "country", "favorite_sport"],
      ["John Doe", "New York", "USA", "Basketball"],
      ["Jane Smith", "London", "UK", "Football"],
      ["Mike Johnson", "Paris", "France", "Tennis"],
      ["Karen Lee", "Tokyo", "Japan", "Swimming"],
      ["Tom Brown", "Sydney", "Australia", "Running"],
      ["Emma Wilson", "Berlin", "Germany", "Basketball"],
    ]
  ]

  return (
    <Container>
      <SearchBar />
      {csvMock.map((mock) => <Card data={mock} />)}
    </Container>
  )
}
