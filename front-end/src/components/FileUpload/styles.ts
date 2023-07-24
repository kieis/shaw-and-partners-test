import { CloudUpload } from "@styled-icons/material";
import { css, styled } from "styled-components";
import { motion } from "framer-motion";

type ContainerStyleProps = {
  width?: string;
};

export const Container = styled(motion.label)<ContainerStyleProps>`
  display: flex;
  flex-grow: 1;
  width: ${({ width }) => width ? width : "auto"};
  padding-inline: 1rem;
  padding-block: 0.6rem;
  background-color: ${({ theme }) => theme.colors.background};
  outline: none;
  border: 1px solid ${({ theme }) => theme.colors.highlight};
  border-radius: 8px;
  align-items: center;
  gap: 0.8rem;
  cursor: pointer;
`;

export const Input = styled.input.attrs({
  type: "file",
})`
  display: none;
`;

export const Text = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.text_primary};
    font-size: ${theme.font_size.sm}rem;
  `}

  pointer-events: none;
`;

export const UploadIcon = styled(CloudUpload).attrs(({ theme }) => ({
  color: theme.colors.highlight,
  size: 24,
}))``;
