import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { useAuthContext } from "@/context/AuthContext";
import instance from "@/utils/axios";
import { app } from "@/utils/firebase";
import { AiFillGoogleCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button } from "./ui/button";

function OAuth() {
  const { user, setUser, setRefresher } = useAuthContext();
  const auth = getAuth(app);
  const navigate = useNavigate();

  const handleGoogleClick = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    const resultsFromGoogle = await signInWithPopup(auth, provider);
    try {
      const { data } = await instance.post("/api/user/google", {
        name: resultsFromGoogle.user.displayName,
        email: resultsFromGoogle.user.email,
        googlePhotoUrl: resultsFromGoogle.user.photoURL,
      });
      if (data?.success) {
        toast.success("Login Successfull.");
        sessionStorage.setItem("login", "1");
        setUser(data?.user);
        if (data?.user?.isAdmin) {
          navigate("/admin");
        } else {
          navigate("/");
        }
      } else {
        toast.error(data?.message);
      }
    } catch (error) {
      toast.error("ত্রুটি। আবার চেষ্টা করুন।");
      console.log(error);
    }
  };

  return (
    <Button
      onClick={handleGoogleClick}
      type="button"
      // gradientDuoTone="pinkToOrange"
      variant="outline"
    >
      <AiFillGoogleCircle className="w-6 h-6 mr-2 text-lg text-blue-800" />
      Continue with google
    </Button>
  );
}

export default OAuth;
