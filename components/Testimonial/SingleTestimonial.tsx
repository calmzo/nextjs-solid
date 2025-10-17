import { Testimonial } from "@/types/testimonial";
import Image from "next/image";

/**
 * SingleTestimonial 组件 - 单个客户评价卡片
 * 展示客户的姓名、职位、头像和评价内容
 * 支持深色模式，具有现代化的卡片设计
 */
const SingleTestimonial = ({ review }: { review: Testimonial }) => {
  const { name, designation, image, content } = review;
  return (
    <div className="rounded-lg bg-white p-9 pt-7.5 shadow-solid-9 dark:border dark:border-strokedark dark:bg-blacksection dark:shadow-none">
      {/* 客户信息头部 */}
      <div className="mb-7.5 flex justify-between border-b border-stroke pb-6 dark:border-strokedark">
        <div>
          <h3 className="mb-1.5 text-metatitle3 text-black dark:text-white">
            {name}
          </h3>
          <p>{designation}</p>
        </div>
        <Image width={60} height={50} className="" src={image} alt={name} />
      </div>

      {/* 评价内容 */}
      <p>{content}</p>
    </div>
  );
};

export default SingleTestimonial;
