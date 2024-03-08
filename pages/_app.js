import Layout from '@/components/common/Layout';
import '@/Styles/main.scss';

export default function App({ Component, pageProps }) {
    return(
            <Layout>
                <Component {...pageProps} />
            </Layout>
        
    )
}