"use client";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";

/**
 * Pricing 组件 - 价格方案展示
 * 展示三个不同价格层级的服务方案
 * 包含基础版、热门版和高级版三个选项
 */
const Pricing = () => {
  return (
    <>
      {/* <!-- ===== 价格方案开始 ===== --> */}
      <section className="overflow-hidden pb-20 pt-15 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- 区域标题开始 --> */}
          <div className="animate_top mx-auto text-center">
            <SectionHeader
              headerInfo={{
                title: `价格方案`,
                subtitle: `简单定价`,
                description: `选择适合您需求的价格方案，享受优质的服务体验。我们提供灵活的价格选项，满足不同用户的需求。`,
              }}
            />
          </div>
          {/* <!-- 区域标题结束 --> */}
        </div>

        <div className="relative mx-auto mt-15 max-w-[1207px] px-4 md:px-8 xl:mt-20 xl:px-0">
          {/* 背景装饰图案 */}
          <div className="absolute -bottom-15 -z-1 h-full w-full">
            <Image
              fill
              src="./images/shape/shape-dotted-light.svg"
              alt="装饰图案"
              className="dark:hidden"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-7.5 lg:flex-nowrap xl:gap-12.5">
            {/* <!-- 基础版价格方案 --> */}
            <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
              <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                ¥68{" "}
                <span className="text-regular text-waterloo dark:text-manatee">
                  /月
                </span>
              </h3>
              <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                基础版
              </h4>
              <p>适合个人用户和小型团队的基础服务方案</p>

              <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <ul>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    300 GB 存储空间
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    无限照片和视频
                  </li>
                  <li className="mb-4 text-black opacity-40 last:mb-0 dark:text-manatee">
                    专属客服支持
                  </li>
                  <li className="mb-4 text-black opacity-40 last:mb-0 dark:text-manatee">
                    定制品牌策略
                  </li>
                </ul>
              </div>

              <button
                aria-label="选择此方案按钮"
                className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary"
              >
                <span className="duration-300 group-hover/btn:pr-2">
                  选择此方案
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>

            {/* <!-- 热门版价格方案 --> */}
            <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
              <div className="absolute -right-3.5 top-7.5 -rotate-90 rounded-bl-full rounded-tl-full bg-primary px-4.5 py-1.5 text-metatitle font-medium uppercase text-white">
                热门
              </div>

              <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                ¥399{" "}
                <span className="text-regular text-waterloo dark:text-manatee">
                  /月
                </span>
              </h3>
              <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                热门版
              </h4>
              <p>适合中型企业和团队的专业服务方案</p>

              <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <ul>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    300 GB 存储空间
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    无限照片和视频
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    专属客服支持
                  </li>
                  <li className="mb-4 text-black opacity-40 last:mb-0 dark:text-manatee">
                    定制品牌策略
                  </li>
                </ul>
              </div>

              <button
                aria-label="选择此方案按钮"
                className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary"
              >
                <span className="duration-300 group-hover/btn:pr-2">
                  选择此方案
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>

            {/* <!-- 高级版价格方案 --> */}
            <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
              <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                ¥1,279{" "}
                <span className="text-regular text-waterloo dark:text-manatee">
                  /月
                </span>
              </h3>
              <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                高级版
              </h4>
              <p>适合大型企业和高级用户的全功能服务方案</p>

              <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <ul>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    300 GB 存储空间
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    无限照片和视频
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    专属客服支持
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    定制品牌策略
                  </li>
                </ul>
              </div>

              <button
                aria-label="选择此方案按钮"
                className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary"
              >
                <span className="duration-300 group-hover/btn:pr-2">
                  选择此方案
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ===== 价格方案结束 ===== --> */}
    </>
  );
};

export default Pricing;
