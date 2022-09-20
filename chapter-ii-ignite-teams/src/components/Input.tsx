import { FontAwesome5 } from "@expo/vector-icons";
import { Input as NBInput, IInputProps as NBIInputProps, Icon, IconButton } from "native-base";

interface InputProps extends NBIInputProps {
  placeholder: string;
  rightIcon?: string;
  onPress?: () => void;
}

function Input({ placeholder, rightIcon, onPress, ...rest }: InputProps) {
  return (
    <NBInput
      backgroundColor="gray.700"
      borderColor="gray.400"
      borderRadius="8"
      height="16"
      placeholder={placeholder}
      placeholderTextColor="gray.300"
      color="gray.100"
      fontSize="md"
      rightElement={
        rightIcon ? (
          <IconButton
            icon={<Icon as={FontAwesome5} name={rightIcon} color="green.500" />}
            onPress={onPress}
          />
        ) : (
          <></>
        )
      }
      _focus={{
        borderColor: "green.700",
      }}
      {...rest}
    />
  );
}

export { Input };
