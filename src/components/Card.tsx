import { Center, Box} from "@chakra-ui/react";


export const Card = ({children}:any) => {
  
 
  return (
    <>
      <Center>
        <Box
          backgroundColor="lightgoldenrodyellow"
          minHeight="100vh"
          width="100vw"
          padding="2rem"
        >
          {children}
         
        </Box>
      </Center>
    </>
  );
};
