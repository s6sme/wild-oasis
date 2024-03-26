import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://vqurnyjyomqbnmkfvdlp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZxdXJueWp5b21xYm5ta2Z2ZGxwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkyMTQ1MzcsImV4cCI6MjAyNDc5MDUzN30.YGSGwfkFLMQKDZaVxYyxnnsRfoJgioCAoLESOCuD4ec";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
