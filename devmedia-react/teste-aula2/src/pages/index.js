import Head from "next/head";
import estilos from "@/styles/Home.module.css";
import Card from "@/componentes/Card"
import Topo from "@/componentes/Topo"
import Rodape from "@/componentes/Rodape"
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={estilos.main_container}>
        <Topo />
        <section>
          <Card />
          <Card />
          <Card />
        </section>
        <Rodape />
      </main>
    </>
  );
}
