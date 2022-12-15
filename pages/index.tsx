import Head from "next/head";
import Image from "next/image";

import styles from "../styles/Home.module.css";
import Banner from "../components/Banner";

export default function Home() {
	const handleBannerOnClick = () => {};

	return (
		<div className={styles.container}>
			<Head>
				<title>Local Coffees</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<Banner buttonText="View stores nearby" onClick={handleBannerOnClick} />
				<div className={styles.heroImage}>
					<Image
						priority
						className={styles.image}
						src={"/static/hero.png"}
						alt="coffee"
						width={500}
						height={500}
					/>
				</div>
			</main>
		</div>
	);
}
