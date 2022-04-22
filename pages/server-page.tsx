import { GetServerSideProps } from "next";
import Head from "next/head";

import styles from "../styles/ServerPage.module.css";

interface Props {
    date: string;
}

export const getServerSideProps: GetServerSideProps<Props> = async () => ({
    props: {
        date: new Date().toISOString()
    }
})

export default function ServerPage () {

    return (
        <div>
            <Head>
                <title>Server page</title>
            </Head>
            <p className={styles.paragraph}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus sapiente accusamus consectetur aut cupiditate in neque quos dicta maiores harum, ab nihil deleniti autem consequatur facilis non est quo iste voluptate necessitatibus ratione labore rem! Inventore iste laboriosam eum nisi nulla voluptas, error mollitia excepturi quae in possimus aspernatur maxime temporibus repudiandae, esse quis. Facilis obcaecati, at tenetur autem quo qui ducimus quibusdam quia sequi quasi saepe aut perferendis illo mollitia minus eveniet odit adipisci sint hic unde necessitatibus asperiores nam sunt dolorum. Maiores dicta necessitatibus iusto fugit, quisquam in dolor aut error culpa cumque mollitia ducimus unde, aliquid nobis ab! Consequuntur voluptatum quasi nostrum libero perspiciatis voluptates maiores, soluta aspernatur quis harum nulla repudiandae pariatur quas maxime! Voluptate ab beatae vero iste, accusantium, dignissimos culpa illo tempore earum ex vel labore et suscipit. Id reiciendis ratione nobis nihil rem culpa dolore similique, voluptas, dolorem necessitatibus consequuntur sequi mollitia iure vero nisi consectetur, veritatis esse quas accusantium. Ullam tempora porro doloremque ex quasi consequuntur vel eos suscipit illum eaque dignissimos ipsa ipsam, veritatis corporis commodi impedit perferendis non dicta cum accusamus esse provident deserunt. Ipsum, magnam obcaecati! Quasi beatae placeat autem minus deserunt maiores nostrum, cupiditate, cumque, repellat corrupti ad.</p>
        </div>
    )
}