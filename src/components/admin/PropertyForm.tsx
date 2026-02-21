"use client";

import { useState } from "react";
import { useForm, useController } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import ImageUploader from "@/components/admin/ImageUploader";
import {
    Building2,
    MapPin,
    IndianRupee,
    Bed,
    Bath,
    Maximize,
    Tag,
    Image as ImageIcon,
    CheckCircle2,
    Loader2
} from "lucide-react";

const propertySchema = z.object({
    title: z.string().min(5, "Title must be at least 5 characters"),
    description: z.string().min(20, "Description must be at least 20 characters"),
    price: z.string().min(1, "Price is required"),
    location: z.string().min(1, "Location is required"),
    city: z.string().min(1, "City is required"),
    type: z.string().min(1, "Property type is required"),
    bhk: z.string().min(1, "BHK is required"),
    bedrooms: z.string().optional(),
    bathrooms: z.string().optional(),
    area: z.string().optional(),
    images: z.string().min(1, "Please upload at least one image"),
    features: z.string().min(1, "Please list some features (comma separated)"),
    isFeatured: z.boolean(),
    status: z.enum(["AVAILABLE", "SOLD", "RENTED"]),
});

type PropertyFormValues = z.infer<typeof propertySchema>;

interface PropertyFormProps {
    initialData?: any;
}

export default function PropertyForm({ initialData }: PropertyFormProps) {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<PropertyFormValues>({
        resolver: zodResolver(propertySchema),
        defaultValues: (initialData as PropertyFormValues) || {
            title: "",
            description: "",
            price: "",
            location: "",
            city: "",
            type: "Apartment",
            bhk: "3 BHK",
            images: "",
            features: "",
            status: "AVAILABLE",
            isFeatured: false,
        },
    });

    const { field: imagesField } = useController({ name: "images", control });

    const onSubmit = async (data: PropertyFormValues) => {
        setIsLoading(true);
        try {
            const url = initialData
                ? `/api/properties/${initialData.id}`
                : "/api/properties";
            const method = initialData ? "PUT" : "POST";

            const response = await fetch(url, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                router.push("/admin/properties");
                router.refresh();
            } else {
                alert("Failed to save property");
            }
        } catch (error) {
            console.error(error);
            alert("An error occurred");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-12 pb-20">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Left Column: Basic Info */}
                <div className="lg:col-span-2 space-y-8">
                    <div className="glass p-8 rounded-[2.5rem] space-y-6">
                        <h3 className="text-xl font-poppins font-bold text-white flex items-center gap-2">
                            <Building2 className="text-brand-gold" size={24} />
                            Basic Information
                        </h3>

                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-white/70 text-sm font-medium ml-1">Property Title</label>
                                <input
                                    {...register("title")}
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:border-brand-gold/50 outline-none transition-all"
                                    placeholder="e.g. Skyline Luxury Penthouse"
                                />
                                {errors.title && <p className="text-red-400 text-xs mt-1">{errors.title.message}</p>}
                            </div>

                            <div className="space-y-2">
                                <label className="text-white/70 text-sm font-medium ml-1">Description</label>
                                <textarea
                                    {...register("description")}
                                    rows={5}
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:border-brand-gold/50 outline-none transition-all resize-none"
                                    placeholder="Describe the property's unique selling points..."
                                />
                                {errors.description && <p className="text-red-400 text-xs mt-1">{errors.description.message}</p>}
                            </div>
                        </div>
                    </div>

                    <div className="glass p-8 rounded-[2.5rem] space-y-6">
                        <h3 className="text-xl font-poppins font-bold text-white flex items-center gap-2">
                            <MapPin className="text-brand-gold" size={24} />
                            Location Details
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-white/70 text-sm font-medium ml-1">Location / Locality</label>
                                <input
                                    {...register("location")}
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:border-brand-gold/50 outline-none transition-all"
                                    placeholder="e.g. Worli, South Mumbai"
                                />
                                {errors.location && <p className="text-red-400 text-xs mt-1">{errors.location.message}</p>}
                            </div>

                            <div className="space-y-2">
                                <label className="text-white/70 text-sm font-medium ml-1">City</label>
                                <select
                                    {...register("city")}
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:border-brand-gold/50 outline-none transition-all appearance-none"
                                >
                                    <option value="" className="bg-brand-blue">Select City</option>
                                    <option value="Delhi" className="bg-brand-blue">Delhi NCR</option>
                                    <option value="Mumbai" className="bg-brand-blue">Mumbai</option>
                                    <option value="Bangalore" className="bg-brand-blue">Bangalore</option>
                                    <option value="Hyderabad" className="bg-brand-blue">Hyderabad</option>
                                    <option value="Pune" className="bg-brand-blue">Pune</option>
                                </select>
                                {errors.city && <p className="text-red-400 text-xs mt-1">{errors.city.message}</p>}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Key Features & Stats */}
                <div className="space-y-8">
                    <div className="glass p-8 rounded-[2.5rem] space-y-6">
                        <h3 className="text-xl font-poppins font-bold text-white flex items-center gap-2">
                            <Tag className="text-brand-gold" size={24} />
                            Pricing & Type
                        </h3>

                        <div className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-white/70 text-sm font-medium ml-1">Price (e.g. ₹5.4 Cr)</label>
                                <div className="relative">
                                    <IndianRupee className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
                                    <input
                                        {...register("price")}
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 text-white focus:border-brand-gold/50 outline-none transition-all"
                                    />
                                </div>
                                {errors.price && <p className="text-red-400 text-xs mt-1">{errors.price.message}</p>}
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-white/70 text-sm font-medium ml-1">Type</label>
                                    <select
                                        {...register("type")}
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-4 text-white focus:border-brand-gold/50 outline-none transition-all appearance-none"
                                    >
                                        <option value="Apartment" className="bg-brand-blue">Apartment</option>
                                        <option value="Villa" className="bg-brand-blue">Villa</option>
                                        <option value="Penthouse" className="bg-brand-blue">Penthouse</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-white/70 text-sm font-medium ml-1">BHK</label>
                                    <select
                                        {...register("bhk")}
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-4 text-white focus:border-brand-gold/50 outline-none transition-all appearance-none"
                                    >
                                        <option value="1 BHK" className="bg-brand-blue">1 BHK</option>
                                        <option value="2 BHK" className="bg-brand-blue">2 BHK</option>
                                        <option value="3 BHK" className="bg-brand-blue">3 BHK</option>
                                        <option value="4 BHK" className="bg-brand-blue">4 BHK</option>
                                        <option value="5+ BHK" className="bg-brand-blue">5+ BHK</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="glass p-8 rounded-[2.5rem] space-y-6">
                        <h3 className="text-xl font-poppins font-bold text-white flex items-center gap-2">
                            <ImageIcon className="text-brand-gold" size={24} />
                            Media & Features
                        </h3>

                        <div className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-white/70 text-sm font-medium ml-1 flex items-center gap-2">
                                    <ImageIcon size={14} className="text-brand-gold" />
                                    Property Images
                                </label>
                                <ImageUploader
                                    value={imagesField.value}
                                    onChange={imagesField.onChange}
                                />
                                {errors.images && <p className="text-red-400 text-xs mt-1">{errors.images.message}</p>}
                            </div>

                            <div className="space-y-2">
                                <label className="text-white/70 text-sm font-medium ml-1">Features (comma separated)</label>
                                <input
                                    {...register("features")}
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:border-brand-gold/50 outline-none transition-all"
                                    placeholder="Pool, Gym, Sea View..."
                                />
                            </div>

                            <div className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/5">
                                <input
                                    type="checkbox"
                                    id="isFeatured"
                                    {...register("isFeatured")}
                                    className="w-5 h-5 rounded border-white/10 bg-transparent text-brand-gold focus:ring-brand-gold/50"
                                />
                                <label htmlFor="isFeatured" className="text-white font-medium cursor-pointer">Mark as Featured Property</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-end gap-6 items-center border-t border-white/10 pt-10">
                <Button
                    type="button"
                    variant="outline"
                    className="rounded-2xl px-10 h-14"
                    onClick={() => router.back()}
                >
                    Cancel
                </Button>
                <Button
                    type="submit"
                    variant="gold"
                    className="rounded-2xl px-12 h-14 font-bold text-lg min-w-[200px]"
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <Loader2 className="animate-spin mr-2" />
                    ) : (
                        <CheckCircle2 className="mr-2" size={20} />
                    )}
                    {initialData ? "Update Listing" : "Publish Listing"}
                </Button>
            </div>
        </form>
    );
}
