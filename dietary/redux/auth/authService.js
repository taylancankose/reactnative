import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Register user
const register = async (userData) => {
  const response = await axios.post("localhost:3000/auth/register", userData);

  if (response.data) {
    await AsyncStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const authService = {
  register,
};

export default authService;
