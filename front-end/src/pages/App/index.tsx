import { Card, CardDataProps } from "@/components/Card";
import FileUpload from "@/components/FileUpload";
import InfoBox from "@/components/InfoBox";
import Loader from "@/components/Loader";
import SearchBar from "@/components/SearchBar";
import { parse } from "papaparse";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { CardList, Container, Header } from "./styles";

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [filterValue, setFilterValue] = useState("");
  const [cards, setCards] = useState<CardDataProps[]>([]);
  const [filteredCards, setFilteredCards] = useState<CardDataProps[]>([]);

  useEffect(() => {
    setFilteredCards(cards);
  }, [cards]);

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFilterValue(value);
    if (!value) return;

    const toFilter = cards.filter((card) => {
      const data = card.data.filter((row) =>
        Object.values(row).find(
          (search: string) =>
            search.toLowerCase().includes(value.toLocaleLowerCase()) !== false
        )
      );
      return data.length > 0;
    });

    setFilteredCards(toFilter);
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setIsLoading(true);

    parse(e.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        setTimeout(() => {
          const cardData = {
            data: results.data,
            columns: Object.keys(results.data[0] as object),
          } as CardDataProps;

          setCards((prevState) => [...prevState, cardData]);

          toast("File uploaded sucessfully!", {
            type: "success",
            position: "top-right",
          });

          setIsLoading(false);
        }, 1000);
      },
    });
  };

  return (
    <Container>
      <Header>
        <FileUpload
          text="Choose a file..."
          width={"30%"}
          accept={".csv"}
          onChange={handleOnChange}
        />
        <SearchBar value={filterValue} onChange={handleFilter} width={"30%"} />
      </Header>

      <InfoBox
        loadedCount={cards.length}
        searchCount={filterValue.length > 0 ? filteredCards.length : 0}
      />

      <CardList>
        {filteredCards.map((card) => (
          <Card card={card} />
        ))}
      </CardList>

      {isLoading && <Loader />}
    </Container>
  );
}
