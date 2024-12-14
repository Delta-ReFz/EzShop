import React from 'react';
import { useColorModeValue } from '@/components/ui/color-mode';
import { Box, Container, VStack, Text } from '@chakra-ui/react';

const HomePage = () => {
  // Appliquer la couleur du texte en fonction du mode
  const textColor = useColorModeValue("white", "black"); // Texte noir pour le mode clair et blanc pour le mode sombre
  
  return (
    <Box color={textColor}>  {/* La couleur du texte change en fonction du mode */}
      <Container maxW='container.xl' py={12}>
        <VStack wordSpacing={8}>
          <Text 
          fontSize={30}
          fontWeight={"bold"}
          bgGradient="to-r" gradientFrom="red.400" gradientTo="red.700"
          bgClip={"text"}
          textAlign={"center"}
          >
            Current Products 🚀
          </Text>

          

        </VStack>

      </Container>
      
    </Box>
  );
};

export default HomePage;