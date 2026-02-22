import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

// Only initialize if we have the credentials, otherwise export a proxy/null
// This prevents the build from failing if env vars aren't set in Vercel yet
if (!supabaseUrl || !supabaseKey) {
    // console.warn("⚠️ Supabase environment variables are missing. Cloud storage will not work until NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are set.");
}

export const supabaseAdmin = createClient(
    supabaseUrl || "https://placeholder.supabase.co",
    supabaseKey || "placeholder",
    {
        auth: {
            persistSession: false,
        },
    }
);
