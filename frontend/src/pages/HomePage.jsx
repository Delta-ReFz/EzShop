import React, { useEffect } from 'react';
import { useColorModeValue } from '@/components/ui/color-mode';
import { Box, Container, VStack, Text, SimpleGrid} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useProductStore } from '@/store/product';
import ProductCard from '@/components/ProductCard';

const HomePage = () => {

  const {fetchProducts, products} = useProductStore();
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  console.log("products", products);


  // Appliquer la couleur du texte en fonction du mode
  const textColor = useColorModeValue("white", "black"); // Texte noir pour le mode clair et blanc pour le mode sombre
  
  return (
    <Box color={textColor}>  {/* La couleur du texte change en fonction du mode */}
      <Container maxW='container.xl' py={12}>
        <VStack>
          <Text 
          fontSize={30}
          fontWeight={"bold"}
          bgGradient="to-r" gradientFrom="red.400" gradientTo="red.700"
          bgClip={"text"}
          textAlign={"center"}
          >
            Current Products 🚀
          </Text>

          <SimpleGrid columns={{
            base:1,
            md:2,
            lg: 3,
          }}
          
          w={"full"}
          >
            {products.map((product) => (
              <ProductCard key={products._id} product = {product} />
            ))}

          </SimpleGrid>

          {products.length === 0 && (
            <Text fontSize={'xl'} textAlign={"center"} fontWeight={'bold'} color={'gray.500'} >
            No products found 😔 {" "}
            <Link to={"/create"}>
            <Text as={'span'} color={'red.700'} _hover={{ textDecoration: "underline"}}>
              Create a product
            </Text>
            </Link>

          </Text>
          )}

          

        </VStack>

      </Container>
      
    </Box>
  );
};

export default HomePage;