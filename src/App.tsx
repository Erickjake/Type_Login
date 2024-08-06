import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "./components/Layout";
import { AppContextProvider } from "./components/AppContext";
import Rota from "./routes";
import { createLocalStorage, getAllLocalStorage } from "./services/storange";

function App() {
  if(!getAllLocalStorage()){
    createLocalStorage();
  }
 

  return (
    <BrowserRouter>
      <AppContextProvider>
        <ChakraProvider>
          <Layout>
            <Rota />
          </Layout>
        </ChakraProvider>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
