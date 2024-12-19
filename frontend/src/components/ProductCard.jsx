import { Box, Heading, HStack, Icon, IconButton, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { useColorModeValue } from './ui/color-mode';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useProductStore } from '@/store/product';
import { toaster } from "@/components/ui/toaster";

const ProductCard = ({ product }) => {
    const TextColor = useColorModeValue("gray.200", "gray.600");
    const bg = useColorModeValue("gray.800", "white");

    const { deleteProduct } = useProductStore();

    const handleDeleteProduct = async (pid) => {
        const { success, message } = await deleteProduct(pid);

        const type = success ? "error" : "success";
        // Toast créé dynamiquement en fonction du résultat
        toaster.create({
            title: success ? 'Error' : 'Success',      // Titre basé sur le succès
            description: message,                     // Affiche le message correspondant
            type: type,    // Style du toast
            duration: 3000,                           // Durée en millisecondes
            isClosable: true,                         // Option de fermeture manuelle
        });
    };

    return (
        <Box
            shadow={'lg'}
            rounded={'lg'}
            overflow={'hidden'}
            transition={'all 0.3s'}
            _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
            bg={bg}
            m={6}
        >
            <Image src={product.image} alt={product.name} h={48} w={'full'} objectFit={'cover'} />

            <Box p={7}>
                <Heading>{product.name}</Heading>

                <Text fontWeight={'bold'} fontSize={'xl'} color={TextColor} mb={4}>
                    ${product.price}
                </Text>

                <HStack>
                    <IconButton bgColor={'blue.400'}> <FaEdit /> </IconButton>
                    <IconButton onClick={() => handleDeleteProduct(product._id)} bgColor={'red.400'}> <MdDelete /> </IconButton>
                </HStack>
            </Box>
        </Box>
    );
};

export default ProductCard;
