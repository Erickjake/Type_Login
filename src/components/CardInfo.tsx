import { Box,Text } from "@chakra-ui/react"

interface ICardInfo{
    mainContent:string,
    content:string,
}

const CardInfo= ({mainContent, content}:ICardInfo)=>{
    return(
        <Box backgroundColor='white' minHeight='25vh' borderRadius='1rem' padding='1rem'>
            <Text fontSize='3xl' fontWeight='bold'>{mainContent}</Text>
            <Text fontSize='2xl'>{content}</Text>
        </Box>
    )
}

export default CardInfo