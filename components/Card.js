import Image from "next/image";
import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import Link from "next/link";
import { FiBookmark } from "react-icons/fi";
const styles = {
  wrapper: `cursor-pointer`,
  postDetail: `max-w-sm rounded overflow-hidden shadow-lg`,
  thumbnail: `w-full`,
  authorContainer: `px-6 py-4`,
  authorPostTitle: `font-bold text-xl mb-2`,
  authorPostBrief: `text-gray-700 text-base`,
  authorPostDescription: `px-6 pt-4 pb-2`,
  authorDescription: `flex m-1`,
  authorImageContainer: ` mr-2 grid place-items-center rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]`,
  authorImage: `object-cover`,
  authorName: `font-semibold`,
  authorPostTimeRead: `mt-1`,
  timeCss: `inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`,
  bookmarks: `inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700  `,
};
const Card = ({ post }) => {
  const [authorData, setAuthorData] = useState(null);
  useEffect(() => {
    const getAuthorData = async () => {
      setAuthorData(
        await (await getDoc(doc(db, "users", post.data.author))).data()
      );
    };

    getAuthorData();
  }, [post]);
  return (
    <Link   href={`/post/${post.id}`}>
      <div className={styles.wrapper}>
        <div className={styles.postDetail}>
          <Image
            className={styles.thumbnail}
            src={`https://res.cloudinary.com/demo/image/fetch/${post.data.bannerImage}`}
            //   alt="thumbnail"
            height={230}
            width={400}
          />
          <div className={styles.authorContainer}>
            {post.data.title.length > 40 ? (
              <>
                <div className={styles.authorPostTitle}>
                  {post.data.title.substring(0, 40)}...ReadMore
                </div>
              </>
            ) : (
              <>
                <div className={styles.authorPostTitle}>{post.data.title}</div>
              </>
            )}
            {post.data.brief.length > 50 ? (
              <>
                <p className={styles.authorPostBrief}>
                  {post.data.brief.substring(0, 50)}...<span className='text-blue-600'>ReadMore</span>
                </p>
              </>
            ) : (
              <>
                <p className={styles.authorPostBrief}>{post.data.brief}</p>
              </>
            )}
          </div>
          <div className={styles.authorPostDescription}>
            <div className={styles.authorDescription}>
              <div className={styles.authorImageContainer}>
                {authorData && (
                  <Image
                    src={`https://res.cloudinary.com/demo/image/fetch/${authorData.imageUrl}`}
                    alt="author"
                    className={styles.authorImage}
                    height={40}
                    width={40}
                  />
                )}
              </div>
              <div className={styles.authorName}>{authorData?.name}</div>
            </div>
            <div className={styles.authorPostTimeReadContainer}>
              <span className={styles.timeCss}>
                {new Date(post.data.postedOn).toLocaleString("en-US", {
                  day: "numeric",
                  month: "short",
                })}
                • {post.data.postLength} min read •{" "}
              </span>
              <span className={styles.timeCss}>{post.data.category}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
