import React from 'react';
import { useState, useEffect } from 'react';
import { datos } from '../../datos';
import {
  Box,
  Button,
  Card,
  CardBody,
  Center,
  Divider,
  Grid,
  Heading,
  Image,
  Stack,
  StackDivider,
  Text
} from '@chakra-ui/react';
import { AnimeDatos } from '../Types';
import AnimeCard from '../AnimeCard/AnimeCard';

const AllAnimes: React.FC = () => {
  const [animes, setAnimes] = useState<AnimeDatos[]>([]);
  const [page, setPage] = useState(1);
  const [animesPerPage] = useState(10);
  const [currentAnimes, setCurrentAnimes] = useState<AnimeDatos[]>([]);
  const [selectedAnimeId, setSelectedAnimeId] = useState<number | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const indexOfLastAnime = page * animesPerPage;
    const indexOfFirstAnime = indexOfLastAnime - animesPerPage;
    const newCurrentAnimes = animes.slice(indexOfFirstAnime, indexOfLastAnime);
    setCurrentAnimes(newCurrentAnimes);
  }, [animes, page, animesPerPage]);

  useEffect(() => {
    setAnimes(datos as unknown as AnimeDatos[]);
  }, []);

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    setPage(page - 1);
  };

  return (
    <Stack spacing={5}>
      <Grid
        templateColumns="repeat(5, 2fr)"
        gap={3}
        flexWrap="wrap"
        alignItems="stretch"
      >
        {currentAnimes.map((anime) => (
          <Box key={anime.Aid}>
            <Card maxW="xl" marginTop={10} height={900}>
              <CardBody>
                <Image src={anime.ImageURL} boxSize="350px" objectFit="cover" />
                <Stack divider={<StackDivider />}>
                  <Heading size="xl" marginTop={3}>
                    {anime.Name}
                  </Heading>
                  <Text fontSize={15}>{anime.Plot}</Text>
                </Stack>
                <Center height="30px">
                  <Divider orientation="horizontal" />
                </Center>
                <Button
                  size="lg"
                  height="48px"
                  width={333}
                  border="1px"
                  borderColor="green.500"
                  onClick={() => {
                    setIsPopupOpen(true);
                    setSelectedAnimeId(anime.Aid);
                  }}
                >
                  More Info
                </Button>
              </CardBody>
            </Card>
          </Box>
        ))}
      </Grid>
      <Button onClick={handlePrevPage} disabled={page === 0}>
        Previous
      </Button>
      <Button
        onClick={handleNextPage}
        disabled={animes.length <= page * animesPerPage}
      >
        Next
      </Button>
      {isPopupOpen && (
        <Box
          position="fixed"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bg="rgba(0,0,0,0.5)"
          zIndex="9999"
        >
          <Box
            p="4"
            m="auto"
            maxW="100%"
            maxH="100%"
            overflowY="auto"
            borderRadius="md"
            alignItems="center"
            display="flex"
            justifyContent="center"
            onClick={() => {
              setIsPopupOpen(false);
              setSelectedAnimeId(null);
            }}
          >
            <AnimeCard id={selectedAnimeId} />
          </Box>
        </Box>
      )}
    </Stack>
  );
};

export default AllAnimes;
