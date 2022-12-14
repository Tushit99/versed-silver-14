import {
    Box,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    Flex,
    Tag,
    Image,
    Input,
    useColorModeValue,
} from '@chakra-ui/react';


const ListHeader = ({ children }) => {
    return (
        <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
            {children}
        </Text>
    );
};

export default function Footer() {
    return (
        <Box
            bg={useColorModeValue('white')}
            color={useColorModeValue('gray.700', 'gray.200')}>
            <Container as={Stack} maxW={'8xl'} py={10}>
                <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
                    <Stack align={'flex-start'}>
                        <ListHeader>Help</ListHeader>
                        <Link href={'#'}>Overview</Link>
                        <Link href={'#'}>Customer Service</Link>
                        <Stack direction={'row'} align={'center'} spacing={2}>
                            <Link href={'#'}>Track Order</Link>
                            <Tag
                                size={'sm'}
                                bg={useColorModeValue('green.300', 'green.800')}
                                ml={2}
                                color={'white'}>
                                New
                            </Tag>
                        </Stack>
                        <Link href={'#'}>Returns & Exchanges</Link>
                        <Link href={'#'}>Shipping</Link>
                        <Link href={'#'}>International Orders</Link>
                        <Link href={'#'}>Contact Us</Link>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Quick Links</ListHeader>
                        <Link href={'#'}>Find a Store</Link>
                        <Link href={'#'}>Size Charts</Link>
                        <Link href={'#'}>Refer a Friend</Link>
                        <Link href={'#'}>Offers & Promotions</Link>
                        <Link href={'#'}>My Favorites</Link>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>About J.Crew</ListHeader>
                        <Link href={'#'}>Our Story</Link>
                        <Link href={'#'}>Careers</Link>
                        <Link href={'#'}>Social Responsibility</Link>
                        <Link href={'#'}>Investor Relations</Link>
                        <Link href={'#'}>Terms of Use</Link>
                        <Link href={'#'}>Privacy Policy</Link>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Like Being First?</ListHeader>
                        <Input borderColor='black.500' />
                    </Stack>
                </SimpleGrid>
            </Container>
            <Box py={10}>
                <Flex
                    align={'center'}
                    _before={{
                        content: '""',
                        borderBottom: '1px solid',
                        borderColor: useColorModeValue('gray.200', 'gray.700'),
                        flexGrow: 1,
                        mr: 8,
                    }}
                    _after={{
                        content: '""',
                        borderBottom: '1px solid',
                        borderColor: useColorModeValue('gray.200', 'gray.700'),
                        flexGrow: 1,
                        ml: 8,
                    }}>
                    <Image
                        h={{ base: '80px', sm: '100px', lg: '290px' }} 
                        w={{ base: '140px', sm: '180px', lg: '320px' }}
                        src={'https://searchlogovector.com/wp-content/uploads/2021/11/jcrew-logo-vector.png'}
                    /> 
                </Flex>
                <Text pt={6} fontSize={'sm'} textAlign={'center'}>
                    © 2022 Chakra Templates. All rights reserved
                </Text>
            </Box>
        </Box>
    );
}