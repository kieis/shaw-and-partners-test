import { useState } from "react";
import { Container, InputText, SearchIcon } from "./styles";

interface Props {
    placeholder?: string;
}

export default function SearchBar({ placeholder }: Props) {
    const [text, setText] = useState<string>("");

    return (
        <Container >
            <SearchIcon />
            <InputText placeholder={placeholder} />
        </Container>
    )
}