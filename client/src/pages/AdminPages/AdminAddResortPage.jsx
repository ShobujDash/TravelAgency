import { AdminSidebar } from "@/components/adminComponents/Layout/AdminSidebar";
import { Button } from "@/components/ui/button";
import { FileUpload } from "@/components/ui/file-upload";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { createHotel } from "@/services/HotelApiServices";
import instance from "@/utils/axios";
import { Label } from "@radix-ui/react-label";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";

const AdminAddResortPage = () => {
  const [uploadStatus, setUploadStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [files, setFiles] = useState([]);

  const [hotelData, setHotelData] = useState({
    name: "",
    place: "",
    title: "",
    description: "",
    star: "",
    roomNumber: "",
    pricePerRoom: "",
    discount: "",
    discountPrice: "",
    images: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHotelData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const handleFileUpload = async (selectedFiles) => {
    const validTypes = ["image/jpeg", "image/png", "image/jpg"];
    const validFiles = selectedFiles.filter((file) =>
      validTypes.includes(file.type)
    );
    setFiles(validFiles);

    setIsLoading(true);
    setUploadStatus("");

    try {
      const formData = new FormData();
      validFiles.forEach((file) => formData.append("files", file));

      const { data } = await instance.post("/api/media/bulk-upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (data.success) {
        setUploadStatus("Upload successful!");
        // Map the response to the `images` array format
        const uploadedImages = data.data.map((item) => ({
          imageUrl: item.secure_url,
          imageId: item.public_id,
        }));

        // Update hotelData with the uploaded images
        setHotelData((prev) => ({
          ...prev,
          images: uploadedImages,
        }));

      } else {
        setUploadStatus("Upload failed. Please try again.");
      }
    } catch (error) {
      setUploadStatus("Error uploading file.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    console.log(hotelData)

    try {
      const { data } = await await instance.post("/api/hotels", hotelData);
      console.log(data); // Log the entire response
      if (data?.success) {
        toast.success(data?.message);
        setHotelData({
          name: "",
          place: "",
          title: "",
          description: "",
          star: "",
          roomNumber: "",
          pricePerRoom: "",
          discount: "",
          discountPrice: "",
          images: "",
        });
      } else {
        toast.error(data?.message);
      }
    } catch (error) {
      console.error("Error creating hotel:", error); // Log the error
      toast.error("An error occurred while adding the hotel.");
    }


  };

  return (
    <AdminSidebar>
      <div className="h-screen overflow-y-scroll">
        <div className="my-3">
          <h1 className="text-white  text-4xl font-bold text-center ">Add Resort</h1>
        </div>

        <form className="p-4 " onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4 text-white">
            <LabelInputContainer>
              <Label htmlFor="name">Add Hotel Name</Label>
              <Input
                onChange={handleChange}
                name="name"
                placeholder="name"
                type="name"
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="place">Add Hotel Place</Label>
              <Input
                onChange={handleChange}
                name="place"
                placeholder="place"
                type="text"
              />
            </LabelInputContainer>
          </div>

          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4 text-white">
            <LabelInputContainer>
              <Label htmlFor="star">Add Start</Label>
              <Input
                onChange={handleChange}
                name="star"
                placeholder="5"
                type="number"
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="roomNumber">Add Room</Label>
              <Input
                onChange={handleChange}
                name="roomNumber"
                placeholder="10"
                type="number"
              />
            </LabelInputContainer>
          </div>

          <LabelInputContainer className="mb-4">
            <Label htmlFor="title" className="text-white">
              Title
            </Label>
            <Input
              onChange={handleChange}
              name="title"
              placeholder="title"
              type="text"
              className="text-white"
            />
          </LabelInputContainer>

          <LabelInputContainer className="mb-8">
            <Label htmlFor="description" className="text-white">
              Add Description
            </Label>
            <textarea
              onChange={handleChange}
              name="description"
              placeholder="description"
              type="text"
              className="bg-transparent border rounded-lg p-2 text-white"
            />
          </LabelInputContainer>

          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4 text-white">
            <LabelInputContainer>
              <Label htmlFor="star">Price Per Room</Label>
              <Input
                onChange={handleChange}
                name="pricePerRoom"
                placeholder="1000$"
                type="text"
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="discount">Discount</Label>
              <Input
                onChange={handleChange}
                name="discount"
                placeholder="40%"
                type="text"
              />
            </LabelInputContainer>
          </div>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4 text-white">
            <LabelInputContainer>
              <Label htmlFor="discountPrice">Discount Price</Label>
              <Input
                onChange={handleChange}
                name="discountPrice"
                placeholder="600$"
                type="text"
              />
            </LabelInputContainer>
            <LabelInputContainer></LabelInputContainer>
          </div>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4 text-white">
            <LabelInputContainer>
              <Label htmlFor="room">Mulfiple Image Upload</Label>
              <FileUpload onChange={handleFileUpload} />
              {isLoading && <p className="mt-2 text-blue-500">Uploading...</p>}
              {uploadStatus && (
                <p className="mt-2 text-blue-600 text-2xl">{uploadStatus}</p>
              )}
            </LabelInputContainer>
            <LabelInputContainer></LabelInputContainer>
          </div>

          <button
            className="bg-gradient-to-br border-none relative group/btn from-green dark:from-zinc-900 dark:to-zinc-900 to-blue-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="animate-spin" />
                Please wait
              </>
            ) : (
              "Add Resort"
            )}
          </button>
        </form>
      </div>
    </AdminSidebar>
  );
};

const LabelInputContainer = ({ children, className }) => (
  <div className={cn("flex flex-col space-y-2 w-full", className)}>
    {children}
  </div>
);

export default AdminAddResortPage;
