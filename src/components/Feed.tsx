import React from "react";
import { Box, Image, Heading, Text, Icon } from "native-base";
import {Feather} from "@expo/vector-icons";

type Props = {
  data: Feed;
};

interface Feed {
  id: string;
  fullName: string;
  timeStamp: string;
  recentText: string;
  avatarUrl: string;
}

export function Feed({ data }: Props) {
  return (
    <Box flex={1} flexDirection="column" bgColor="#fff" p={2} borderRadius={4}>
      <Box>
        <Image
          source={{ uri: data.avatarUrl }}
          alt="Post feed"
          w="100%"
          h={120}
        />
      </Box>
      <Box marginY={3}>
        <Heading size="sm" paddingBottom={1}>
          Learning native base
        </Heading>
        <Text numberOfLines={2}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English
        </Text>
      </Box>
      <Box
        marginY={1}
        flexDirection="row"
        backgroundColor="rgba(226, 232, 240, 0.4)"
        alignSelf="flex-start"
        borderRadius={6}
        paddingX={3}
        paddingY={1}
      >
        <Icon
          as={Feather}
          name="user"
          size={5}
          color="#000"
          marginRight={2}
        />
        <Text numberOfLines={1}>
          {data.fullName}
        </Text>
      </Box>
    </Box>
  );
}
