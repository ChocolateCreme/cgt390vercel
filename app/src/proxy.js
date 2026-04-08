export { auth as proxy } from "@/auth"

export const config = {
  matcher: ["/add-profile", "/profile/:path*/edit"],
};