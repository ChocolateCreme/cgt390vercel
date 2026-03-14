import Nav from "./nav.js";
import "./styles.css"

async function fetchTitles(){
  const response = await fetch(
    "https://web.ics.purdue.edu/~zong6/profile-app/get-titles.php",
    {
      next: {revalidate:60},
    },
  );
  const titles = await response.json();
  return titles ? titles.titles : [];
}

async function getData(title, search){
  const response = await fetch(
    "https://web.ics.purdue.edu/~zong6/profile-app/fetch-data-with-filter.php?title=${title}&name=${search}&limit=1000",
    {
      next: {revalidate:60},
    },
  );
  const profiles = await response.json();
  return profiles ? profiles.profile : [];
}

export default function Home() {
  return (
    <>
    <Nav/>
    </>
  );
}
