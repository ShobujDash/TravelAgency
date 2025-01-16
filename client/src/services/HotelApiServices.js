import instance from "@/utils/axios";

export const createHotel = async (data) => {
  try {
    const { data } = await instance.post("/api/hotels", data);
    return data;
  } catch (error) {
    throw error.response?.data || { message: "An error occurred" };
  }
};
export const getAllHotel = async () => {
  try {
    const { data } = await instance.get("/api/hotels");
    return data;
  } catch (error) {
    throw error.response?.data || { message: "An error occurred" };
  }
};
export const getHotelById = async (id) => {
  try {
    const { data } = await instance.get(`/api/hotels/${id}`);
    return data;
  } catch (error) {
    throw error.response?.data || { message: "An error occurred" };
  }
};
