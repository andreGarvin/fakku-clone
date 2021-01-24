import Head from "next/head";

// components
import Sidepanel from "@components/Sidepanel";
import Footer from "@components/Footer";
import Header from "@components/Header";
import BookSection from "./books";

import styles from "../styles/index.module.css";

function App(props) {
  return (
    <div className={styles.page}>
      <Head>
        <title>Hentai Books - FAKKU</title>
        <link
          rel="icon"
          type="image/x-icon"
          href="https://www.fakku.net/favicon.ico"
        />
      </Head>

      <main className={styles.content}>
        <Header />
        <div className={styles.wrap}>
          <div className={styles.wrapper}>
            <Sidepanel filters={props.filters} />
            <BookSection books={props.books} />
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}

export function getStaticProps() {
  return {
    props: {
      books: [
        {
          coverPhoto:
            "https://t.fakku.net/images/manga/v/viewer-discretion-advised-english_1611267662/thumbs/001.thumb.jpg",
          linkUrl:
            "https://www.fakku.net/hentai/viewer-discretion-advised-english",
          title: "viewer discretion advised",
          author: "Iwasaki Yuuki",
          price: 9.95,
        },
        {
          coverPhoto:
            "https://t.fakku.net/images/manga/h/holesome-gals-english_1610061099_1610061099/thumbs/001.thumb.jpg",
          linkUrl:
            "https://www.fakku.net/hentai/holesome-gals-english_1610061099",
          title: "holesome gals!!!",
          author: "dam",
          price: 9.95,
        },
        {
          coverPhoto:
            "https://t.fakku.net/images/manga/m/my-lover-is-a-vampire-english_1608230973/thumbs/001.thumb.jpg",
          linkUrl: "https://www.fakku.net/hentai/my-lover-is-a-vampire-english",
          title: "my lover is a vampire!?",
          author: "Nanase Mizuho",
          price: 9.95,
        },
        {
          coverPhoto:
            "https://t.fakku.net/images/manga/s/sensual-days-english_1607107960/thumbs/001.thumb.jpg",
          linkUrl: "https://www.fakku.net/hentai/sensual-days-english",
          title: "sensual days",
          author: "Bifidus",
          price: 9.95,
        },
        {
          coverPhoto:
            "https://t.fakku.net/images/manga/n/netoraserare-vol-1-english_1605576200/thumbs/001.thumb.jpg",
          linkUrl: "https://www.fakku.net/hentai/netoraserare-vol-1-english",
          title: " Netoraserare Vol. 1",
          author: "Konomi Shikishiro",
          price: 9.95,
        },
      ],
      filters: [
        {
          title: "popular",
          items: ["Ahegao", "Anal", "Futanari", "Monster Girl", "Vanilla"],
        },
        {
          title: "tags",
          items: [
            "Ahegao",
            "Anal",
            "Apron",
            "Beauty Mark",
            "Big Dick",
            "Biting",
            "Blindfold",
            "Blowjob",
            "Bondage",
            "Book",
            "Booty",
            "Bukkake",
            "Busty",
            "Catgirl",
            "Cheating",
            "Cheerleader",
            "Christmas",
            "Chubby",
            "Color",
            "Comedy",
            "Condom",
            "Cosplay",
            "Creampie",
            "Crossdressing",
            "Crotch Tattoo",
            "Cunnilingus",
            "Dark Skin",
            "Deepthroat",
            "Double Penetration",
            "Ecchi",
            "Elf",
            "Exhibitionism",
            "Eyebrows",
            "Facesitting",
            "Fangs",
            "Fantasy",
            "Femboy",
            "Femdom",
            "Filming",
            "Fingering",
            "Footjob",
            "Foreigner",
            "Futanari",
            "Glasses",
            "Group",
            "Hairy Armpit",
            "Handjob",
            "Harem",
            "Headphones",
            "Heart Pupils",
            "Hentai",
            "Historical",
            "Horns",
            "Horror",
            "Housewife",
            "Huge Boobs",
            "Idol",
            "Illustration",
            "Impregnation",
            "Inseki",
            "Inverted Nipples",
            "Isekai",
            "Kimono",
            "Kogal",
            "Kuudere",
            "Lactation",
            "Lingerie",
            "Love Hotel",
            "Maid",
            "Masturbation",
            "Miko",
            "Milf",
            "Monster Girl",
            "Muscles",
            "Netorare",
            "Netorase",
            "Netori",
            "Newhalf",
            "Non-H",
            "Nun",
            "Nurse",
            "Office Lady",
            "Ojousama",
            "Oni",
            "Osananajimi",
            "Paizuri",
            "Pegging",
            "Petite",
            "Ponytail",
            "Pregnant",
            "Pubic Hair",
            "Rimjob",
            "Schoolgirl Outfit",
            "Sci-Fi",
            "Shimapan",
            "Sixty-Nine",
            "Slice of Life",
            "Socks",
            "Spats",
            "Squirting",
            "Stockings",
            "Succubus",
            "Swimsuit",
            "Tanlines",
            "Teacher",
            "Tomboy",
            "Toys",
            "Trans",
            "Tsundere",
            "Twintails",
            "Ugly Bastard",
            "Uncensored",
            "Vanilla",
            "Voyeurism",
            "Western",
            "Whiteout",
            "X-ray",
            "Yandere",
            "Yaoi",
            "Yuri",
          ],
        },
        {
          title: "publishers",
          items: ["Denpa Books", "FAKKU", "Full Moon", "KUMA"],
        },
      ],
    },
  };
}

export default App;
