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
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import NMImageUploader from "@/components/ui/core/NMImageUploader";
import ImagePreviewer from "@/components/ui/core/NMImageUploader/ImagePreviewer";
import Logo from "@/assets/svgs/Logo";
// import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { addRentalHouse } from "@/services/Lanload";
import { useUser } from "@/context/UserContext";

// Cloudinary Credentials
const CLOUD_NAME = "dy0b6hvog"; // cloudinary cloud khola ache my gm -personal
const UPLOAD_PRESET = "bikeshop";

export default function UpdatedRentalHouseForm({ rentalHouse }: any) {
  const [imageFiles, setImageFiles] = useState<File[] | []>([]);
//   const [imagePreview, setImagePreview] = useState<string[] | []>([]);
const [imagePreview, setImagePreview] = useState<string[] | []>(
    rentalHouse?.images || []
  );
  const { user } = useUser();
  console.log("iam crunt user ", user);

  // const router = useRouter();

  const form = useForm({
    defaultValues: {
      location:rentalHouse?.location || "",
      description:rentalHouse?.description || "",
      bath:rentalHouse?.bath || 0,
      amenities:rentalHouse?.amenities || "",
      rentAmount:rentalHouse?.rentAmount || 0,
      bedrooms:rentalHouse?.bedrooms|| 0,
    },
  });

  const {
    formState: { isSubmitting },
  } = form;

  // console.log(specFields);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    if (imageFiles.length === 0) {
      toast.error("Please upload at least one image.");
      return;
    }

    const uploadPreset = UPLOAD_PRESET; // Replace with your Cloudinary upload preset
    const cloudinaryUrl = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`; // Replace with your Cloudinary cloud name

    try {
      // Upload all images to Cloudinary
      const imageUploadPromises = imageFiles.map(async (file) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", uploadPreset);

        const res = await fetch(cloudinaryUrl, {
          method: "POST",
          body: formData,
        });

        const result = await res.json();
        return result.secure_url; // Get the uploaded image URL as an array
      });

      const imageUrls = await Promise.all(imageUploadPromises); // Wait for all uploads to finish

      const modifiedData = {
        ...data,
        rentAmount: parseFloat(data.rentAmount),
        bedrooms: parseInt(data.bedrooms),
        images: imageUrls, // Add uploaded image URLs
        landlordId: user?.userId, // Example ID, replace with actual data
      };

      console.log("final data send in the backend:", modifiedData);

      // Send the data to the backend as a JSON object
      const res = await addRentalHouse(modifiedData); // Send modifiedData directly as JSON

      if (res.success) {
        toast.success(res.message);
        form.reset(); // Reset the form after successful submission
        setImageFiles([]);
        // router.push("/user/landlord/rental-houses");
      } else {
        toast.error(res.message);
      }
    } catch (err: any) {
      console.error("Image Upload Error:", err);
      toast.error("Failed to upload images.");
    }
  };

  return (
    <div className="border-2 border-gray-300 rounded-xl flex-grow max-w-2xl p-5 ">
      <div className="flex items-center space-x-4 mb-5 ">
        <Logo />

        <h1 className="text-xl font-bold">Add New Rental House</h1>
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
            <FormField
              control={form.control}
              name="amenities"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Amenities</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="my-5">
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      className="h-36 resize-none"
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

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
            {isSubmitting ? "Adding Rental house....." : "Rental house"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
