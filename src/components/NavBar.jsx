import { Box, Flex, Link, Spacer, Menu, MenuButton, MenuList, MenuItem, Text } from "@chakra-ui/react";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <Box bg="purple.400" py={4}>
      <Flex align="center" maxW="1200px" mx="auto">
        <Box>
          <Link href="#">
            <Text color="black" mx={4} ml={1} mr={20} fontSize={25}>
              Compras<Text as="span" fontStyle="italic">Comunitarias</Text>
            </Text>
          </Link>
        </Box>
        <Menu>
          <MenuButton as={Link} href="#" color="white" mx={4}>
            Productos
          </MenuButton>
          <MenuList>
            <MenuItem as={Link} href="#" color="black">Producto 1</MenuItem>
            <MenuItem as={Link} href="#" color="black">Producto 2</MenuItem>
          </MenuList>
        </Menu>
        <Link href="#" color="white" mx={4}>
          Productores
        </Link>
        <Link href="#" color="white" mx={4}>
          + Info
        </Link>
        <Spacer />
        <Box>
          <CartWidget />
        </Box>
      </Flex>
    </Box>
  );
};

export default NavBar;
