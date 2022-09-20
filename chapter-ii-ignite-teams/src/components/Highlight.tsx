import { Center, Heading, Text } from "native-base";

interface HighlightProps {
  title: string;
  subtitle: string;
}

function Highlight({ title, subtitle }: HighlightProps) {
  return (
    <Center>
      <Heading color="white" fontSize="3xl">
        {title}
      </Heading>
      <Text color="gray.200" fontWeight="normal">
        {subtitle}
      </Text>
    </Center>
  );
}

export { Highlight };
