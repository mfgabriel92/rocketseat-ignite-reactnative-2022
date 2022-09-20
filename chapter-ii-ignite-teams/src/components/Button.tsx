import { FontAwesome5 } from "@expo/vector-icons";
import { Button as NBButton, IButtonProps as NBIButtonProps, Text, Icon } from "native-base";

interface ButtonProps extends NBIButtonProps {
  icon: string;
  text: string;
  variant?: "green" | "red";
}

function Button({ icon, text, variant = "green", ...rest }: ButtonProps) {
  return (
    <NBButton
      width="full"
      height="16"
      backgroundColor={`${variant}.500`}
      borderRadius="8"
      leftIcon={<Icon as={FontAwesome5} name={icon} size="md" />}
      _pressed={{
        backgroundColor: `${variant}.700`,
      }}
      {...rest}
    >
      <Text color="white" fontWeight="bold" fontSize="md">
        {text}
      </Text>
    </NBButton>
  );
}

export { Button };
