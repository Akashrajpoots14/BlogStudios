import Head from "next/head";
import { useContext } from "react";
import { MediumContext } from "../context/MediumContext";
import Header from "../components/Header";
import Banner from "../components/Banner";
import PostCard from "../components/PostCard";
import Card from "../components/Card";
import DemoCard from '../components/Democard';

const styles = {
  wrapper: `mx-auto`,
  main: `flex justify-center`,
  container: `max-w-7xl flex-1`,
  postsList: `flex flex-col gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols`,
  container2:` hover:drop-shadow-xl   p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5`

};

export default function Home() {
  const { allPosts } = useContext(MediumContext);

  return (
    <div className={styles.wrapper}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Banner />
        {/* <div className={styles.main}>
          <div className={styles.container}>
            <div className={styles.mylist}>
              
            </div>
          </div>
        </div> */}
        <div className={styles.container2}>
        {allPosts.map((post) => (
                <PostCard post={post} key={post.id} />
                // <Card post={post} key={post.id} />
                // <DemoCard post={post} key={post.id} />
              ))}
        </div>
      </main>
      
    </div>
  );
}
