"use client";
import SectionHeader from "../Common/SectionHeader";

import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import { motion } from "framer-motion";
import SingleTestimonial from "./SingleTestimonial";
import { testimonialData } from "./testimonialData";

/**
 * Testimonial 组件 - 客户评价展示
 * 使用Swiper轮播展示客户评价，支持自动播放和分页
 * 包含动画效果和响应式设计
 */
const Testimonial = () => {
  return (
    <>
      <section>
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- 区域标题开始 --> */}
          <div className="animate_top mx-auto text-center">
            <SectionHeader
              headerInfo={{
                title: `客户评价`,
                subtitle: `客户反馈`,
                description: `我们重视每一位客户的反馈，这些真实的评价展现了我们的服务质量和产品价值。`,
              }}
            />
          </div>
          {/* <!-- 区域标题结束 --> */}
        </div>

        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              y: -20,
            },

            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true }}
          className="animate_top mx-auto mt-15 max-w-c-1235 px-4 md:px-8 xl:mt-20 xl:px-0"
        >
          {/* <!-- 轮播主容器 --> */}
          <div className="swiper testimonial-01 mb-20 pb-22.5">
            {/* <!-- Swiper轮播组件 --> */}
            <Swiper
              spaceBetween={50}
              slidesPerView={2}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination]}
              breakpoints={{
                // 当窗口宽度 >= 640px 时
                0: {
                  slidesPerView: 1,
                },
                // 当窗口宽度 >= 768px 时
                768: {
                  slidesPerView: 2,
                },
              }}
            >
              {testimonialData.map((review) => (
                <SwiperSlide key={review?.id}>
                  <SingleTestimonial review={review} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Testimonial;
