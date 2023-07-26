import { Container, InputText, SearchIcon } from "./styles";

interface Props {
  placeholder?: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  width?: string;
}

export default function SearchBar({
  placeholder,
  onChange,
  value,
  width,
}: Props) {
  return (
    <Container width={width}>
      <SearchIcon />
      <InputText placeholder={placeholder} onChange={onChange} value={value} />
    </Container>
  );
}
