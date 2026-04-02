import Link from "next/link";
import prisma from "@/app/lib/prisma";

export default async function ProfileDetailPage({ params }) {
  const { id } = params;
  const profile = await prisma.profiles.findUnique({
    where: { id: parseInt(id) },
  });

  if (!profile) {
    return <p>Profile not found.</p>;
  }

  return (
    <div>
      <h1>{profile.name}</h1>
      <p style={{textAlign: "center"}}>Title: {profile.title}</p>
      <p style={{textAlign: "center"}}>Email: {profile.email}</p>
      <figure style={{ display: "flex", justifyContent: "center" }}>
        <img src={profile.image_url} alt={profile.name} style={{ maxWidth: "100%", height: "auto" }} />
      </figure>

    </div>
  );
}