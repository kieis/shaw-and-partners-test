import { Card, CardDataProps } from "@/components/Card";
import FileUpload from "@/components/FileUpload";
import InfoBox from "@/components/InfoBox";
import Loader from "@/components/Loader";
import SearchBar from "@/components/SearchBar";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { CardList, Container, Header } from "./styles";
import { formatFetchedData } from "@/utils";

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [filterValue, setFilterValue] = useState("");
  const [cards, setCards] = useState<CardDataProps[]>([]);
  const [filteredCards, setFilteredCards] = useState<CardDataProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          import.meta.env.VITE_BASE_API_URL + "/users",
          {
            method: "GET",
            headers: {
              Authorization: "Bearer " + import.meta.env.VITE_ACCESS_TOKEN,
            },
          }
        );

        const { data } = await response.json();
        data?.files.forEach((file: any) => {
          setCards((prevState) => [...prevState, formatFetchedData(file)]);
          setIsLoading(false);
        });
      } catch (err) {
        toast("Can't connect to server!", {
          type: "error",
          position: "top-right",
        });
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

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

  const handleOnChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setIsLoading(true);
    
    try {
      const formData = new FormData();
      formData.append("file", e.target.files[0]);

      const response = await fetch(
        import.meta.env.VITE_BASE_API_URL + "/files",
        {
          method: "POST",
          headers: {
            Authorization: "Bearer " + import.meta.env.VITE_ACCESS_TOKEN,
          },
          body: formData,
        }
      );

      if (!response?.status?.toString().match(/20[01]/)) {
        //regex checking 200 or 201
        toast("Failed to upload!", {
          type: "error",
          position: "top-right",
        });

        return setIsLoading(false);
      }

      const { data } = await response.json();
      setCards((prevState) => [...prevState, formatFetchedData(data)]);

      toast("File uploaded sucessfully!", {
        type: "success",
        position: "top-right",
      });
    } catch (err) {
      toast("Can't upload file!", {
        type: "error",
        position: "top-right",
      });
    }

    setIsLoading(false);
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
