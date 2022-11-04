import React from 'react'
import './SwiperComponent.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import 'swiper/css';
function SwiperComponent({ ContentArray }) {
	const pagination = {
		clickable: true,
		renderBullet: function (index, className) {
			return '<p class="' + className + ' swiper-pagination-custom' + '">' + ContentArray[index].description + '</p>'
		},
	};
	return (
		<div className='mySwiper--customs'>
			<Swiper
				pagination={pagination}
				modules={[Pagination]}
				className="mySwiper"
			>
				{
					ContentArray.map((item, index) =>
						<SwiperSlide><img src={item.photo} alt={'slide' + index + 1} /></SwiperSlide>
					)
				}
			</Swiper>
		</div>
	)
}

export default SwiperComponent