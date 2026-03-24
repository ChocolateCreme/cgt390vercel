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

export async function GET() {
    const profiles = [
        {id: 1, name: "Ava Lee", major: "CS", year: 2, gpa: 3.6},
        {id: 2, name: "Ben Park", major: "CGT", year: 3, gpa: 3.2},
    ]
    return Response.json(profiles)
}

export async function POST (request) {
    const body = await request.json();
    const {name, major, year, gpa} = body;
    const newUser = {id: Date.now()};

    if (!name) {
        return Response.json(
            {error: 'Enter a name'},
            {status: 400}
        )
    }

    if (!major) {
        return Response.json(
            {error: 'Enter a major'},
            {status: 400}
        )
    }

    if (!year) {
        return Response.json(
            {error: 'Enter a year'},
            {status: 400}
        )
    }

    if (!gpa) {
        return Response.json(
            {error: 'Enter a gpa'},
            {status: 400}
        )
    }
    
    return Response.json(
        {message: 'Post Created!', data: {name, major, year, gpa}},
        {status: 201}
    )
}

export async function DELETE (request, {params}) {
    const {id} = await params
    return Response.json(
        {message: 'Post Deleted'},
        {status: 404}
    )
}

export async function PUT(request, { params }) {
    const { id } = await params
    return Response.json({ id })
}

export default function Home() {
  return (
    <>
    <Nav/>
    </>
  );
}
