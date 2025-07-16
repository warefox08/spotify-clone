import { Card, CardContent } from "@/components/ui/card"
import { Loader } from "lucide-react"
import { useEffect, useRef } from "react"
import { useUser } from "@clerk/clerk-react"
import { axiosInstance } from "@/lib/axios"
import { useNavigate } from "react-router-dom"

const AuthCallbackPage = () => {
    const {isLoaded, user} = useUser();
    const navigate = useNavigate();
    //optional optimiztion
    const syncAttempt = useRef(false);

    useEffect(() => {
        const syncUser = async () => {
            if(!isLoaded || !user || syncAttempt.current) return;
            try {
                await axiosInstance.post("/auth-callback", {
                    id: user.id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    imageUrl: user.imageUrl
                } );
                syncAttempt.current = true;

            } catch (error) {
                console.log("ERror in authCallbcak", error);
            }
            finally {
                navigate("/")
            }
        };

        syncUser();
    }, [isLoaded, user, navigate]);

    return (
        <div className="h-screen w-full bg-black flex items-center justify-center"> 
            <Card className="w-[90%] max-w-md bg-zinc-900 border-zinc-800">
                <CardContent className="flex flex-col items-center gap-4 pt-6">
                    <Loader className="size-6 text-emerald-500 animate-spin"/>
                    <h3 className="text-zinc-500 text-xl font-bold">Logging you in</h3>
                    <p className="text-zinc-400 text-sm"> Redirecting.... </p>
                </CardContent>
            </Card>
        </div>
    )
}

export default AuthCallbackPage