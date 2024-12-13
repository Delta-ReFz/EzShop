import React from 'react';
import { useColorModeValue } from '@/components/ui/color-mode';
import { Box } from '@chakra-ui/react';

const HomePage = () => {
  // Appliquer la couleur du texte en fonction du mode
  const textColor = useColorModeValue("white", "black"); // Texte noir pour le mode clair et blanc pour le mode sombre
  
  return (
    <Box color={textColor}>  {/* La couleur du texte change en fonction du mode */}
      <div>HomePage</div>
      {/* Ajoutez d'autres éléments si nécessaire */}
    </Box>
  );
};

export default HomePage;