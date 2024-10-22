import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";

export const CircleInfoIcon = (props) => {
  return <Entypo name="info-with-circle" size={24} color="yellow" {...props} />;
};

export const BackArrowIcon = (props) => {
  return (
    <Ionicons name="arrow-back-circle" size={26} color="yellow" {...props} />
  );
};
