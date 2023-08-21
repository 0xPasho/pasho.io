import styles from "./index.module.css";
import Head from "next/head";
import Link from "next/link";

const SocialItem = ({
  children,
  link,
}: {
  children: React.ReactNode;
  link: string;
}) => {
  return (
    <Link href={link} target="_blank">
      {children}
    </Link>
  );
};

const ProjectItem = ({
  img,
  title,
  description,
  projectLink,
}: {
  img: React.ReactNode;
  title: string;
  description: string;
  projectLink: string;
}) => {
  return (
    <Link className={styles.card} href={projectLink} target="_blank">
      <div>{img}</div>
      <div style={{ flex: 1 }}>
        <h3 className={styles.cardTitle}>{title} →</h3>
        <div className={styles.cardText}>{description}</div>
      </div>
    </Link>
  );
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Pasho</title>
        <meta name="description" content="pasho personal site" />
        <meta property="og:title" content="pasho site" />
        <meta
          name="description"
          content="pasho's personal site featuring projects, social profiles, and more."
        />
        <meta name="author" content="Pasho" />
        <meta
          property="og:description"
          content="discover pasho's projects, social links, and stuff..."
        />
        <meta property="og:image" content="https://pasho.io/me.jpg" />
        <meta property="og:url" content="https://pasho.io" />
        <link rel="icon" href="/favicon.svg" />

        <meta name="twitter:card" content="https://pasho.io/me.jpg" />
        <meta name="twitter:title" content="pasho site" />
        <meta
          name="twitter:description"
          content="discover pasho's projects, social links, and stuff..."
        />
        <meta name="twitter:image" content="https://pasho.io/me.jpg" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <img
            src="/me.jpg"
            style={{ width: "6rem", height: "6rem", borderRadius: "100%" }}
          />
          <h1 className={styles.subtitle} style={{ padding: "15px 0px" }}>
            sup, im pasho
          </h1>
          <div className="flex flex-1">
            <SocialItem link="https://github.com/0xpasho">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                style={{ height: "1.5rem", filter: "invert(100%)" }}
              />
            </SocialItem>
            <SocialItem link="https://x.com/0xpasho">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                style={{ height: "1.5rem", margin: "0 15px" }}
                fill="white"
              >
                <g>
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </g>
              </svg>
            </SocialItem>
            <SocialItem link="https://instagram.com/0xpasho">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 372.6 370.1"
                fill="white"
                style={{ height: "1.5rem" }}
              >
                <g id="XMLID_1_">
                  <g id="XMLID_25_">
                    <path
                      id="XMLID_39_"
                      d="M247.1,366.7c-40,0-80,0-120,0c-1-0.2-2.1-0.5-3.1-0.5c-14.3-0.4-28.6-1-42.6-4.6
			c-31-7.9-53.5-26-66.1-55.6c-7.3-17-9.2-35-9.6-53.2c-0.1-2.7-0.5-5.5-0.7-8.2c0-40,0-80,0-120c0.2-1,0.5-2.1,0.5-3.1
			c0.4-14.3,1-28.6,4.6-42.6c7.9-31,26-53.5,55.6-66.1c17-7.3,35-9.2,53.2-9.6c2.7-0.1,5.4-0.5,8.2-0.7c40,0,80,0,120,0
			c1,0.2,2.1,0.5,3.1,0.5c14.3,0.4,28.6,1,42.6,4.6c31,7.9,53.5,26,66.1,55.6c7.3,17,9.2,35,9.6,53.2c0.1,2.7,0.5,5.5,0.7,8.2
			c0,40,0,80,0,120c-0.2,1-0.5,2.1-0.5,3.1c-0.4,14.3-1,28.6-4.6,42.6c-7.9,31-26,53.5-55.6,66.1c-17,7.3-35,9.2-53.2,9.6
			C252.5,366,249.8,366.4,247.1,366.7z M186.9,333.2c0,0.1,0,0.2,0,0.3c15.3,0,30.6,0.4,45.9-0.1c15.5-0.5,31.1-0.7,46.4-3.1
			c27.4-4.2,45.4-20.1,52.5-47.4c3.9-14.8,4-30,4.2-45.1c0.4-32.9,0.5-65.7,0-98.6c-0.2-15.6-0.7-31.4-3-46.7
			c-4.2-27.4-20.1-45.4-47.4-52.5c-14.8-3.9-30-4-45.1-4.2c-32.9-0.4-65.7-0.5-98.6,0c-15.6,0.2-31.4,0.7-46.7,3
			c-27.4,4.2-45.4,20.1-52.5,47.4c-3.9,14.8-4,30-4.2,45.1c-0.4,32.9-0.5,65.7,0,98.6c0.2,15.6,0.7,31.4,3,46.7
			c4.2,27.4,20.1,45.3,47.4,52.6c12.9,3.4,26.2,3.7,39.4,4C147.7,333.5,167.3,333.2,186.9,333.2z"
                    />
                    <path
                      id="XMLID_28_"
                      d="M187,278.3c-51.5,0-93.7-42.2-93.7-93.7c0-51.7,42.2-93.8,94-93.8c51.5,0.1,93.5,42.3,93.5,93.9
			C280.8,236.2,238.6,278.3,187,278.3z M186.9,245.1c33.4,0,60.7-27,60.7-60c0-33.7-26.9-61-60.1-61c-33.6,0-60.9,26.9-60.9,60.2
			C126.6,217.8,153.6,245.1,186.9,245.1z"
                    />
                    <path
                      id="XMLID_27_"
                      d="M284.3,109.4c-12.2,0-22-9.7-22-21.9c0-12.2,9.8-22,21.9-22c12.2,0,22,9.7,22,21.9
			C306.3,99.6,296.5,109.4,284.3,109.4z"
                    />
                  </g>
                </g>
              </svg>
            </SocialItem>
          </div>
          <h1 className={styles.subtitle} style={{ padding: "15px 0px" }}>
            my projects 👇
          </h1>
          <div className={styles.cardRow} style={{ flex: 1 }}>
            <ProjectItem
              title="Olyvia Labs"
              description="IT Solutions company"
              img={
                <img
                  src="https://olyvia.io/img/olyvialabs-logo.svg"
                  style={{ height: 60, filter: "invert(100%)" }}
                />
              }
              projectLink="https://olyvia.io/"
            />
            <ProjectItem
              img={
                <img
                  src="https://quickjobs.app/img/Logo.png"
                  style={{ height: 60, marginLeft: -10 }}
                />
              }
              title="Quickjobs"
              description="Get hired quickly, focused on young people."
              projectLink="https://quickjobs.app/"
            />
            <ProjectItem
              img={<span style={{ fontSize: "2.5rem" }}>✨</span>}
              title="cicode.ai"
              description="AI powered solution for documentations"
              projectLink="https://cicode.ai/"
            />
          </div>
        </div>
      </main>
    </>
  );
}
