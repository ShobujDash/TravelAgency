import instance from "@/utils/axios";

export const getAllSlider = async () => {
  try {
    const { data } =  await instance.get("/api/sliders");
    return data;
  } catch (error) {
    throw error.response?.data || { message: "An error occurred" };
  }
};
