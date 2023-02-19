import NavBar from '@/components/NavBar'
import SideBar from '@/components/SideBar'
import PageWrapper from '@/components/util/PageWrapper'
import { HStack, VStack, Text } from '@chakra-ui/react'
import React from 'react'

const Home = () => {
  return (
    <PageWrapper>
      <VStack justifyContent="center" height="100vh" width="100%">
        <SideBar>
          <VStack>
            <Text>Home</Text>
          </VStack>
        </SideBar>
      </VStack>
    </PageWrapper>
  )
}

export default Home