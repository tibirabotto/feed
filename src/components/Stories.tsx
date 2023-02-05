import React from 'react';
import { Box, Image } from 'native-base';

type Props = {
  data: Story;
}

interface Story {
  id: string
  fullName: string
  timeStamp: string
  recentText: string
  avatarUrl: string
}

export function Stories({ data } : Props) {
  return (
    <Box flex={1} marginBottom={4} p={2} borderRadius={4}>
      <Box
        p="0.5"
        borderRadius={32}
        bg={{
          linearGradient: {
            colors: ["lightBlue.300", "violet.800"]
          }
        }}
      >
      <Image
        source={{ uri: data.avatarUrl }}
        size={16}
        borderRadius={32}
        alt="Avatar url "
      />
      </Box>
    </Box>
  );
}
