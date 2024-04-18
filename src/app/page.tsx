import { GET_ARTICLES } from "@/graphql/queries";
import Link from "next/link";
import Hero from "@/components/UI/Hero";
import Button from "@/components/UI/Button";
import Slider from "@/components/UI/Slider";
import TitleMain from "@/components/UI/TitleMain";
import SubTitle from "@/components/UI/SubTitle";
import GridPosts from "@/components/UI/GridPosts";
import BackgroundHero from "../../public/background_hero.jpg";
import Image from "../../public/background_hero.jpg";
import styles from "./index.module.scss";

interface Iprops {
  searchParams: {
    limit: string;
  }
}

export default async function Home({ searchParams } : Iprops) {

  // const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/graphql`, {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({
  //     query: GET_ARTICLES,
  //     variables: {
  //       filters: {
  //         limit: Number(searchParams.limit) || 6
  //       }
  //     }
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
  };

  console.log(Image);

  const images = [Image.src, Image.src, Image.src, Image.src]
  
  const limit = Number(searchParams.limit) || 6;

  return (
    <>
      <Hero
        subtitle="We talk about"
        title="Cloud computing"
        image={BackgroundHero.src}
        buttonLink="/"
        buttonText="Discover"
      />
      <div className="container">
        <div id="grid">
          <div className={styles.title__content}>
            <SubTitle text="Our latest news" color="primary"/>
            <Link className="btn btn__primary" href="/blog">
              View more
            </Link>
          </div>
          {
            articles && <GridPosts articles={articles.data.getArticles} />
          }
        </div>
        <div className={styles.loadmore}>
          <Link className="btn btn__primary" href={`/?limit=${limit + 6}#grid`}>
            Load more
          </Link>
        </div>
      </div>
      <div className="container">
        <section className={styles.about__wrapper}>
          <div className={styles.left__part}>
            <TitleMain
              withUnderline={true}
              title="Discover the best blog ever" color="primary"
            />
            <a className="btn btn__primary" href="#">About us</a>
          </div>
          <div className={styles.right__part}>
            <Slider
              images={images}
              width={330}
            />
          </div>
        </section>
      </div>
      <div className="container">
        <section className={styles.video__banner}>
          <div className={styles.content}>
            <TitleMain title="Subcribe to our newsletter" color="white" />
            <Button color="primary" text="Subcribe"/>
          </div>
          <div className={styles.overlay}></div>
          <video autoPlay loop muted>
            <source src="/test.mp4"/>
          </video>
        </section>
      </div>
    </>
  )
}