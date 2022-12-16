import Image from "next/image";
import Link from "next/link";

import styles from "./Card.module.css";

type Props = {
	children?: React.ReactNode;
	// props....
	name: string;
	image: string;
	href: string;
};

//todo:-----Card component-----://
const Card = (props: Props) => {
	return (
		<Link href={props.href} className={styles.cardLink}>
			<div className={styles.container}>
				<div className={styles.cardHeaderWrapper}>
					<h2 className={styles.cardHeader}>{props.name}</h2>
				</div>
				<div className={styles.cardImageWrapper}>
					<Image
						className={styles.cardImage}
            priority
						src={props.image}
						width={260}
						height={160}
						alt="store image"
					/>
				</div>
			</div>
		</Link>
	);
};

export default Card;
