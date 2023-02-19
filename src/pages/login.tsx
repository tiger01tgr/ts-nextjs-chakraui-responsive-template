import AuthForm from '@/components/AuthForm'
import PageWrapper from '@/components/util/PageWrapper'
import { VStack } from '@chakra-ui/react'
import React from 'react'

const Login = () => {
  return (
    <PageWrapper>
        <VStack justifyContent="center" height="100vh" width="100%">
            <AuthForm />
        </VStack>
    </PageWrapper>
  )
}

export default Login