// ============================================================
// FILL THESE IN with your own Supabase project details.
// Find them in: Supabase Dashboard -> Project Settings -> API
//   - "Project URL"      -> SUPABASE_URL
//   - "anon public" key  -> SUPABASE_ANON_KEY
// This anon key is safe to expose in frontend code -- it only
// grants the access allowed by the Row Level Security policies
// in schema.sql (public can view active products; everything
// else requires a logged-in staff account).
// ============================================================
const SUPABASE_URL = "https://rrqajzwypdxckvltwbnr.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_IpyTxqP5jUq734oRCgfPJg_pdcvKf2G";

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
