import {
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions
} from "react-native";
import React, { useState } from "react";
import ImageIcon from "../../assets/shopping_cart_checkout.png";
import CustomInput from "../shared/CustomInput";
import CustomButton from "../shared/CustomButton";
import styles from "../Styles";
import { useNavigation } from "@react-navigation/native";

const ForgotPassword = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const { height } = useWindowDimensions();

  const onConfirm = () => {
    console.warn("Sending Link");

    alert("Your Password has been reset.");
    navigation.navigate("Sing In");
  };

  const onHandleBackSingIn = () => {
    navigation.navigate("Sing In");
  };

  return (
    <View style={[{ backgroundColor: "#CBE7FC", flex: 1 }, styles.flex1Center]}>
      <View style={{ height: 60 }}></View>
      <Text style={styles.headingText}>Reset Password</Text>
      <CustomInput
        placeholder="User Name"
        value={username}
        setValue={setUsername}
      />
      <CustomInput placeholder="Email" value={email} setValue={setEmail} />
      <View style={{ height: 60 }}></View>
      <CustomButton text="Submit" onPress={onConfirm} />
      <CustomButton text="< Back to Sign In" onPress={onHandleBackSingIn} />
    </View>
  );
};

export default ForgotPassword;
