import RelatedPost from "@/components/Blog/RelatedPost";
import SharePost from "@/components/Blog/SharePost";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "博客详情页面 - Solid SaaS 模板",

  // other metadata
  description: "这是 Solid Pro 的博客详情页面"
};

const SingleBlogPage = async () => {
  return (
    <>
      <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
            <div className="md:w-1/2 lg:w-[32%]">
              <div className="animate_top mb-10 rounded-md border border-stroke bg-white p-3.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
                <form
                  action="https://formbold.com/s/unique_form_id"
                  method="POST"
                >
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="在这里搜索..."
                      className="w-full rounded-lg border border-stroke px-6 py-4 shadow-solid-12 focus:border-primary focus:outline-hidden dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                    />

                    <button
                      className="absolute right-0 top-0 p-5"
                      aria-label="search-icon"
                    >
                      <svg
                        className="fill-black transition-all duration-300 hover:fill-primary dark:fill-white dark:hover:fill-primary"
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M16.031 14.617L20.314 18.899L18.899 20.314L14.617 16.031C13.0237 17.3082 11.042 18.0029 9 18C4.032 18 0 13.968 0 9C0 4.032 4.032 0 9 0C13.968 0 18 4.032 18 9C18.0029 11.042 17.3082 13.0237 16.031 14.617ZM14.025 13.875C15.2941 12.5699 16.0029 10.8204 16 9C16 5.132 12.867 2 9 2C5.132 2 2 5.132 2 9C2 12.867 5.132 16 9 16C10.8204 16.0029 12.5699 15.2941 13.875 14.025L14.025 13.875Z" />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>

              <div className="animate_top mb-10 rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
                <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
                  分类
                </h4>

                <ul>
                  <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                    <a href="#">博客</a>
                  </li>
                  <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                    <a href="#">活动</a>
                  </li>
                  <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                    <a href="#">网格</a>
                  </li>
                  <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                    <a href="#">新闻</a>
                  </li>
                  <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                    <a href="#">圆角</a>
                  </li>
                </ul>
              </div>

              <RelatedPost />
            </div>

            <div className="lg:w-2/3">
              <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
                <div className="mb-10 w-full overflow-hidden ">
                  <div className="relative aspect-97/60 w-full sm:aspect-97/44">
                    <Image
                      src={"/images/blog/blog-01.png"}
                      alt="Kobe Steel plant that supplied"
                      fill
                      className="rounded-md object-cover object-center"
                    />
                  </div>
                </div>

                <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
                  神户钢铁厂供应
                </h2>

                <ul className="mb-9 flex flex-wrap gap-5 2xl:gap-7.5">
                  <li>
                    <span className="text-black dark:text-white">作者：</span>{" "}
                    张三
                  </li>
                  <li>
                    <span className="text-black dark:text-white">
                      发布时间：2023年7月30日
                    </span>{" "}
                  </li>
                  <li>
                    <span className="text-black dark:text-white">
                      分类：
                    </span>
                    活动
                  </li>
                </ul>

                <div className="blog-details">
                  <p>
                    神户钢铁厂是一家历史悠久的钢铁制造企业，以其高质量的产品和先进的技术而闻名。
                    该工厂不仅为国内市场提供优质的钢铁产品，还向全球多个国家和地区出口。
                    通过持续的技术创新和严格的质量控制，神户钢铁厂在钢铁行业中占据着重要地位。
                  </p>

                  <p>
                    该工厂采用先进的生产工艺和环保技术，致力于可持续发展。
                    通过投资研发和人才培养，神户钢铁厂不断提升产品质量和生产效率。
                    同时，工厂还积极参与社会责任活动，为当地社区的发展做出了重要贡献。
                  </p>

                  <div className="flex flex-wrap gap-5">
                    <Image
                      src={"/images/blog/blog-01.png"}
                      width={350}
                      height={200}
                      alt="image"
                    />
                    <Image
                      src={"/images/blog/blog-02.png"}
                      width={350}
                      height={200}
                      alt="image"
                    />
                  </div>

                  <h3 className="pt-8">
                    技术创新与未来发展
                  </h3>

                  <p>
                    随着全球钢铁行业的发展，神户钢铁厂将继续加大技术投入，推动产业升级。
                    通过引进国际先进技术和设备，工厂不断提升生产能力和产品质量。
                    同时，工厂还注重环保和可持续发展，努力实现经济效益与社会效益的双赢。
                  </p>
                </div>

                <SharePost />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleBlogPage;
