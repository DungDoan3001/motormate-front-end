import { useState, useEffect } from "react";
import { Product } from "../../app/models/Product";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay, Navigation } from "swiper";
import "swiper/css";
import ProductHomepage from "../home/ProductHomepage";

export default function ProductSuggested() {
  const [productsSuggested, setproductsSuggested] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setproductsSuggested(data));
  }, []);

  return (
    <>
      {/* <!-- Card Blog --> */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* <!-- Title --> */}
        <div className="max-w-2xl text-center mx-auto mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
            Related
          </h2>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            Browse our collection of Relevant Motor
          </p>
        </div>
        {/* <!-- End Title --> */}

        {/* <!-- Grid --> */}
        <div className=" mb-10 lg:mb-14">
          <ProductHomepage products={productsSuggested} />
          {/* <Swiper
            slidesPerView={3}
            spaceBetween={30}
            navigation={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination, Autoplay, Navigation]}
          >
            {productsSuggested.map((product, id) => (
              <SwiperSlide key={id}>
                <a
                  className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800"
                  href={"/product-detail/" + product.id}
                >
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      className="object-scale-down h-80 w-full rounded-t-xl"
                      src={product.image}
                      alt="Image Book"
                    />
                  </div>
                  <div
                    className="p-4 md:p-5 min-h-[128px]"
                    style={{ lineClamp: 2 }}
                  >
                    <p className="mt-2 text-xs uppercase text-gray-600 dark:text-gray-400">
                      {product.category}
                    </p>
                    <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-white line-clamp-2 text-justify">
                      {product.title}
                    </h3>
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper> */}
        </div>

        {/* <!-- End Grid --> */}

        {/* <!-- Card --> */}
        <div className="text-center">
          <div className="inline-block bg-white border shadow-sm rounded-full dark:bg-slate-900 dark:border-gray-800">
            <div className="py-3 px-4 flex items-center gap-x-2">
              <p className="text-gray-600 dark:text-gray-400">
                Want to see more?
              </p>
              <a
                className="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium"
                href="/products"
              >
                Go here
                <svg
                  className="w-2.5 h-2.5"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        {/* <!-- End Card --> */}
      </div>
      {/* <!-- End Card Blog --> */}
    </>
  );
}
