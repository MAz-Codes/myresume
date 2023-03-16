import React, {useContext} from 'react'
import { Box, Stack, VStack, HStack, Flex, useBreakpointValue, Image, Button, ButtonGroup, CardBody,Card, Divider, CardFooter,Text, Heading, Tag, Badge, Grid } from '@chakra-ui/react'
import { motion} from "framer-motion"

import { ThemeContext } from '../Elements/AnimatedRoutes';

import GlobalSidebar from '../Elements/GlobalSidebar'
import GlobalHeader from '../Elements/GlobalHeader'
import Ghostbar from '../Elements/Ghostbar'
import Footbar from '../Elements/Footbar'

import FotoMani from "/mani-music.com_.png"
import FotoPortfolio from "/portfoliodark.jpg"
import FotoTara from "/tarawebshop.jpg"
import FotoMisagh from "/misaghazimi.com.jpg"
import FotoNba from "/nbanews.jpg"

function Work() {
  const {isClicked, handleClick} = useContext(ThemeContext)
  const isDesktop = useBreakpointValue({
    base: false,
    md: true,
  })
return (
  <Box
      as={motion.div}
      initial={{opacity:0}}
      animate={{opacity:1, transition: {duration: 1} }}
      exit={{opacity:0, transition: {duration: 1} }}>
          <Flex
          direction={{base:"column", md:"row"}}
          minH="95vh"
          justifyContent="space-between"
          alignItems={{base:"center", md:"start"}}
          >
            {!isDesktop ? (
              <Box
              position="sticky"
              w="100%"
              top="0"
              zIndex="sticky">
                <GlobalHeader/>
              </Box>
            ) : (
              <Box
              position="sticky"
              top="10%"
              zIndex="sticky">
                <GlobalSidebar/>
              </Box>
            )}
            <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="95vh"
            py="10"
            textColor={isClicked ? 'gray.400' : "white"}
            w="80vw">
              <VStack gap="2vw">
              <Grid
              gap="5vw"
              templateColumns={{base: "repeat(1, 1fr)", sm:"repeat(1, 1fr)", md: "repeat(2, 1fr)",lg:"repeat(2, 1fr)",xl: "repeat(2, 1fr)"}}
              justifyContent="center">
                <Card maxW='sm' bg={isClicked? "rgba(255, 255, 255, 0.05)" : "transparent"} boxShadow="dark-lg" textColor="white">
                  <CardBody>
                    <Image
                      src={FotoPortfolio}
                      alt='Green double couch with wooden legs'
                      borderRadius='sm'
                    />
                    <Stack mt='6' spacing='3'>
                      <Heading fontFamily="Oswald-Regular" size='lg'>CV</Heading>
                      <Text fontSize="sm" py="1vh">
                        This static portfolio was made to showcase my current knowledge and skills of the front-end framework. This minimalistic site was created with React and Chakra UI and built with Vite.JS. The "dark mode" was created with the Context and the animations were made using the Framer Motion Library.
                      </Text>
                      <Grid gap="1" templateColumns={"repeat(3, 1fr)"}>
                        <Tag px="1.5" size="sm" w="fit-content">#React JS</Tag>
                        <Tag px="1.5" size="sm" w="fit-content">#ChakraUI</Tag>
                        <Tag px="1.5" size="sm" w="fit-content">#JavaScript</Tag>
                        <Tag px="1.5" size="sm" w="fit-content">#CSS</Tag>
                        <Tag px="1.5" size="sm" w="fit-content">#Vite.JS</Tag>
                        <Tag px="1.5" size="sm" w="fit-content">#Motion</Tag>
                      </Grid>
                    </Stack>
                  </CardBody>
                  <Divider />
                  <CardFooter justifyContent={"center"} alignItems="center">
                    <Stack direction={"row"} spacing='2vw'>
                      <Button bg="rgba(255, 255, 255, 0.1)" _hover={{backgroundColor:"white", textColor:"black", borderColor:"transparent"}} _focus={{borderColor:"white", outlineColor:"transparent"}}
                      onClick={()=> window.open("https://github.com/maz-codes/myresume")}>
                        GitHub
                      </Button>
                      <Button bg="rgba(255, 255, 255, 0.1)" _hover={{backgroundColor:"white", textColor:"black", borderColor:"transparent"}} _focus={{borderColor:"white", outlineColor:"transparent"}}
                      onClick={()=> window.open("https://mazcodes.com")}>
                        Live Demo
                      </Button>
                    </Stack>
                  </CardFooter>
                </Card>

                <Card  maxW='sm' bg={isClicked? "rgba(255, 255, 255, 0.05)" : "transparent"} boxShadow="dark-lg" textColor="white">
                  <CardBody>
                    <Image
                      src={FotoTara}
                      alt='Green double couch with wooden legs'
                      borderRadius='sm'
                    />
                    <Stack mt='6' spacing='3'>
                      <Heading fontFamily="Oswald-Regular" size='lg'>Fashion Webshop</Heading>
                      <Text fontSize="sm" py="1vh">
                        This responsive SPA was created with React and styled with Chakra UI. I used react hooks such as "useState", "useContext" and "useNavigate" to track, update, redirect and distribute data throughout the app. The contact form features client-side validation.
                      </Text>
                      <Grid gap="1" templateColumns={"repeat(3, 1fr)"}>
                        <Tag px="1.5" size="sm" w="fit-content">#React JS</Tag>
                        <Tag px="1.5" size="sm" w="fit-content">#ChakraUI</Tag>
                        <Tag px="1.5" size="sm" w="fit-content">#JavaScript</Tag>
                        <Tag px="1.5" size="sm" w="fit-content">#CSS</Tag>
                        <Tag px="1.5" size="sm" w="fit-content">#html</Tag>
                        <Tag px="1.5" size="sm" w="fit-content">#Vite.JS</Tag>
                        <Tag px="1.5" size="sm" w="fit-content">#Figma</Tag>
                      </Grid>
                    </Stack>
                  </CardBody>
                  <Divider />
                  <CardFooter justifyContent={"center"} alignItems="center">
                    <Stack direction={"row"} spacing='2vw'>
                      <Button bg="rgba(255, 255, 255, 0.1)" _hover={{backgroundColor:"white", textColor:"black", borderColor:"transparent"}} _focus={{borderColor:"white", outlineColor:"transparent"}}
                      onClick={()=> window.open("https://github.com/maz-codes/tarawebshop")}>
                        GitHub
                      </Button>
                      <Button bg="rgba(255, 255, 255, 0.1)" _hover={{backgroundColor:"white", textColor:"black", borderColor:"transparent"}} _focus={{borderColor:"white", outlineColor:"transparent"}}
                      onClick={()=> window.open("https://tarawebshop.netlify.app/")}>
                        Live Demo
                      </Button>
                    </Stack>
                  </CardFooter>
                </Card>

              </Grid>
              <Grid
              gap="5vw"
              templateColumns={{base: "repeat(1, 1fr)", sm:"repeat(1, 1fr)", md: "repeat(2, 1fr)",lg:"repeat(2, 1fr)",xl: "repeat(2, 1fr)"}}
              justifyContent="center">
                <Card maxW='sm' bg={isClicked? "rgba(255, 255, 255, 0.05)" : "transparent"} boxShadow="dark-lg" textColor="white">
                  <CardBody>
                    <Image
                      src={FotoNba}
                      alt='Green double couch with wooden legs'
                      borderRadius='sm'
                    />
                    <Stack mt='6' spacing='3'>
                      <Heading fontFamily="Oswald-Regular" size='lg'>Self-Updating News Page</Heading>
                      <Text fontSize="sm" py="1vh">
                        Using the NEWS API and the Axios library to fetch data, this simple web app retrieves NBA related topics from the news and maps them out as cards that you can click on to read more. (The Demo with the free API might break. In that case find the code at GitHub)
                      </Text>
                      <Grid gap="1" templateColumns={"repeat(3, 1fr)"}>
                        <Tag px="1.5" size="sm" w="fit-content">#React JS</Tag>
                        <Tag px="1.5" size="sm" w="fit-content">#JavaScript</Tag>
                        <Tag px="1.5" size="sm" w="fit-content">#NewsAPI</Tag>
                        <Tag px="1.5" size="sm" w="fit-content">#Axios</Tag>
                        <Tag px="1.5" size="sm" w="fit-content">#CSS</Tag>
                        <Tag px="1.5" size="sm" w="fit-content">#Vite.JS</Tag>
                      </Grid>
                    </Stack>
                  </CardBody>
                  <Divider />
                  <CardFooter justifyContent={"center"} alignItems="center">
                    <Stack direction={"row"} spacing='2vw'>
                      <Button bg="rgba(255, 255, 255, 0.1)" _hover={{backgroundColor:"white", textColor:"black", borderColor:"transparent"}} _focus={{borderColor:"white", outlineColor:"transparent"}}
                      onClick={()=> window.open("https://github.com/maz-codes/nbanews")}>
                        GitHub
                      </Button>
                      <Button bg="rgba(255, 255, 255, 0.1)" _hover={{backgroundColor:"white", textColor:"black", borderColor:"transparent"}} _focus={{borderColor:"white", outlineColor:"transparent"}}
                      onClick={()=> window.open("https://nbanewsapi.netlify.app/")}>
                        Live Demo
                      </Button>
                    </Stack>
                  </CardFooter>
                </Card>
                <Card maxW='sm' bg={isClicked? "rgba(255, 255, 255, 0.05)" : "transparent"} boxShadow="dark-lg" textColor="white">
                  <CardBody>
                    <Image
                      src={FotoMisagh}
                      alt='Green double couch with wooden legs'
                      borderRadius='sm'
                    />
                    <Stack mt='6' spacing='3'>
                      <Heading fontFamily="Oswald-Regular" size='lg'>Artistic Portfolio</Heading>
                      <Text fontSize="sm" py="1vh">
                        This portfolio site was made using WordPress with spicific funcionality in mind: show dates, music albums, video players etc. The layout is based on a theme off of Envato Market and changed using WP Bakery, Elementor and CSS to bring a creative touch to the site.
                      </Text>
                      <Grid gap="1" templateColumns={"repeat(3, 1fr)"}>
                      <Tag size="sm" w="fit-content">#CMS</Tag>
                        <Tag px="1.5" size="sm" w="fit-content">#WordPress</Tag>
                        <Tag px="1.5" size="sm" w="fit-content">#Elementor</Tag>
                        <Tag px="1.5" size="sm" w="fit-content">#WPBakery</Tag>
                        <Tag px="1.5" size="sm" w="fit-content">#CSS</Tag>
                      </Grid>
                    </Stack>
                  </CardBody>
                  <Divider />
                  <CardFooter justifyContent={"center"} alignItems="center">
                      <Button bg="rgba(255, 255, 255, 0.1)" _hover={{backgroundColor:"white", textColor:"black", borderColor:"transparent"}} _focus={{borderColor:"white", outlineColor:"transparent"}}
                      onClick={()=> window.open("https://misaghazimi.com")}>
                        Live Demo
                      </Button>
                  </CardFooter>
                </Card>
              </Grid>
              </VStack>
            </Box>
            <Ghostbar />
          </Flex>
          <Footbar/>
      </Box>
)
}

export default Work