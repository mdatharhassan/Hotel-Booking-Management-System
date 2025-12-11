import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://nzitdxkujwsaernacugl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im56aXRkeGt1andzYWVybmFjdWdsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMwMjM1NzksImV4cCI6MjA1ODU5OTU3OX0.lQomW6zOadYcHjELCfd7GIwmAqcKg5zIe0HwL4Uq7G8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
