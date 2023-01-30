import { Input } from "@/components/Form/Input";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { messageError } from "@/utils/messageError";
import {
  Box,
  Divider,
  Flex,
  Heading,
  SimpleGrid,
  VStack,
  HStack,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";

interface IFormCreateUser {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const createSchemaCreateUser = yup.object().shape({
  name: yup.string().required(messageError.required),
  email: yup.string().required(messageError.required).email(messageError.email),
  password: yup
    .string()
    .required(messageError.required)
    .min(6, messageError.min_password),
  confirmPassword: yup
    .string()
    .oneOf([null, yup.ref("password")], messageError.confirm_password),
});

export default function CreateUser() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createSchemaCreateUser),
  });

  const handleCreateUser: SubmitHandler<IFormCreateUser> = async values => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(values);
  };

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1450} mx="auto" px="6">
        <Sidebar />

        <Box
          flex="1"
          borderRadius="8"
          bg="gray.800"
          p={["6", "8"]}
          as="form"
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading size="lg" fontWeight="normal">
            Criar Usuários
          </Heading>

          <Divider my="6" borderColor="gray.700" />

          <VStack spacing={["6", "8"]}>
            <SimpleGrid
              flex="1"
              minChildWidth="250px"
              spacing={["6", "8"]}
              w="100%"
            >
              <Input
                name="name"
                label="Nome completo"
                error={formState.errors.name}
                {...register("name")}
              />
              <Input
                name="email"
                label="E-mail"
                type="email"
                error={formState.errors.email}
                {...register("email")}
              />
            </SimpleGrid>

            <SimpleGrid flex="1" minChildWidth="250px" spacing="8" w="100%">
              <Input
                name="password"
                label="Senha"
                error={formState.errors.password}
                {...register("password")}
              />
              <Input
                name="password_confirm"
                label="Para prosseguir, confirme a senha"
                type="password"
                error={formState.errors.confirmPassword}
                {...register("confirmPassword")}
              />
            </SimpleGrid>
          </VStack>

          <Flex mt="9" justify="flex-end">
            <HStack spacing="4">
              <Link href={"/dashboard"} passHref>
                <Button
                  as="a"
                  colorScheme="whiteAlpha"
                  fontSize="14"
                  _hover={{ bg: "gray.600" }}
                >
                  Cancelar ação
                </Button>
              </Link>
              <Button
                bg="pink.500"
                _hover={{ bg: "pink.500" }}
                fontSize="14"
                isLoading={formState.isSubmitting}
                type="submit"
              >
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
