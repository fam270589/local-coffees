import Head from "next/head";

import Layout from "../../components/Layout";

type Props = {
	children?: React.ReactNode;
	// props....
};

//todo:-----CoffeeStore component-----://
const CoffeeStore = (props: Props) => {
	return <Layout>
		<Head>
			<title>Coffee Store</title>
		</Head>
		Coffee Store
		</Layout>;
};

export default CoffeeStore;
