import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Bran</title>
				<meta name='description' content='Bless the Maker and His Water' />
				<link
					rel='icon'
					href='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🐳</text></svg>'
				/>
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>
					🚧 <br />
					Under Construction
				</h1>

				<p className={styles.description}>
					Follow me on <a href='https://twitter.com/branhillsdesign'>Twitter</a>{' '}
					for updates.
				</p>
			</main>

			<footer className={styles.footer}>
				🐳 The mystery of life is not a problem to solve, but a reality to
				experience.
			</footer>
		</div>
	);
}
