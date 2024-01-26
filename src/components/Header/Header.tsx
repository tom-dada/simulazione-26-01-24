import { Box, Button, Flex, Heading, Image, Spacer } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { MdHome } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  /* TODO: Fix navigation */
  /* const navigate = useNavigate(); */

  return (
    <Box className="header-root">
      <Flex minWidth="max-content" alignItems="center" gap="2" bg={"#F80"}>
        <Box p="2">
          <Image
            borderRadius="full"
            boxSize="50px"
            loading="lazy"
            src="../src/assets/logo/android-chrome-192x192.png"
            alt="Logo"
          />
        </Box>
        <Box p="2">
          <Heading size="md">Movie App</Heading>
        </Box>

        <Spacer />

        <Box p="2">
          <Button
            /* onClick={() => {
              navigate("/");
            }} */
            leftIcon={<Icon as={MdHome} />}
            bg={"#500"}
            color={"#F80"}
          >
            Home
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};
