import { VStack, Text, Heading, Box, Image, HStack, Divider } from '@chakra-ui/react'
import React from 'react'
import LoginBox from './LoginBox'
import SocialAuth from './SocialAuth'

const AuthForm = () => {
  return (
    <VStack justifyContent='center' alignItems='center' spacing={'5em'}>
        <VStack>
            <Image
            src="/images/logo.svg"
            pos="relative"
            alt='Logo'
            />
            <Heading>App Name</Heading>
        </VStack>
        <Box border='1px' borderWidth='1px' borderRadius='xl' p='6' m='5em'>
            <Heading>Sign In</Heading>
            <LoginBox />
            <Divider/>
            <SocialAuth w={['10px', '350px']}/>
        </Box>
    </VStack>
  )
}

export default AuthForm