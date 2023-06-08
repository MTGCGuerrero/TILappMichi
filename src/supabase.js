import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://cpxbqtwsynapdzrjqfgz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNweGJxdHdzeW5hcGR6cmpxZmd6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODU4ODc0MzAsImV4cCI6MjAwMTQ2MzQzMH0.Vs4Eni9GRJXbBhyWXJfH1lHuP4evj3aH35xNjM1X7Ww";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
