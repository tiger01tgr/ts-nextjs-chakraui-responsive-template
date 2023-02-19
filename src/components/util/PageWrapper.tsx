import { Flex } from '@chakra-ui/react'
import React from 'react'

interface Props {
    children: React.ReactNode
}

const PageWrapper: React.FC<Props> = ({children}) => {
  return (
    <Flex w={'100vw'} direction='inherit' position='relative' minH='100vh' width="100%">
        {children}
    </Flex>
  )
}

export default PageWrapper