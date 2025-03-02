import { navLinks } from '@/app/utils/constants';
import Link from 'next/link';

const Categories = () => {
  return (
    <div className="flex w-full flex-col items-start justify-center md:w-auto">
      <h3 className="text-[20px] font-semibold text-veryDarkPurple">Navigation</h3>
      <div className="mt-4 flex flex-col items-start justify-start gap-2 md:mt-2">
        {navLinks.map((menuItem, i) => (
          <div
            className="mb-4 text-purple-950 md:mb-0 md:flex-row"
            key={i}
          >
            <Link href={menuItem.path} key={i} className="hover-line text-[18px] font-semibold">
              {menuItem.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
