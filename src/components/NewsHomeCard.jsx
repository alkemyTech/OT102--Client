import React from 'react'
import {
  Heading,
  Box,
  Center,
  Image,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';

export default function SocialProfileWithImage() {
  return (
    <Center py={6}>
      <Box
        columns={{ base: 1, md: 3 }}
        spacing={5}
        maxW="270px"
        w="full"
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow="sm"
        rounded="md"
        overflow="hidden"
      >
        <Image
          h="120px"
          w="full"
          src="https://www.yoinfluyo.com/images/stories/hoy/mar19/130319/Comedores_comunitarios.png"
          objectFit="cover"
        />

        <Box p={6}>
          <Stack spacing={1} align="left" mb={5}>
            <Heading fontSize="xl" fontWeight={600} fontFamily="atma">
              Juntos en la vuelta al cole
            </Heading>
            <Text color="gray.500" fontSize="xs">Por lo tanto, si queremos que un niño aprenda algo, y lo traslade a su entorno cognitivo, no existe mejor método de enseñanza que el juego.</Text>
          </Stack>

          <Button
            w="full"
            mt={5}
            bg={useColorModeValue('#F8FC74', 'gray.900')}
            color="black"
            fontSize="sm"
            rounded="md"
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}
          >
            Continuar Leyendo
          </Button>
        </Box>
      </Box>
    </Center>

  );
}
