import { Box, Heading, HStack, IconButton, Image, Input, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useColorModeValue } from './ui/color-mode';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useProductStore } from '@/store/product';
import { toaster } from "@/components/ui/toaster";
import { Button } from "@/components/ui/button"
import { DialogActionTrigger, DialogBody, DialogCloseTrigger, DialogContent, DialogFooter, DialogHeader, DialogRoot, DialogTitle, DialogTrigger, } from "@/components/ui/dialog"

const ProductCard = ({ product }) => {
    const [updatedProduct, setUpdatedProduct] = useState(product);


    const TextColor = useColorModeValue("gray.200", "gray.600");
    const bg = useColorModeValue("gray.800", "white");

    const { deleteProduct, updateProduct } = useProductStore();

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


    const handleUpdateProduct = async (pid, updatedProduct) => {
       const {success, message} = await updateProduct(pid, updatedProduct);
       const type = success ? "success" : "error";
        // Toast créé dynamiquement en fonction du résultat
        toaster.create({
            title: success ? 'Success' : 'Error',      // Titre basé sur le succès
            description: message,                     // Affiche le message correspondant
            type: type,    // Style du toast
            duration: 3000,                           // Durée en millisecondes
            isClosable: true,                         // Option de fermeture manuelle
        });
    }

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
                    <IconButton bgColor={'blue.400'}>
                        <DialogRoot>
                            <DialogTrigger asChild>
                                <Box as="span">
                                    <FaEdit />
                                </Box>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Update Product</DialogTitle>
                                </DialogHeader>
                                <DialogBody>
                                    <VStack wordSpacing={4}>
                                        <Input
                                            placeholder='Product Name'
                                            name='name'
                                            value={updatedProduct.name}
                                            onChange={(e) => setUpdatedProduct({
                                                ...updatedProduct, name: e.target.
                                                    value
                                            })}
                                        />
                                        <Input
                                            placeholder='Price'
                                            name='price'
                                            type='number'
                                            value={updatedProduct.price}
                                            onChange={(e) => setUpdatedProduct({
                                                ...updatedProduct, price: e.target.
                                                    value
                                            })}
                                        />
                                        <Input
                                            placeholder='Image URL'
                                            name='image'
                                            value={updatedProduct.image}
                                            onChange={(e) => setUpdatedProduct({
                                                ...updatedProduct, image: e.target.
                                                    value
                                            })}
                                        />
                                    </VStack>
                                </DialogBody>
                                <DialogFooter>
                                    <DialogActionTrigger colorPalette={'red'} asChild>
                                        <Button>Cancel</Button>
                                    </DialogActionTrigger>

                                    <DialogActionTrigger colorPalette={'blue'}>

                                        <Button
                                            onClick={async () => {
                                                const result = await handleUpdateProduct(product._id, updatedProduct);

                                                setUpdatedProduct(product); // Optionnel : reset les valeurs    
                                            }}
                                        >Update
                                        </Button>
                                    </DialogActionTrigger>
                                </DialogFooter>
                                <DialogCloseTrigger />
                            </DialogContent>
                        </DialogRoot>
                    </IconButton>
                    <IconButton onClick={() => handleDeleteProduct(product._id)} bgColor={'red.400'}> <MdDelete /> </IconButton>
                </HStack>
            </Box>


        </Box>
    );
};

export default ProductCard;
