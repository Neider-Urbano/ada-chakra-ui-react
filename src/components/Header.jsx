import React from "react";
import { Button, Text, Img, Box, Center, Flex } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box w="100%" h="240px" pos="relative">
      <Img
        src="https://s39927.pcdn.co/wp-content/uploads/2022/09/slidescarnival-header-scaled.jpg"
        alt="fondo header"
        objectFit="cover"
        pos="absolute"
        top="0"
        left="0"
        right="0"
        h="100%"
        w="100%"
      />
      <Box
        pos="absolute"
        top="0"
        left="0"
        right="0"
        w="100%"
        h="100%"
        pt="70px"
      >
        <Center w="100%">
          <Text size="2xl" pb="10px">
            DOMINA EL TERRENO
          </Text>
        </Center>
        <Center w="100%">
          <Button
            size="md"
            height="48px"
            width="200px"
            border="2px"
            borderColor="white"
            mr="10px"
            variant="outline"
            color="white"
            _hover={{ color: "black", background: "white" }}
          >
            Ver video
          </Button>
          <Button
            size="md"
            height="48px"
            width="200px"
            border="2px"
            borderColor="white"
            variant="outline"
            color="white"
            _hover={{ color: "black", background: "white" }}
          >
            Ver detalles
          </Button>
        </Center>
      </Box>
    </Box>
  );
};

export default Header;
