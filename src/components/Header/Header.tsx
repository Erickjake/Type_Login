import { Button, ChakraProvider, Flex, Spacer, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import { useNavigate } from "react-router-dom";
import { changeLocalStorage } from "../../services/storange";

export const Header = (): any => {

  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext)
  const navigate = useNavigate()

  const logout = ()=>{
    changeLocalStorage({login:false})
    setIsLoggedIn(false)
    navigate('/')
  }

    return (
    <ChakraProvider>
      <Flex textAlign="left" backgroundColor=" #e6e6e6" height="10vh">
        <Text fontSize="5xl">Login Express</Text>
        <Spacer />
        {
          isLoggedIn && (
            <Button margin='1rem' backgroundColor='gray' onClick={() => logout()}>Sair</Button>
          )
        }
      </Flex>
    </ChakraProvider>
  );
};
