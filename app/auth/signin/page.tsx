import SigninPage from "@/components/SignIn";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/authOptions"; 
import { redirect } from "next/navigation";

export default async function signin() {
    const session = await getServerSession(authOptions);

    // If the user is already signed in, redirect to the dashboard
    if (session) {
        redirect('/dashboard');
    }

    return (
        <div>
            <SigninPage />
        </div>
    );
}
