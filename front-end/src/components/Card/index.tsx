import { Container, Row, Text } from "./styles";

export type CardDataProps = {
  data: {
    [s: string]: string
  }[];
  columns: string[];
};

interface Props {
  card: CardDataProps;
}

export function Card({ card }: Props) {
  return (
    <Container>
      <Row>
        {card?.columns.map((column) => (
          <Text key={column}>{column}</Text>
        ))}
      </Row>

      {card?.data.map((row, idx) => {
        const result = card?.columns.map(
          (column) => row && <Text key={row[column]}>{row[column]}</Text>
        );
        return <Row key={idx}>{result.map((row) => row)}</Row>;
      })}
    </Container>
  );
}
