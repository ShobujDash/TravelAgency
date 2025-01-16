import instance from "@/utils/axios";

export const hotelBooking = async (formdata) => {
  try {
    const { data } = await instance.post(`/api/hotel-bookings`, formdata);
    return data;
  } catch (error) {
    throw error.response?.data || { message: "An error occurred" };
  }
};
export const getBookedHotelByUser = async (userId) => {
  try {
    const { data } = await instance.get(
      `/api/hotel-bookings/user/${userId}`
    );
    return data;
  } catch (error) {
    throw error.response?.data || { message: "An error occurred" };
  }
};
