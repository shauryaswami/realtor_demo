"use client";

import { useState } from "react";
import { Trash2, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

interface DeletePropertyButtonProps {
    propertyId: string;
    propertyTitle: string;
}

export default function DeletePropertyButton({ propertyId, propertyTitle }: DeletePropertyButtonProps) {
    const [isDeleting, setIsDeleting] = useState(false);
    const router = useRouter();

    const handleDelete = async () => {
        if (!confirm(`Are you sure you want to delete "${propertyTitle}"? This action cannot be undone.`)) {
            return;
        }

        setIsDeleting(true);

        try {
            const res = await fetch(`/api/properties/${propertyId}`, {
                method: "DELETE",
            });

            if (res.ok) {
                router.refresh();
            } else {
                alert("Failed to delete property. Please try again.");
            }
        } catch (error) {
            console.error("Delete error:", error);
            alert("An error occurred while deleting the property.");
        } finally {
            setIsDeleting(false);
        }
    };

    return (
        <button
            onClick={handleDelete}
            disabled={isDeleting}
            className="p-2 text-white/30 hover:text-red-500 transition-colors disabled:opacity-50"
            title="Delete Property"
        >
            {isDeleting ? <Loader2 size={16} className="animate-spin" /> : <Trash2 size={16} />}
        </button>
    );
}
