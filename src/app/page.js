
import GridPosts from "@/components/UI/GridPosts";
import { GET_ARTICLES } from "@/graphql/queries";
import Hero from "@/components/UI/Hero";
import backgroundImage from '../../public/bg.png';
import Slider from "@/components/UI/Slider";
import BottomHero from "@/components/UI/BottomHero";

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
          title: 'Les Meilleures Pratiques pour la Sécurité des Applications Web',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, libero in fringilla luctus, libero dolor luctus libero, euismod.',
          image: 'https://via.placeholder.com/300',
          date: '2021-08-10T00:00:00Z',
        },
        {
          id: 2,
          title: 'Conseils pour Optimiser les Performances de Votre Site Web',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, libero in fringilla luctus, libero dolor luctus libero, euismod.',
          image: 'https://via.placeholder.com/300',
          date: '2021-08-10T00:00:00Z',
        },
        {
          id: 3,
          title: "Les Avancées Récentes dans le Domaine de l'Intelligence Artificielle",
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, libero in fringilla luctus, libero dolor luctus libero, euismod.',
          image: 'https://via.placeholder.com/300',
          date: '2021-08-10T00:00:00Z',
        },
        {
          id: 4,
          title: 'Les Meilleures Pratiques pour la Sécurité des Applications Web',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, libero in fringilla luctus, libero dolor luctus libero, euismod.',
          image: 'https://via.placeholder.com/300',
          date: '2021-08-10T00:00:00Z',
        },
        {
          id: 5,
          title: 'Conseils pour Optimiser les Performances de Votre Site Web',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, libero in fringilla luctus, libero dolor luctus libero, euismod.',
          image: 'https://via.placeholder.com/300',
          date: '2021-08-10T00:00:00Z',
        },
        {
          id: 6,
          title: "Les Avancées Récentes dans le Domaine de l'Intelligence Artificielle",
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, libero in fringilla luctus, libero dolor luctus libero, euismod.',
          image: 'https://via.placeholder.com/300',
          date: '2021-08-10T00:00:00Z',
        }
      ]  
    }
  }

  return (
    // <div className="container">
    //   <TitlePage title="Accueil" />
    // </div>
    <div className="container" style={{height: "2000px"}}>
      <Hero
        subtitle="We talk about"
        title="Cloud computing"
        image={backgroundImage.src}
        buttonLink="/"
        buttonText="Discover"
      />
        {
           articles && <GridPosts articles={articles.data.getArticles} />
        }
      <BottomHero 
        buttonLink="/"
        buttonText="About us"
      />
      {/* <Slider /> */}
    </div>

  )
}