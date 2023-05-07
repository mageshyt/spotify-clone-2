// import axios from "axios";
// import { useEffect, useState } from "react";

// export const UseUser = (token) => {
//   console.log("user 😀", user);
//   return user;
// };
// useEffect(() => {
//   console.log("UseUser useEffect");
//   if (token.length) {
//     axios("https://api.spotify.com/v1/me", {
//       method: "GET",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//         Authorization: "Bearer" + token,
//       },
//     })
//       .then((response) => {
//         console.log(response);
//       })
//       .catch((error) => {
//         console.log("error", error.message);
//       });
//   }
//   console.log("UseUser useEffect End");
// }, []);
