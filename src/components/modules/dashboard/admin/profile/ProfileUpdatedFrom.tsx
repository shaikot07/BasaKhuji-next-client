// --------------------
"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import NMImageUploader from "@/components/ui/core/NMImageUploader";
import ImagePreviewer from "@/components/ui/core/NMImageUploader/ImagePreviewer";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { useUser } from "@/context/UserContext";
import { updateRentalHouse } from "@/services/Lanload";

// Cloudinary Credentials
const CLOUD_NAME = "dy0b6hvog"; // cloudinary cloud khola ache my gm -personal
const UPLOAD_PRESET = "bikeshop";

export default function ProfileUpdatedFrom({ rentalHouse }: any) {
    const { user } = useUser();
    console.log("iam crunt user from profile up ", user);
  const [imageFiles, setImageFiles] = useState<File[] | []>([]);
  //   const [imagePreview, setImagePreview] = useState<string[] | []>([]);
  const [imagePreview, setImagePreview] = useState<string[] | []>(
    rentalHouse?.images || []
  );
 

  const router = useRouter();

  const form = useForm({
    defaultValues: {
      location: rentalHouse?.location || "",
      description: rentalHouse?.description || "",
      bath: rentalHouse?.bath || 0,
      amenities: rentalHouse?.amenities || "",
      rentAmount: rentalHouse?.rentAmount || 0,
      bedrooms: rentalHouse?.bedrooms || 0,
    },
  });

  const {
    formState: { isSubmitting },
  } = form;

  // console.log(specFields);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    let imageUrls = imagePreview; // Default to existing images

    if (imageFiles.length > 0) {
      // Upload new images if user added them
      const uploadPreset = UPLOAD_PRESET;
      const cloudinaryUrl = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

      try {
        const imageUploadPromises = imageFiles.map(async (file) => {
          const formData = new FormData();
          formData.append("file", file);
          formData.append("upload_preset", uploadPreset);

          const res = await fetch(cloudinaryUrl, {
            method: "POST",
            body: formData,
          });

          const result = await res.json();
          return result.secure_url; // Get uploaded image URL
        });

        imageUrls = await Promise.all(imageUploadPromises); // Update images array
      } catch (err: any) {
        console.error("Image Upload Error:", err);
        toast.error("Failed to upload images.");
        return;
      }
    }

    // Prepare final data to send
    const modifiedData = {
      ...data,
      rentAmount: parseFloat(data.rentAmount),
      bedrooms: parseInt(data.bedrooms),
      images: imageUrls, // Use existing or uploaded images
      landlordId: user?.userId,
    };

    console.log("Final updated data sent to backend:", modifiedData);

    // Send updated rental house data
    try {
      const res = await updateRentalHouse(modifiedData, rentalHouse._id);

      if (res.success) {
        toast.success(res.message);
        form.reset();
        setImageFiles([]);
        router.push("/landlord/dashboard/allRentalHousrLanload");
      } else {
        toast.error(res.message);
      }
    } catch (err) {
      console.error("Update Rental House Error:", err);
      toast.error("Failed to update rental house.");
    }
  };

  return (
    <div className="border-2 border-gray-300 rounded-xl flex-grow max-w-2xl p-5 ">
      <div className="flex items-center space-x-4 mb-5 ">
       

        <h1 className="text-xl font-bold">Updated User Info </h1>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex justify-between items-center border-t border-b py-3 my-5">
            <p className="text-primary font-bold text-xl">Basic Information</p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="rentAmount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Rent Amount</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-1 my-2 gap-4 md:grid-cols-2">
            <FormField
              control={form.control}
              name="bedrooms"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Number of Bedroom</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="bath"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Number of Bath room</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
           
          </div>

          
          {/* ---------------for image------   */}
          <div>
            <div className="flex justify-between items-center border-t border-b py-3 my-5">
              <p className="text-primary font-bold text-xl">Images</p>
            </div>
            <div className="flex gap-4 ">
              <NMImageUploader
                setImageFiles={setImageFiles}
                setImagePreview={setImagePreview}
                label="Upload Image"
                className="w-fit mt-0"
              />
              <ImagePreviewer
                className="flex flex-wrap gap-4"
                setImageFiles={setImageFiles}
                imagePreview={imagePreview}
                setImagePreview={setImagePreview}
              />
            </div>
          </div>

          <Button type="submit" className="mt-5 w-full" disabled={isSubmitting}>
            {isSubmitting
              ? "updating....."
              : "Updated user Info"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
