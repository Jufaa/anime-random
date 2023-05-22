import { Box, Button, Card, CardBody, Stack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { datos } from '../../datos';
import { AnimeDatos } from '../Types';

const SelectRandomAnime: React.FC = () => {
  const [randomAnime, setRandomAnime] = useState<AnimeDatos | null>(null);

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * datos.length);
    const anime = datos[randomIndex];
    setRandomAnime(anime);
  };

  return (
    <Stack alignItems="center" justifyContent="center">
      <Card borderRadius="xl" boxShadow="md" maxWidth={500} overflow="hidden">
        <Box>
          <CardBody alignItems="center" justifyContent="center">
            {randomAnime && (
              <>
                <Box
                  bgImage={`url(${randomAnime.ImageURL})`}
                  bgPosition="center"
                  bgRepeat="no-repeat"
                  bgSize="cover"
                  height={300}
                  position="relative"
                  width="100%"
                >
                  <Box
                    bg="rgba(0, 0, 0, 0.5)"
                    bottom={0}
                    color="white"
                    fontSize={24}
                    left={0}
                    padding={4}
                    position="absolute"
                    right={0}
                  >
                    {randomAnime.Name}
                  </Box>
                </Box>
                <Box padding={4}>
                  <Box>Año de lanzamiento: {randomAnime.Released}</Box>
                  <Box>Estado: {randomAnime.Status}</Box>
                  <Box maxWidth={450}>Trama: {randomAnime.Plot}</Box>
                  <Box>Tipo: {randomAnime.Type}</Box>
                  <Box>Géneros: {randomAnime.Genre.join(', ')}</Box>
                </Box>
              </>
            )}
          </CardBody>
        </Box>
      </Card>
      <Button onClick={handleClick} marginTop={4}>
        Generar anime aleatorio
      </Button>
    </Stack>
  );
};

export default SelectRandomAnime;
