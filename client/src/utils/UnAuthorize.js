export default function unauthorize(code) {
  if (code === 401) {

    // Clear Previous
    sessionStorage.clear();
    localStorage.clear();

    // Remember the last location
    let lastLocation = window.location;
    sessionStorage.setItem("lastLocation", lastLocation);

    window.location.href = "/login";
  } 
}