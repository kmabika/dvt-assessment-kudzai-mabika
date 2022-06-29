// Billboard:

// ___________________________________________________________________

import React from "react";

// Theme + Styles
import Icon from "components/Icons";
import * as S from "./styles.scss";

// Shared
import { Box, Flex, Text, Heading } from "shared";

import theme from 'styles/theme';
// ___________________________________________________________________

type Props = {
  artist: ArtistDetailType;
};

const Billboard = ({ artist }: Props) => {
  return (
    <S.Billboard bg={theme.colors.primary} p={4}>
      <Flex className="inner">
        <Box>
          <Heading as="h2" mb={0} className="t--uppercase">
            {artist.name}
          </Heading>
        </Box>
        <Flex mt={[7, 0]} className={`stats show`}>
          <Flex flexDirection="column" flex={2}>
            <S.Telephone>
              <Text fontSize={"2rem"} className="t--uppercase">
                Fans
              </Text>

              <Text fontSize={3} fontWeight={500}>
                {artist.nb_fan.toLocaleString()}
              </Text>
            </S.Telephone>

            <Box mt={[4, 2, 4]} fontSize={"1rem"}>
              {artist.nb_album} Albums
            </Box>
          </Flex>
          <Box className="scroll-arrow">
            <Icon color="white" />
          </Box>
        </Flex>
      </Flex>
    </S.Billboard>
  );
};

export default Billboard;
