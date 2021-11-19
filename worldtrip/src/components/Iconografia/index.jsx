import { Grid, GridItem } from "@chakra-ui/layout";
import Iconografia from "./Iconografia";

export default function Iconografias() {
  return (
    <Grid
      templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]}
      w="100%"
      justify="space-between"
      align="center"
      mt={["10", "32"]}
      mx="auto"
      maxW="1160px"
      flexWrap="wrap"
      gap={[1, 5]}
    >
      <GridItem>
        <Iconografia icon="nightlife" text="vida noturna" />
      </GridItem>
      <GridItem>
        <Iconografia icon="beach" text="praia" />
      </GridItem>
      <GridItem>
        <Iconografia icon="modern" text="moderno" />
      </GridItem>
      <GridItem>
        <Iconografia icon="classic" text="clássico" />
      </GridItem>
      <GridItem colSpan={[2, 2, 2, 1]}>
        <Iconografia icon="more" text="e mais..." />
      </GridItem>
    </Grid>
  );
}
