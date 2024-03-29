import React, {useContext} from 'react'
import { Grid, Box, VStack, Text, Flex, useBreakpointValue, Image, Link } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { motion} from "framer-motion"

import GlobalSidebar from '../Elements/GlobalSidebar'
import GlobalHeader from '../Elements/GlobalHeader'
import Ghostbar from '../Elements/Ghostbar'
import Footbar from '../Elements/Footbar'
import { ThemeContext } from '../Elements/AnimatedRoutes';

function About() {
  const {isClicked, handleClick} = useContext(ThemeContext)
  const redirect = useNavigate();
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
    alignItems="center"
    >
      {!isDesktop ? (
        <Box
        position="sticky"
        w="100%"
        top="0"
        zIndex="sticky" >
          <GlobalHeader/>
        </Box>
        ) : (<GlobalSidebar position="sticky"
        w="100%"
        left="0"
        zIndex="sticky" />
      )}
      <Box
      py="10"
      mb="10vh"
      textColor={isClicked ? 'gray.500' : "white"}
      w={{base: "80%", md: "60%" }}
      maxW="900px"
      justify={"center"}>
        <VStack
        as={motion.div}
        transition='.5s ease-out'
        gap={10}
        fontSize={{base:"xs", sm:"sm", md: "md", lg:"md", xl:"lg"}}>
          <Text lineHeight={1.5} textAlign="left">
          I love bringing ideas to life through technology and creativity. I feel fortunate to have found a field that allows me to combine my interests with my professional work.<br/>
          <br />

          I create responsive and modern web apps using React, JavaScript, TypeScript and many frameworks and libraries. With a Master's degree in the arts, specifically audio-visual media, I have a lot of confidence in my aesthetics and my vision for projects.<br/><br/>

          After building theme-based WordPress websites for almost 5 years, I recently decided to take my skills to the next level by educationg myself in the front-end stacks and a range of tools and frameworks such as:</Text>

          <Grid
          as={motion.div}
          transition='.5s ease-out'
          opacity={isClicked ? 0.7 : 1}
          templateColumns="repeat(11, 1fr)"
          gap={"1vh"} >
            <Image src="javascript.svg" minH="2vh" maxH={{base:"3vh", md:"5vh", xl:"6vh"}}/>
            <Image src="html.svg" minH="2vh" maxH={{base:"3vh", md:"5vh", xl:"6vh"}} />
            <Image src="css.svg" minH="2vh" maxH={{base:"3vh", md:"5vh", xl:"6vh"}}/>
            <Image src="typescript.svg" minH="2vh" maxH={{base:"3vh", md:"5vh", xl:"6vh"}}/>
            <Image src="react.svg" minH="2vh" maxH={{base:"3vh", md:"5vh", xl:"6vh"}}/>
            <Image src="material-ui-1.svg" minH="2vh" maxH={{base:"3vh", md:"5vh", xl:"6vh"}} />
            <Image src="logomark-colored.svg" minH="2vh" maxH={{base:"3vh", md:"5vh", xl:"6vh"}} />
            <Image src="node.svg" minH="2vh" maxH={{base:"3vh", md:"5vh", xl:"6vh"}}/>
            <Image src="Vite.svg" minH="2vh" maxH={{base:"3vh", md:"5vh", xl:"6vh"}}/>
            <Image src="figma.svg" minH="2h" maxH={{base:"3vh", md:"5vh", xl:"6vh"}}/>
            <Image src="github.svg" minH="2h" maxH={{base:"3vh", md:"5vh", xl:"6vh"}}/>
          </Grid>
          <Text textAlign="left">I hold the 
            <Link color='teal.200' href='https://www.coursera.org/professional-certificates/meta-front-end-developer?' isExternal _hover={{color:"gray.600"}}
            > Front-End Developer Professional Certificate
            </Link> from "Meta" (formally known as Facebook).<br/><br/>
          As a developer and a creator, I'm always looking for new challenges and inspirations to create awesome web apps. I'm excited to take on new projects and deliver high-quality work that not only meets but exceeds expectations.</Text>
        </VStack>
      </Box>
        {isDesktop ? (
        <Ghostbar />
        ) :(<></>)}
    </Flex>
    <Footbar/>
  </Box>
  )
}
export default About