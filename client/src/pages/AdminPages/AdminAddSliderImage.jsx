import { AdminSidebar } from "@/components/adminComponents/Layout/AdminSidebar";
import { FileUpload } from "@/components/ui/file-upload";
import { cn } from "@/lib/utils";
import instance from "@/utils/axios";
import { Label } from "@radix-ui/react-label";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";

const AdminAddSliderImage = () => {
  const [uploadStatus, setUploadStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [files, setFiles] = useState([]);

  const [sliderImages, setSliderImages] = useState({
    images: "",
  });

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
        setSliderImages(() => ({
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(sliderImages);

    try {
      const { data } = await await instance.post("/api/sliders", sliderImages);
      console.log(data); // Log the entire response
      if (data?.success) {
        toast.success(data?.message);
        setSliderImages({
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
          <h1 className="text-white  text-4xl font-bold text-center ">
            Add Slider
          </h1>
        </div>

        <form className="p-4 " onSubmit={handleSubmit}>
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
              "Add Slider Image"
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

export default AdminAddSliderImage;
