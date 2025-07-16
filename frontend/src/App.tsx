import { AuthenticateWithRedirectCallback, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import {Button} from "./components/ui/button";

import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import AuthCallbackPage from "./pages/auth-callback/AuthCallbackPage";
import { axiosInstance } from "./lib/axios";

function App() {
  return (
    // <header>
    //   <SignedOut>
    //     <SignInButton> 
    //       <Button>Sign In</Button>
    //     </SignInButton>
    //   </SignedOut>
    //   <SignedIn>
    //     <UserButton />
    //   </SignedIn>
    // </header>
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path ='/sso-callback' element = { <AuthenticateWithRedirectCallback signUpForceRedirectUrl = {"/auth-callback"}/> }/>
        <Route path='/auth-callback' element={<AuthCallbackPage />} />
      </Routes>
    </>
  );
}

export default App
