import { Flex } from "@chakra-ui/react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Iconografias from "../components/Iconografia";




export default function Home() {
  return (
    <Flex direction="column">

      <Header />
      <Banner />
      <Iconografias />

    </Flex>
  )
}
