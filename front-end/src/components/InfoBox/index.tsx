import { CheckIcon, Container, SearchIcon, Text } from "./styles";

interface Props {
    loadedCount: number;
    searchCount: number;
}

export default function InfoBox({ loadedCount = 0, searchCount = 0 } : Props) {
    return (
        <Container>
            <CheckIcon />
            <Text>
                {loadedCount} Files loaded
            </Text>

            <SearchIcon />
            <Text>
                {searchCount} Occurrences found
            </Text>
        </Container>
    )
}