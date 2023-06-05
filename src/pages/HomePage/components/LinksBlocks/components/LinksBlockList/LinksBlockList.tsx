import React, { useEffect, useState } from 'react';
import { IMoviesDataDetail } from '../../../../../../models';
import { LinksBlockItem } from '../LinksBlockItem';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './LinksBlockList.scss';

interface LinksBlockListProps {
  link: string;
  title: string;
  data: any[] | undefined;
}

export const LinksBlockList = ({ link, title, data }: LinksBlockListProps) => {
  const [slidesToShow, setSlidesToShow] = useState(7);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      let newSlidesToShow = 7;

      if (screenWidth <= 360) {
        newSlidesToShow = 1;
      } else if (screenWidth <= 460) {
        newSlidesToShow = 2;
      } else if (screenWidth <= 640) {
        newSlidesToShow = 3;
      } else if (screenWidth <= 770) {
        newSlidesToShow = 4;
      } else if (screenWidth <= 880) {
        newSlidesToShow = 5;
      } else if (screenWidth <= 1050) {
        newSlidesToShow = 6;
      }

      setSlidesToShow(newSlidesToShow);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToShow,
    nextArrow: <SampleArrow />,
    prevArrow: <SampleArrow />,
  };

  function SampleArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-next-arrow`}
        style={{ ...style, top: '40%' }}
        onClick={onClick}
      />
    );
  }

  return (
    <div className="links-block">
      <Link to={link} className="links-block__title">
        {title}
      </Link>
      <div>
        <Slider {...settings}>
          {data?.map((movie: IMoviesDataDetail) => (
            <LinksBlockItem {...movie} key={movie.id} />
          ))}
        </Slider>
      </div>
    </div>
  );
};
