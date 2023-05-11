/**
 * To create footer for the whole site as a reusable component
 */
import {
  Box,
  Text,
} from '@chakra-ui/react';

/**
 * To create footer for the whole site
 * @returns the footer for all the pages of the site
 */
export default function Navbar() {
  return (
    <Box 
      textAlign="center"
      color={'white'}
      padding="1rem"
      margin="2rem 0 0 0"
      bg={'blackAlpha.900'}
    >
      <Text>© 2023 HTeam. All Rights Reserved</Text>
    </Box>
  );
}