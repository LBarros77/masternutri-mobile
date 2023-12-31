import { StyleSheet } from "react-native";
import { colors } from "../../../assets/theme/colors";
import { textVariants } from "../../../assets/theme/textVariants";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 64,
    borderRadius: 7,
    padding: 16,

    backgroundColor: colors.GRAY_200,

    color: colors.GRAY_500,
    fontSize: textVariants.size.md,
  }
});