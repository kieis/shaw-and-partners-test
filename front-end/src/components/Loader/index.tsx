import React from "react";
import { Container, LoadIcon } from "./styles";
import { motion } from "framer-motion";

interface Props {
  color?: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const LoadIconRef = React.forwardRef((props: Props, ref: any) => (
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  <LoadIcon {...props} ref={ref} />
));

const LoadIconMotion = motion(LoadIconRef);

export default function Loader({ color }: Props) {
  return (
    <Container>
      <LoadIconMotion
        color={color}
        animate={{
          rotate: 360,
        }}
        transition={{
          repeat: Infinity,
          duration: 0.8,
          ease: "linear",
        }}
      />
    </Container>
  );
}
