import Image from "next/image";
import Link from "next/link";
import SmallLogo from "../static/smallLogo.png";
import { HiOutlineHome } from "react-icons/hi";
import { FiBell } from "react-icons/fi";
import { BiBookmarks } from "react-icons/bi";
import { RiArticleLine } from "react-icons/ri";
import { BsPencilSquare } from "react-icons/bs";
import {handleUserAuth} from '../context/MediumContext';
import Qazi from "../static/qazi.jpg";

const styles = {
  wrapper: `w-[5rem] h-screen flex flex-col justify-between items-center p-[1rem]`,
  logoContainer: `cursor-pointer`,
  iconsContainer: `flex-1 flex flex-col justify-center gap-[1.4rem] text-2xl text-[#787878]`,
  divider: `border-b`,
  profileImageContainer: `w-[2.4rem] h-[2.4rem] rounded-full overflow-hidden grid place-items-center `,
  profileImage: `object-cover`,
  hover: "cursor-pointer",
};

const ReadersNav = ({ author }) => {
  return (
    <div className={styles.wrapper}>
      <Link href="/">
        <div className={styles.logoContainer}>
          <Image src={SmallLogo} alt="medium small logo" />
        </div>
      </Link>
      <div className={styles.iconsContainer}>
        <Link href="/">
          <HiOutlineHome className={styles.hover} />
        </Link>
        <FiBell className={styles.hover} />

        <BiBookmarks className={styles.hover} />

        <RiArticleLine className={styles.hover} />
        <div className={styles.divider} />
        {author ? (
          <>
            <Link href="/?addNew=1">
              <BsPencilSquare className={styles.hover} />
            </Link>
          </>
        ) : (
          <div>
            <button onClick={handleUserAuth}>Sign In</button>
          </div>
        )}
      </div>
      <div className={styles.profileImageContainer}>
        {/* <Image
          className={styles.profileImage}
          src={author.img_url}
          alt='profile image icons'
        /> */}
      </div>
    </div>
  );
};

export default ReadersNav;
