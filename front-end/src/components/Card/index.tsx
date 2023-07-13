import { Container, Text, Row } from "./styles";

interface Props {
    data: string[][];
}

export default function Card({ data }: Props) {
  return (
    <Container>
      {data.map((row) => (
        <Row>
          {row.map((column) => (
            <Text>{column}</Text>
          ))}
        </Row>
      ))}
    </Container>
  );
}
