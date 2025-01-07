import instance from "@/utils/axios";

export const registerUser = async (formData) => {
  try {
    const { data } = await instance.post("/api/user/register", formData);
    return data;
  } catch (error) {
    throw error.response?.data || { message: "An error occurred" };
  }
};

export const loginUser = async (formData) => {
  try {
    const { data } = await instance.post("/api/user/login", formData);
    return data;
  } catch (error) {
    throw error.response?.data || { message: "An error occurred" };
  }
};

export const userProfile = async () => {
  try {
    const { data } = await instance.get("/api/user/profile");
    return data;
  } catch (error) {
    throw error.response?.data || { message: "An error occurred" };
  }
};

export const logout = async () => {
  try {
    const { data } = await instance.post("/api/user/logout");
    return data;
  } catch (error) {
    throw error.response?.data || { message: "An error occurred" };
  }
};


