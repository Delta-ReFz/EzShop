import { Box, Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useColorModeValue } from '@/components/ui/color-mode';
import { useProductStore } from '@/store/product';
import { toaster } from "@/components/ui/toaster"

const CreatePage = () => {
  const textColor = useColorModeValue("white", "black");
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });


  const { createProduct } = useProductStore();

  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct);

    // Type du toast basé sur le résultat (succès ou erreur)
    const type = success ? "success" : "error";

    // Création du toast avec `toaster.create`
    toaster.create({
      title: success ? "Success" : "Error", // Titre basé sur le type
      description: message,                 // Message à afficher
      type: type,                           // Style basé sur le type
      duration: 3000,                       // Durée de 3 secondes
    });

    setNewProduct({name: "",price: "", image: ""});
  };

  return (
    <Container maxW={"container.sm"} color={textColor}>
      <VStack wordSpacing={8}>
        <Heading as={"h1"} size={"4xl"} textAlign={"center"} mb={8} >
          Create New Product
        </Heading>

        <Box w={"full"} maxW={"lg"} bg={useColorModeValue("gray.800", "black")}
          p={6} rounded={"lg"} shadow={"xl"}>

          <VStack wordSpacing={4}>

            <Input
              placeholder='Product Name'
              name='name'
              value={newProduct.name}
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
              _focus={{
                borderColor: 'red.600', // Bordure rouge au focus
                boxShadow: '0 0 10px red.600', // Effet de shadow rouge
              }}
              bg="gray.700" // Fond sombre pour l'input
              color="white" // Texte blanc dans l'input
              _placeholder={{ color: 'gray.400' }} //Couleur des placeholders
            />

            <Input
              placeholder='Price'
              name='price'
              
              value={newProduct.price}
              onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
              _focus={{
                borderColor: 'red.600', // Bordure rouge au focus
                boxShadow: '0 0 10px red.600', // Effet de shadow rouge
              }}
              bg="gray.700"
              color="white"
              _placeholder={{ color: 'gray.400' }}
            />

            <Input
              placeholder='Image URL'
              name='image'
              value={newProduct.image}
              onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
              _focus={{
                borderColor: 'red.600',
                boxShadow: '0 0 10px red.600',
              }}
              bg="gray.700"
              color="white"
              _placeholder={{ color: 'gray.400' }}
            />

            <Button
              onClick={handleAddProduct}
              w={'full'}
              bg="red.600"
              color="white"
              _hover={{ bg: "red.700" }} // Effet au survol
              _active={{ bg: "red.800" }} // Effet au clic
              _focus={{ boxShadow: '0 0 10px red.600' }} // Shadow rouge au focus
            >
              Add Product
            </Button>

          </VStack>

        </Box>

      </VStack>
    </Container>
  )
}

export default CreatePage
