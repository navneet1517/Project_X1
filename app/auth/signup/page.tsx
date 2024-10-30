import SignupPage from "@/components/SignUp";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/authOptions"; 
import { redirect } from "next/navigation";

export default async function signup() {
  // Get the session from the server
  const session = await getServerSession(authOptions);

  // If the user is already authenticated, redirect them to the dashboard
  if (session) {
    redirect("/dashboard");
    return null; // Return null to prevent rendering the signup page
  }

  // If the user is not authenticated, show the signup page
  return (
    <div>
      <SignupPage />
    </div>
  );
}
