import { useGetFullCastQuery } from '../../service/TitleService';
import { GlobalLoader, Layout } from '../../components';
import { useParams } from 'react-router-dom';
import { FullCastCatalog } from './components/FullCastCatalog';

export const FullCast = () => {
  const params = useParams();
  const { data, isLoading } = useGetFullCastQuery(String(params.id));

  return (
    <Layout>
      {isLoading ? (
        <GlobalLoader />
      ) : data ? (
        <FullCastCatalog {...data} />
      ) : null}
    </Layout>
  );
};
