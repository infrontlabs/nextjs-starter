import { ClerkLoaded, ClerkLoading, SignUp } from "@clerk/nextjs";
import { Loader2Icon, Wallet2Icon } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="h-full lg:flex flex-col items-center justify-center px4">
        <div className="text-center space-y-4 pt-16">
          <div className="flex items-center justify-center mt-8">
            <ClerkLoaded>
              <SignUp path="/sign-up" />
            </ClerkLoaded>
            <ClerkLoading>
              <div className="h-96 flex items-center justify-center">
                <Loader2Icon className="w-8 h-8 animate-spin text-muted-foreground" />
              </div>
            </ClerkLoading>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-400">
        <Wallet2Icon className="w-32 h-32 text-white" />
      </div>
    </div>
  );
}
