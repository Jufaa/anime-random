import {
  Box,
  Flex,
  Spacer,
  Heading,
  Button,
  Icon,
  useColorMode
} from '@chakra-ui/react';
import { BsFillSunFill, BsMoonFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex bg="blue.500" p={4} alignItems="center">
      <Box p="1">
        <Heading size="md" color="white">
          <Button
            variant="ghost"
            color="white"
            mr="4"
            onClick={toggleColorMode}
          >
            {colorMode === 'light' ? (
              <Icon as={BsFillSunFill} />
            ) : (
              <Icon as={BsMoonFill} />
            )}
          </Button>
          <Link to="/">AnimeChin</Link>
        </Heading>
      </Box>

      <Spacer />
      <Box>
        <Button variant="ghost" color="white" mr="4">
          <Link to="/random">Anime Random</Link>
        </Button>
      </Box>
    </Flex>
  );
};
export default NavBar;
