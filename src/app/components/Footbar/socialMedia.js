// next
import { socialMediaItems } from "@/app/utils/constants";
import Image from "next/image";
import Link from "next/link";

const SocialMedia = () => {
  return (
    <>
      <div className="flex w-full flex-col items-start gap-3 md:items-start md:justify-start">
        <h3 className="text-[20px] text-left font-semibold text-veryDarkPurple">
          Follow us
        </h3>
        <div className="flex w-full items-center justify-start gap-4 [&_a]:transition-all [&_a]:duration-300 hover:[&_a]:rounded-full hover:[&_a]:shadow-sm hover:[&_a]:brightness-75">
          {socialMediaItems.map((socialMediaItem, i) => (
            <Link
              href={socialMediaItem.url}
              key={i}
              target="_blank"
              title={socialMediaItem.title}
              className="flex-shrink-0"
            >
              <Image
                src={socialMediaItem.image}
                alt={socialMediaItem.title}
                width="33"
                height="33"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="flex max-w-full flex-col items-start md:w-[307px] md:items-start md:justify-start">
        <h3 className="text-[20px] font-semibold text-veryDarkPurple">
          Contact Us
        </h3>
        <div className="mt-4 flex flex-col items-start justify-start gap-2 md:mt-2">
          <div
            className="mb-4 flex flex-col gap-4 text-purple-950 md:mb-0 md:flex-row"
          >
            customer.care@Skandashree.com
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialMedia;
