import { Flex, Icon, Input } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { RiSearchLine } from "react-icons/ri";

export function SearchBox() {
  //debounce => aguarda o user parar de digitar para efetuar uma ação

  return (
    <Flex
      as="label"
      flex="auto"
      py="4"
      px="8"
      ml="6"
      align="center"
      color="gray.200"
      position="relative"
      bg="gray.800"
      borderRadius="full"
      maxWidth={400}
    >
      <Input
        color="gray.50"
        variant="unstyled"
        placeholder="Buscar na plataforma"
        _placeholder={{ color: "gray.400" }}
        // ref={searchRef}
      />
      <Icon as={RiSearchLine} fontSize="20" />
    </Flex>
  );
}
