'use client';
import TitlePage from "@/components/UI/TitlePage";
import GridPosts from "@/components/UI/GridPosts";
import { GET_ARTICLES } from "@/graphql/queries";
import Button from '@/components/UI/Button'
import Image from "next/image";
import style from './page.module.scss'
import img from '@/assets/image.png'
import Slider from "@/components/UI/Slider";
import { useEffect } from "react";
import { Articles } from "@/interfaces"

export default function Home() {

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
          title: 'Les Meilleures Pratiques pour la Sécurité des Applications Web dsdsdsdsddsdsd',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, libero in fringilla luctus, libero dolor luctus libero, euismod.',
          image: 'https://via.placeholder.com/300',
          date: '2021-08-10T00:00:00Z',
        },
        {
          id: 2,
          title: 'Article 2',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, libero in fringilla luctus, libero dolor luctus libero, euismod.',
          image: 'https://via.placeholder.com/300',
          date: '2021-08-10T00:00:00Z',
        },
        {
          id: 3,
          title: 'Article 3',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, libero in fringilla luctus, libero dolor luctus libero, euismod.',
          image: 'https://via.placeholder.com/300',
          date: '2021-08-10T00:00:00Z',
        },
        {
          id: 4,
          title: 'Article 4',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, libero in fringilla luctus, libero dolor luctus libero, euismod.',
          image: 'https://via.placeholder.com/300',
          date: '2021-08-10T00:00:00Z',
        },
        {
          id: 5,
          title: 'Article 5',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, libero in fringilla luctus, libero dolor luctus libero, euismod.',
          image: 'https://via.placeholder.com/300',
          date: '2021-08-10T00:00:00Z',
        },
        {
          id: 6,
          title: 'Article 6',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, libero in fringilla luctus, libero dolor luctus libero, euismod.',
          image: 'https://via.placeholder.com/300',
          date: '2021-08-10T00:00:00Z',
        },
        {
          id: 7,
          title: 'Article 7',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, libero in fringilla luctus, libero dolor luctus libero, euismod.',
          image: 'https://via.placeholder.com/300',
          date: '2021-08-10T00:00:00Z',
        },
        {
          id: 8,
          title: 'Article 8',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, libero in fringilla luctus, libero dolor luctus libero, euismod.',
          image: 'https://via.placeholder.com/300',
          date: '2021-08-10T00:00:00Z',
        },
      ]  
    }
  }

  return (
    <>
      <Image className={`${style.img}`} src={img} alt="Cloud Computing"/>
      <div className={`${style.hero}`}>
        <a>we talk about</a>
        <TitlePage title="Cloud Computing" />
        <Button text={'Discover'}/>
      </div>

      <div className={`${style.container}`}>
        <div className={`${style.second}`}>

          {/* on utilise le composant GridPosts */}
          {
            articles && <GridPosts articles={articles.data.getArticles}/>
          }
        </div>

        <div className={`${style.third}`}>
          <video className={`${style.videoHero}`} autoPlay muted loop playsinline>
            <source src="/test.mp4" type="video/mp4"/>
            {/* <TitlePage title="Discover the best blog ever" color="secondary"/> */}
          </video>
          <div className={`${style.videoHeroContainer}`}>
          <h2>SUBSCRIBE TO OUR NEWSLETTER</h2>
          <Button text={'Sign in'}/>
          </div>
        </div>

        <div className={`${style.fourth}`}>
          <div className={`${style.left}`}>
            <h2>Discover the best blog ever</h2>
            <div className={`${style.line}`}/>
            <p>Lorem ipsum dolor sit amet , consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            <Button text={'About us'}/>
          </div>

          <div className={`${style.right}`}>
            <Slider />
          </div>
        </div>
      </div>
    </>
  )
}