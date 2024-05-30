import { Box, Container, Flex, Heading, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Smartphone",
    price: "$699",
    image: "/images/sample-product-1.jpg",
  },
  {
    id: 2,
    name: "Laptop",
    price: "$999",
    image: "/images/sample-product-2.jpg",
  },
  {
    id: 3,
    name: "Smartwatch",
    price: "$199",
    image: "/images/sample-product-3.jpg",
  },
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="brand.700" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">
          <Link to="/">ElectroShop</Link>
        </Heading>
        <Box>
          <Link to="/" style={{ marginRight: "20px" }}>Home</Link>
          <Link to="/products">Products</Link>
        </Box>
      </Flex>

      <VStack spacing={8} mt={8}>
        <Heading as="h2" size="xl">Welcome to ElectroShop</Heading>
        <Text fontSize="lg">Your one-stop shop for the latest electronics</Text>
      </VStack>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} mt={10}>
        {products.map((product) => (
          <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={product.image} alt={product.name} />
            <Box p={6}>
              <Heading as="h3" size="md">{product.name}</Heading>
              <Text mt={4}>{product.price}</Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Index;