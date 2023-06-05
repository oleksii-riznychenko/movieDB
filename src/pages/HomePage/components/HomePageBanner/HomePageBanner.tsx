import { IMoviesDataDetail, IServerData } from '../../../../models';
import { BannerItem } from '../BannerItem';
import { GlobalLoader } from '../../../../components';
import './HomePageBanner.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { KeyboardArrowRight, KeyboardArrowLeft } from '@mui/icons-material/';
export const HomePageBanner = ({
  data,
  isLoading,
}: IServerData): JSX.Element => {
  let slicedData: IMoviesDataDetail[] | undefined;

  if (Array.isArray(data?.items)) {
    slicedData = data?.items.slice(0, 5);
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    cssEase: 'linear',
  };

  return (
    <>
      {isLoading ? (
        <GlobalLoader />
      ) : (
        slicedData && (
          <div className="banner-block">
            <Slider {...settings}>
              {slicedData.map((item) => (
                <div key={item.id}>
                  <BannerItem {...item} />
                </div>
              ))}
            </Slider>
          </div>
        )
      )}
    </>
  );
};
