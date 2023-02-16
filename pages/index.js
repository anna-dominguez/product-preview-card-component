import Image from 'next/image'
import useMatchMedia from 'react-use-match-media'

import PerfumeDesktop from '../public/images/image-product-desktop.jpg'
import PerfumeMobile from '../public/images/image-product-mobile.jpg'

const Home = () => {
  const isMobileView = useMatchMedia('(max-width: 375px)')
  console.log(isMobileView)
  return (
    <div
      className={`bg-white rounded-[10px] flex ${
        isMobileView
          ? 'flex-col mx-[9px] my-[28px] w-[343px]'
          : 'w-[600px] h-[450px]'
      } `}
    >
      <Image
        className={isMobileView ? 'rounded-t-[10px]' : 'rounded-l-[10px]'}
        src={isMobileView ? PerfumeMobile : PerfumeDesktop}
        alt="Perfume image"
      />
      <div className="flex flex-col m-[32px]">
        <div className="text-aurometalsaurus text-xs tracking-widest">
          PERFUME
        </div>
        <div className="font-fancy mt-[20px] text-lg text-gunmetal">
          Gabrielle Essence Eau De Parfum
        </div>
        <div className="text-m mt-[24px] text-aurometalsaurus">
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </div>
        <div className="flex mt-[29px]">
          <div className="font-fancy text-deepaquamarine text-lg">$149.99</div>
          <div className="text-aurometalsaurus text-s line-through ml-5 mt-1">
            $169.99
          </div>
        </div>
        <button className="btn mt-[30px] text-white rounded-[8px] justify-center content-center flex bg-deepaquamarine hover:bg-deepaquamarinehover">
          <span className="my-[16px]">
            <svg width="14.39" height="16" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.383 10.388a2.397 2.397 0 0 0-1.518-2.222l1.494-5.593a.8.8 0 0 0-.144-.695.8.8 0 0 0-.631-.28H2.637L2.373.591A.8.8 0 0 0 1.598 0H0v1.598h.983l1.982 7.4a.8.8 0 0 0 .799.59h8.222a.8.8 0 0 1 0 1.599H1.598a.8.8 0 1 0 0 1.598h.943a2.397 2.397 0 1 0 4.507 0h1.885a2.397 2.397 0 1 0 4.331-.376 2.397 2.397 0 0 0 1.12-2.021ZM11.26 7.99H4.395L3.068 3.196h9.477L11.26 7.991Zm-6.465 6.392a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Zm6.393 0a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Z"
                fill="#FFF"
              />
            </svg>
          </span>
          <span className="mt-[13px] ml-[14px] font-bold">Add to Cart</span>
        </button>
      </div>
    </div>
  )
}

export default Home
