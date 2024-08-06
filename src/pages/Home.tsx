import { Box, Button, Flex, Input,Text } from "@chakra-ui/react";
import { Card } from "../components/Card";
import { login } from "../services/login";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { changeLocalStorage } from "../services/storange";

const Home = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { setIsLoggedIn } = useContext(AppContext)
  const navigate = useNavigate()

  const validateUser = async (email:string, password:string)=>{
        const loggedIn = await login(email,password) 

        if (!loggedIn) {
            setIsLoggedIn(false)
            alert('Email inválido ou Senha inválida')
        }
        else{
          setIsLoggedIn(true)
          changeLocalStorage({ login: true})
          navigate('/conta/1')
        }
       
  }
  return (
    <Box padding="25px">
      <Card>
        <Box
          backgroundColor="white"
          marginLeft="6rem"
          marginRight="6rem"
          borderRadius="1rem"
          p="1rem"
        >
          {/* {
              userData === null || userData === undefined ?
              <h1>Loading...</h1> :
              <h1>Informações carregadas!!!</h1>
            } */}
          <Flex flexDirection={"column"} pt={1} alignItems={"center"}>
            <Text fontSize="3xl">Faça seu login</Text>
            <Input
              placeholder="email"
              mt={1}
              width="70vw"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <Input placeholder="password" mt={1} width="70vw" type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
            <Button
              onClick={() => {
                validateUser(email, password);
              }}
            >
              Enviar
            </Button>
          </Flex>
        </Box>
      </Card>
    </Box>
  );
};

export default Home;
