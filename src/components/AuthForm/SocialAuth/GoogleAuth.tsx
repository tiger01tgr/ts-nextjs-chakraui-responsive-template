import { Box, Button, Icon, IconButton } from '@chakra-ui/react'
import React from 'react'
import { GoogleIcon } from './Icons/GoogleIcon'

interface Props {
    w?: string[]
}

const GoogleAuth: React.FC<Props> = ({w}) => (
    <Box justifyContent='center'>
        <Button leftIcon={<GoogleIcon />} w={w ? w : [null, '100%', null]} display={['none', 'flex', null, null]}>
            Sign in with Google
        </Button>
        <IconButton aria-label='Google Sign-in' icon={<GoogleIcon />} display={['flex', 'none', null, null]}/>
    </Box>
)

export default GoogleAuth