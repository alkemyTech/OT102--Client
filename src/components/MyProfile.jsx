import React from 'react'
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  // useColorModeValue,
  HStack,
  Avatar,
  AvatarBadge,
  IconButton,
  Center,
  Box,
} from '@chakra-ui/react'
import { SmallCloseIcon } from '@chakra-ui/icons'
import Spinner from './Spinner'

export default function MyProfile() {
  const [loading, setLoading] = React.useState(false)
  const [edit, setEdit] = React.useState(false)
  const [data, setData] = React.useState({
    firstName: 'Maxi',
    lastName: 'Menendez',
    email: 'maxim@menedez.com',
  })

  if (loading) {
    return <Spinner />
  }

  return (
    <Flex minH="100%" align="center" justify="center" bg="grey.100">
      <Stack spacing={4} w="full" maxW="md" bg="white" rounded="xl" boxShadow="lg" p={6} my={12}>
        <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
          {edit ? 'Editar Perfil' : 'Mi Perfil'}
        </Heading>
        <FormControl id="userName">
          <FormLabel>User Icon</FormLabel>
          <Stack direction={edit ? ['column', 'row'] : 'column'} spacing={6}>
            <Center>
              <Avatar size="xl" src="https://bit.ly/sage-adebayo">
                {edit ? (
                  <AvatarBadge
                    as={IconButton}
                    size="sm"
                    rounded="full"
                    top="-10px"
                    colorScheme="red"
                    aria-label="remove Image"
                    icon={<SmallCloseIcon />}
                  />
                ) : null}
              </Avatar>
            </Center>
            {edit ? (
              <Center w="full">
                <Button w="full">Cambiar imagen</Button>
              </Center>
            ) : null}
          </Stack>
        </FormControl>
        <HStack>
          <Box>
            <FormControl id="firstName" isRequired>
              <FormLabel>First Name</FormLabel>
              <Input
                type="text"
                disabled={!edit}
                defaultValue={data.firstName}
                _disabled={{ opacity: 1 }}
              />
            </FormControl>
          </Box>
          <Box>
            <FormControl id="lastName">
              <FormLabel>Last Name</FormLabel>
              <Input
                type="text"
                disabled={!edit}
                defaultValue={data.lastName}
                _disabled={{ opacity: 1 }}
              />
            </FormControl>
          </Box>
        </HStack>
        <FormControl id="email" isRequired>
          <FormLabel>Email address</FormLabel>
          <Input
            placeholder="your-email@example.com"
            _placeholder={{ color: 'gray.500' }}
            type="email"
            disabled={!edit}
            defaultValue={data.email}
            _disabled={{ opacity: 1 }}
          />
        </FormControl>

        <Stack spacing={6} direction={['column', 'row']}>
          <Button
            bg="blue.400"
            color="white"
            w="full"
            _hover={{
              bg: 'blue.500',
            }}
            onClick={() => (!edit ? setEdit(!edit) : null)}
          >
            {edit ? 'Guardar' : 'Editar'}
          </Button>
          <Button
            bg="red.400"
            color="white"
            w="full"
            _hover={{
              bg: 'red.500',
            }}
            onClick={() => (edit ? setEdit(!edit) : null)}
          >
            {edit ? 'Cancelar' : 'Eliminar'}
          </Button>
        </Stack>
      </Stack>
    </Flex>
  )
}
