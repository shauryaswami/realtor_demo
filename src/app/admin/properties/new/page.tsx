import PropertyForm from "@/components/admin/PropertyForm";

export default function NewPropertyPage() {
    return (
        <div className="space-y-10">
            <div>
                <h1 className="text-3xl font-poppins font-bold text-white mb-2">Add New Property</h1>
                <p className="text-white/50">Fill in the details to list a new premium property.</p>
            </div>

            <PropertyForm />
        </div>
    );
}
