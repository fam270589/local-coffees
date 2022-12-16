import Head from "next/head";
import Image from "next/image";

import styles from "../styles/Home.module.css";
import Banner from "../components/Banner";
import Card from "../components/Card";
import coffeeStoresData from "../data/coffee-stores.json";

import { GetStaticProps, InferGetStaticPropsType } from "next";

type Data = {
	id: number;
	name: string;
	imgUrl: string;
};

export const getStaticProps: GetStaticProps<{ coffeeStores: Data[] }> = async (
	context
) => {
	// const res = await fetch('https://.../posts')
	// const posts: Post[] = await res.json()
	const coffeeStores: Data[] = coffeeStoresData;

	return {
		props: {
			coffeeStores,
		},
	};
};

export default function Home(
	props: InferGetStaticPropsType<typeof getStaticProps>
) {
	const handleBannerOnClick = () => {};

	return (
		<div className={styles.container}>
			<Head>
				<title>Local Coffees</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<div className={styles.top}>
					<Banner
						buttonText="View stores nearby"
						onClick={handleBannerOnClick}
					/>
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
				</div>
				{props.coffeeStores.length > 0 && (
					<>
						<h2 className={styles.heading2}>Toronto stores</h2>
						<div className={styles.cardLayout}>
							{props.coffeeStores.map((store) => (
								<Card
									key={store.id}
									name={store.name}
									image={store.imgUrl}
									href={`/coffee-store/${store.id}`}
								/>
							))}
						</div>
					</>
				)}
			</main>
		</div>
	);
}
