import { Box, Center } from "@chakra-ui/react";
import { Header } from "../../components/Header/Header";
import Movies from "../movies";
import "./root.css";

export default function Root() {
  return (
    <Box className="root">
      <Header />
      <Center className="main-content" p={10}>
        <Movies />
      </Center>
    </Box>
  );
}
