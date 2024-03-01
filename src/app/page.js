import TitlePage from "@/components/UI/TitlePage";
import GridPosts from "@/components/UI/GridPosts";
import { GET_ARTICLES } from "@/graphql/queries";

export default async function Home() {

  // const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/graphql`, {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({
  //     query: GET_ARTICLES
  //   }),
  // });

  // const articles = await res.json();

  const articles = {
    data: {
      getArticles: [
        {
          id: 1,
          title: 'Article 1',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, libero in fringilla luctus, libero dolor luctus libero, euismod.',
          image: 'https://via.placeholder.com/300',
          date: '2021-08-10T00:00:00Z',
        },
        {
          id: 1,
          title: 'Article 1',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, libero in fringilla luctus, libero dolor luctus libero, euismod.',
          image: 'https://via.placeholder.com/300',
          date: '2021-08-10T00:00:00Z',
        },
        {
          id: 1,
          title: 'Article 1',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, libero in fringilla luctus, libero dolor luctus libero, euismod.',
          image: 'https://via.placeholder.com/300',
          date: '2021-08-10T00:00:00Z',
        },
        {
          id: 1,
          title: 'Article 1',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, libero in fringilla luctus, libero dolor luctus libero, euismod.',
          image: 'https://via.placeholder.com/300',
          date: '2021-08-10T00:00:00Z',
        },
        {
          id: 1,
          title: 'Article 1',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, libero in fringilla luctus, libero dolor luctus libero, euismod.',
          image: 'https://via.placeholder.com/300',
          date: '2021-08-10T00:00:00Z',
        },
        {
          id: 1,
          title: 'Article 1',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, libero in fringilla luctus, libero dolor luctus libero, euismod.',
          image: 'https://via.placeholder.com/300',
          date: '2021-08-10T00:00:00Z',
        },
        {
          id: 1,
          title: 'Article 1',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, libero in fringilla luctus, libero dolor luctus libero, euismod.',
          image: 'https://via.placeholder.com/300',
          date: '2021-08-10T00:00:00Z',
        },
        {
          id: 1,
          title: 'Article 1',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, libero in fringilla luctus, libero dolor luctus libero, euismod.',
          image: 'https://via.placeholder.com/300',
          date: '2021-08-10T00:00:00Z',
        },
      ]  
    }
  }

  return (
    <div className="container">
      <TitlePage title="Accueil" />
      {
        articles && <GridPosts articles={articles.data.getArticles} />
      }
    </div>
  )
}