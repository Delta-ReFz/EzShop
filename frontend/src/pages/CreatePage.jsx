import { Box, Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useColorModeValue } from '@/components/ui/color-mode';
import { useProductStore } from '@/store/product';

const CreatePage = () => {
  const textColor = useColorModeValue("white", "black");
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const {createProduct} = useProductStore()
  const handleAddProduct = async() => {
    const {success,message} = await createProduct(newProduct)
    console.log("Success:", success);
    console.log("Message", message);
  }

  return (
    <Container maxW={"container.sm"} color={textColor}>
      <VStack wordSpacing={8}>
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8} >
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
                borderColor: 'red.700', // Bordure rouge au focus
                boxShadow: '0 0 10px red.600', // Effet de shadow rouge
              }}
              bg="gray.600" // Fond sombre pour l'input
              color="white" // Texte blanc dans l'input
              _placeholder={{ color: 'gray.400' }} // Couleur des placeholders
            />

            <Input
              placeholder='Price'
              name='price'
              type='number'
              value={newProduct.price}
              onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
              _focus={{
                borderColor: 'red.600', // Bordure rouge au focus
                boxShadow: '0 0 10px red.600', // Effet de shadow rouge
              }}
              bg="gray.600"
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
              bg="gray.600"
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
