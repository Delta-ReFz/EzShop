import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { Box, Heading, HStack, Icon, IconButton, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { useColorModeValue } from './ui/color-mode'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const ProductCard = ({product}) => {
    const TextColor = useColorModeValue("gray.200", "gray.600");
    const bg = useColorModeValue("gray.800", "white");
  return (
    <Box
    shadow={'lg'}
    rounded={'lg'}
    overflow={'hidden'}
    transition={'all 0.3s'}
    _hover={{transform: "translateY(-5px)", shadow:"xl"}}
    bg={bg}
    m={6}>

        <Image src={product.image} alt={product.name} h={48} w={'full'} objectFit={'cover'}/>

        <Box p={4}>
            <Heading>
                {product.name}
            </Heading>

            <Text fontWeight={'bold'} fontSize={'xl'} color={TextColor} mb={4}>
                ${product.price}
            </Text>

            <HStack wordSpacing={5}>
                <IconButton bgColor={'blue.400'}> <FaEdit /> </IconButton>
                <IconButton bgColor={'red.400'}> <MdDelete /> </IconButton>
                
            </HStack>

        </Box>

    </Box>
  )
}

export default ProductCard