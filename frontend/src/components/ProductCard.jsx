import { Box, Heading, HStack, IconButton, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { useColorModeValue } from './ui/color-mode';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useProductStore } from '@/store/product';
import { toaster } from "@/components/ui/toaster";
import { Button } from "@/components/ui/button"
import {DialogActionTrigger, DialogBody,DialogCloseTrigger,DialogContent,DialogFooter,DialogHeader,DialogRoot,DialogTitle,DialogTrigger,} from "@/components/ui/dialog"

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

            <DialogRoot>
                <DialogTrigger asChild>
                    <Button variant="outline" size="sm">
                        Open Dialog
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Dialog Title</DialogTitle>
                    </DialogHeader>
                    <DialogBody>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </DialogBody>
                    <DialogFooter>
                        <DialogActionTrigger asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogActionTrigger>
                        <Button>Save</Button>
                    </DialogFooter>
                    <DialogCloseTrigger />
                </DialogContent>
            </DialogRoot>
        </Box>
    );
};

export default ProductCard;
