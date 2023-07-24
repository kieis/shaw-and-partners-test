import React from "react";
import { Container, Input, Text, UploadIcon } from "./styles";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  text: string;
  width?: string;
}

export default function FileUpload({ text, width, ...rest }: Props) {
  return (
    <Container width={width}>
      <UploadIcon />
      <Text>{text}</Text>
      <Input {...rest} />
    </Container>
  );
}
