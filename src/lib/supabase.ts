import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/integrations/supabase/types';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || "https://ghlelrcyvqxqttsaeuey.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdobGVscmN5dnF4cXR0c2FldWV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ1NTU1ODksImV4cCI6MjA3MDEzMTU4OX0.6v0fX2D04chQcYFSeZeXZWpFzNMFOKDjVSXmXyWtB9g";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});