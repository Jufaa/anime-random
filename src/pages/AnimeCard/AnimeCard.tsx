import { Card, CardBody, Image, Box, Badge } from '@chakra-ui/react';
import React from 'react';
import { datos } from '../../datos';

interface AnimePopupProps {
  id: number | null;
}

const AnimeCard: React.FC<AnimePopupProps> = ({ id }) => {
  const anime = datos.find((anime) => anime.Aid === id);

  return (
    <>
      <Box
        display="flex"
        maxW="2xl"
        borderWidth="1px"
        alignItems="center"
        justifyContent="center"
        borderRadius="2xl"
        overflow="hidden"
        bg="green.500"
      >
        {anime && (
          <Card
            borderRadius="md"
            overflow="hidden"
            maxW="100%"
            maxH="100vh"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Image
              src={anime.ImageURL}
              alt={anime.Name}
              maxW="25%"
              maxH="400px"
            />
            <CardBody>
              <Box display="flex" alignItems="baseline">
                <Badge borderRadius="full" px="15" colorScheme="teal">
                  {anime.Type}
                </Badge>
                <Box
                  color="gray.500"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="4xl"
                  ml="2"
                  textTransform="uppercase"
                >
                  {anime.Genre}
                </Box>
              </Box>
              <Box
                mt="1"
                fontWeight="semibold"
                as="h2"
                fontSize="4xl"
                lineHeight="tight"
                isTruncated
              >
                {anime.Name}
              </Box>
              <Box fontSize="xs">{anime.Plot}</Box>
              <Box display="flex" mt="2" alignItems="center">
                <Box as="span" color="gray.600" fontSize="sm">
                  {anime.Released}
                </Box>
              </Box>
            </CardBody>
          </Card>
        )}
      </Box>{' '}
    </>
  );
};

export default AnimeCard;
