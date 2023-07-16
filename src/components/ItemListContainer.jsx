import { Box, Text } from "@chakra-ui/react";


const ItemListContainer = ({greeting}) => {
  return (
    <Box>
      <Text>{greeting}</Text>
    </Box>
  )
}

export default ItemListContainer