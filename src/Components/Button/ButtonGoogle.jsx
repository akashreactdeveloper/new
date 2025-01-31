import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import baseurl from "../../Api/baseURL";
import Cookies from "js-cookie";
import store from "../../redux/store";
import { setLoading } from "../../redux/slice/screenLoadingSlice";

const ButtonGoogle = () => {
  const handleSuccess = async (response) => {
    try {
      store.dispatch(setLoading(true));

      if (!response.credential) {
        alert("Invalid Google credential.");
        store.dispatch(setLoading(false));
        return;
      }

      const cacheBuster = `cacheBust=${new Date().getTime()}`;
      const apiUrl = 'https://us-central1-gatepaxai-dev.cloudfunctions.net/frontend_auth/google';

      const res = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: response.credential }),
        cache: "no-store", // Force bypass of browser cache
      });

      if (res.ok) {
        const data = await res.json();
        // console.log(data.sessionToken); // main
        // console.log(response);
        Cookies.set("gatepaxUserSession", data.sessionToken, { expires: 7 });

        if (data.message === "newUser") {
          window.location.href = "/form";
        } else {
          window.location.href = "/accounts";
        }
      } else {
        const errorMessage = await res.text();
        alert("Login failed: " + errorMessage);
      }
    } catch (error) {
      console.error("Error during Google Login:", error.message);
      alert("An error occurred. Please try again.");
    } finally {
      store.dispatch(setLoading(false));
    }
  };

  const handleError = () => {
    alert("Google Login Failed");
  };

  return (
    <div className="google-button-wrapper">
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={handleError}
        shape="square"
        width="376px"
        size="large"
      />
    </div>
  );
};

export default ButtonGoogle;
