import { createClient } from "@supabase/supabase-js";
import "react-native-url-polyfill/auto";
import { SUPABASE_URL, SUPABASE_KEY } from "@env";

console.log("VARIABLES");
console.log(SUPABASE_URL);
console.log(SUPABASE_KEY);
const supabase = createClient(
  "https://rhrsjfyziatfvaarubks.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJocnNqZnl6aWF0ZnZhYXJ1YmtzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODUxNTI3MTIsImV4cCI6MjAwMDcyODcxMn0.Ppmp2bWABWef-iZsv7ezb_pMl3O_JLn13PcaCQQ8WW4"
);

export default supabase;
