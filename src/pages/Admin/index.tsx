import {
  Card,
  CardBody,
  Heading,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  Stack,
  Image,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();
  return (
    <div className={`flex w-screen h-screen items-center justify-center gap-10`}>
      <Card maxW="sm" shadow={"xl"}>
        <CardBody>
          <Image
            src="https://cdn-icons-png.flaticon.com/512/4341/4341764.png"
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">Cartões</Heading>
            <Text>
              Redirecionar para o formulário responsável por cadastrar, deletar
              cartões e atrelá-los ao usuário.
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <Button variant="solid" colorScheme="blue" width={"100%"} onClick={() => navigate("/admin/cards")}>
            Ir até a página
          </Button>
        </CardFooter>
      </Card>
      <Card maxW="sm" shadow={"xl"}>
        <CardBody>
          <Image
            src="https://static.vecteezy.com/system/resources/previews/007/081/002/original/phone-device-smart-app-business-watch-brand-cellphone-telephone-free-vector.jpg"
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">Produtos</Heading>
            <Text>
              Redirecionar para o formulário responsável por cadastrar e deletar
              o produto.
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <Button variant="solid" colorScheme="blue" width={"100%"} onClick={() => navigate("/admin/products")}>
            Ir até a página
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
export default Admin;
