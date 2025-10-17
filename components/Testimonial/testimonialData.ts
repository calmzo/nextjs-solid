import image1 from "@/public/images/user/user-01.png";
import image2 from "@/public/images/user/user-02.png";
import { Testimonial } from "@/types/testimonial";

/**
 * 客户评价数据
 * 包含客户的姓名、职位、头像和评价内容
 * 用于Testimonial组件的轮播展示
 */
export const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "张明",
    designation: "创始人 @科技公司",
    image: image1,
    content:
      "这个产品真的改变了我们的工作方式。界面简洁易用，功能强大，团队协作效率大大提升。强烈推荐给所有需要提升工作效率的团队。",
  },
  {
    id: 2,
    name: "李华",
    designation: "产品经理 @创新企业",
    image: image2,
    content:
      "作为产品经理，我对用户体验要求很高。这个平台不仅功能完善，更重要的是真正从用户角度出发，每一个细节都考虑得很周到。",
  },
  {
    id: 3,
    name: "王强",
    designation: "技术总监 @互联网公司",
    image: image1,
    content:
      "技术实现非常稳定，API设计合理，集成简单。我们的开发团队很快就上手了，大大缩短了项目开发周期。技术支持和文档都很完善。",
  },
  {
    id: 4,
    name: "陈静",
    designation: "运营总监 @电商平台",
    image: image2,
    content:
      "数据分析功能非常强大，帮助我们更好地了解用户行为。客服团队响应迅速，问题解决及时。整体服务体验超出预期，值得信赖。",
  },
];
