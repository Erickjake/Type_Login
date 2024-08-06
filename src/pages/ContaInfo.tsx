import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ContaInfo = () => {
  return (
    <>
      <Text fontSize="3xl" fontWeight="bold">
        Informação de Conta
      </Text>
      <Link to="/conta/1">
        <Text fontSize="xl" textColor="blueviolet">
          Conta
        </Text>
      </Link>
    </>
  );
};

export default ContaInfo;
