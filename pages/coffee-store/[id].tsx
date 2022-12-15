import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "../../styles/Store.module.css";

type Props = {
	children?: React.ReactNode;
	// props....
};

//todo:-----Store component-----://
const Store = (props: Props) => {
	const { query } = useRouter();

	return (
		<div className={styles.container}>
      <Head>
        <title>Store</title>
      </Head>

			<Link href="/">Back to home</Link>
			<h3>Coffee Store {query.id}</h3>
			<Link href="/coffee-store/dynamic">Go to page dynamic</Link>
		</div>
	);
};

export default Store;
