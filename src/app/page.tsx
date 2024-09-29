import type { NextPage } from 'next';
import DropdownMenu from './components/page';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import axios from 'axios';


export default function Main() {


  const categories = ['Football', 'Olympics', 'Crickets' , 'Tennis' , 'Cycling', 'Rugby', 'F1' , 'Golf' , 'Us Sports', 'UAV/FPV', 'E-Sport'];
  // const Apikey = '3b01cabfdaa646ae8d1a3076ee9d8197' ;




  return (
    <div className='main-container w-[1440px] h-full bg-[#f2f0f0] relative overflow-hidden mx-auto my-0'>
      <div className='flex h-[54px] flex-col items-center flex-nowrap relative z-[100] mt-[31px] mr-0 mb-0 ml-[164px]'>
      <div className='h-[53px] self-stretch shrink-0 relative z-[104] w-[1090px]'>
      <span className="flex w-[184px] h-[53px] justify-center items-start font-['JotiOne'] text-[40px] font-normal leading-[36px] text-[#000] absolute top-0 left-[449px] text-center whitespace-nowrap z-[105]">
        Angamis.
      </span>
       <Link href="/"><span className="flex w-[62px] h-[22px] justify-center items-start font-['Comfortaa'] text-[20px] font-bold leading-[20px] text-[#000] absolute top-[13px] left-[6px] text-center whitespace-nowrap z-[106]">
       Home
      </span></Link>
      {/* <span className="flex w-[44px] h-[22px] justify-center items-start font-['Comfortaa'] text-[20px] font-bold leading-[20px] text-[#000] absolute top-[13px] left-[757px] text-center whitespace-nowrap z-[107]">
        News
      </span> */}
      <Link href="/follow"><span className="flex w-[59px] h-[22px] justify-center items-start font-['Comfortaa'] text-[20px] font-bold leading-[20px] text-[#000] absolute top-[13px] left-[840px] text-center whitespace-nowrap z-[108]">
        Follow
      </span></Link>
      <Link href="/about"><span className="flex w-[63px] h-[22px] justify-center items-start font-['Comfortaa'] text-[20px] font-bold leading-[20px] text-[#000] absolute top-[13px] left-[1022px] text-center whitespace-nowrap z-[109]">
        about
      </span></Link>
      <div className="w-[157px] h-[27px] absolute top-[13px] left-[172px] z-[110]">
        <DropdownMenu categories={categories} />
      </div>
      </div>
      </div>
      
      <div className='w-[1105px] h-[48px] relative overflow-hidden z-[88] mt-[15px] mr-0 mb-0 ml-[187px]'>
        <Link href="/follow"><button className='flex w-[100px] h-[48px] pt-[23px] pr-[27px] pb-[23px] pl-[27px] gap-[10px] justify-center items-center flex-nowrap bg-[#d9d9d9] rounded-[20px] border-none absolute top-0 left-[158px] z-[89] pointer'>
          <span className="h-[16px] shrink-0 basis-auto font-['Comfortaa'] text-[14px] font-extrabold leading-[15.616px] text-[#1001b9] relative text-left whitespace-nowrap z-[90]">
          Football
          </span>
        </button></Link>
        <Link href="/follow"><button className='flex w-[100px] h-[48px] pt-[23px] pr-[20px] pb-[23px] pl-[20px] gap-[10px] justify-center items-center flex-nowrap bg-[#d9d9d9] rounded-[20px] border-none absolute top-0 left-0 z-[91] pointer'>
          <span className="h-[16px] shrink-0 basis-auto font-['Comfortaa'] text-[14px] font-extrabold leading-[15.616px] text-[#1000ca] relative text-left whitespace-nowrap z-[92]">
            Olympics
          </span>
        </button></Link>
        <Link href="/follow"><button className='flex w-[100px] h-[48px] pt-[23px] pr-[10px] pb-[23px] pl-[10px] gap-[10px] justify-center items-center flex-nowrap bg-[#d9d9d9] rounded-[20px] border-none absolute top-0 left-[315px] z-[93] pointer'>
          <span className="h-[16px] shrink-0 basis-auto font-['Comfortaa'] text-[14px] font-extrabold leading-[15.616px] text-[#1001b9] relative text-left whitespace-nowrap z-[94]">
            Crickets
          </span>
        </button></Link>
        <Link href="/follow"><button className='flex w-[100px] h-[48px] pt-[24px] pr-[14px] pb-[24px] pl-[14px] gap-[10px] justify-center items-center flex-nowrap bg-[#d9d9d9] rounded-[20px] border-none absolute top-0 left-[630px] z-[95] pointer'>
          <span className="h-[16px] shrink-0 basis-auto font-['Comfortaa'] text-[14px] font-extrabold leading-[15.616px] text-[#1001b9] relative text-left whitespace-nowrap z-[96]">
            Tennis
          </span>
        </button></Link>
        <Link href="/follow"><button className='flex w-[100px] h-[48px] pt-[21px] pr-[31px] pb-[21px] pl-[31px] gap-[10px] justify-center items-center flex-nowrap bg-[#d9d9d9] rounded-[20px] border-none absolute top-0 left-[788px] z-[97] pointer'>
          <span className="h-[16px] shrink-0 basis-auto font-['Comfortaa'] text-[14px] font-extrabold leading-[15.616px] text-[#1001b9] relative text-left whitespace-nowrap z-[98]">
            Cycling
          </span>
        </button></Link>
        <Link href="/follow"><button className='flex w-[100px] h-[48px] pt-[23px] pr-[31px] pb-[23px] pl-[31px] gap-[10px] justify-center items-center flex-nowrap bg-[#d9d9d9] rounded-[20px] border-none absolute top-0 left-[473px] z-[99] pointer'>
          <span className="h-[16px] shrink-0 basis-auto font-['Comfortaa'] text-[14px] font-extrabold leading-[15.616px] text-[#1001b9] relative text-left whitespace-nowrap z-[100]">
            Rugby
          </span>
        </button></Link>
        <Link href="/follow"><button className='flex w-[100px] h-[48px] pt-[21px] pr-[31px] pb-[21px] pl-[31px] gap-[10px] justify-center items-center flex-nowrap bg-[#d9d9d9] rounded-[20px] border-none absolute top-0 left-[945px] z-[101] pointer'>
          <span className="flex w-[22px] h-[16px] justify-start items-start shrink-0 basis-auto font-['Comfortaa'] text-[14px] font-extrabold leading-[15.616px] text-[#1001b9] relative text-left whitespace-nowrap z-[102]">
            F1
          </span>
        </button></Link>
      </div>
     
      <div className='flex w-[1106px] flex-col gap-[21px] justify-center items-center flex-nowrap relative z-[19] mt-[0px] mr-0 mb-0 ml-[167px]'>
        <div className='h-[1203px] self-stretch shrink-0 rounded-[5px] relative overflow-hidden z-20'>
          <div className='flex w-[1066px] gap-[13px] items-start flex-wrap relative z-[21] mt-[20px] mr-0 mb-0 ml-[20px]'>
            <div className='w-[1066px] h-[571px] relative z-[22]'>
              <div className='w-[444px] h-[571px] absolute top-0 left-0 z-[23]'>
                <div className='w-[433px] h-[279px] bg-[url(public/assets/833fc6ac-4546-4efd-9fa1-70763751838a.png)] bg-cover bg-no-repeat rounded-[40px] relative z-[28] mt-[6px] mr-0 mb-0 ml-[5px]' />
                <div className='flex w-[150px] gap-[8px] items-center flex-nowrap relative z-[25] mt-[6px] mr-0 mb-0 ml-[16px]'>
                  <div className='w-[40px] h-[40px] shrink-0 bg-[url(public/assets/1f6b25aa-c4a2-4566-81eb-e26d6fd43cdb.png)] bg-cover bg-no-repeat rounded-[50%] relative z-[26]' />
                  <span className="flex w-[102px] h-[17px] justify-center items-start shrink-0 basis-auto font-['Commissioner'] text-[14px] font-normal leading-[17px] text-[rgba(0,0,0,0.61)] relative text-center whitespace-nowrap z-[27]">
                    Abram Schleifer
                  </span>
                </div>
                <span className="flex w-[397px] h-[69px] justify-start items-start font-['Comfortaa'] text-[24px] font-bold leading-[26.76px] text-[#000] relative text-left z-[32] mt-[11px] mr-0 mb-0 ml-[20px]">
                  Content Marketing Strategies: Explore content trend
                </span>
                <div className='flex w-[119px] pt-[9px] pr-0 pb-[9px] pl-0 flex-col gap-[10px] items-start flex-nowrap relative z-[33] mt-[-9px] mr-0 mb-0 ml-[23px]'>
                  <div className='h-[18px] self-stretch shrink-0 relative z-[34]'>
                    <span className="flex h-[18px] justify-start items-start font-['Commissioner'] text-[15px] font-light leading-[18px] text-[rgba(0,0,0,0.56)] absolute top-0 left-[29px] text-left whitespace-nowrap z-[36]">
                      Technologies
                    </span>
                    <div className='w-[21px] h-[2px] bg-[url(public/assets/3d450ce3-beba-43c5-9e99-89ba1fcfa6cc.png)] bg-cover bg-no-repeat absolute top-[7px] left-0 z-[35]' />
                  </div>
                </div>
                <span className="flex w-[403px] h-[34px] justify-start items-start font-['Commissioner'] text-[14px] font-light leading-[17.122px] text-[#000] relative text-left z-[31] mt-[6px] mr-0 mb-0 ml-[23px]">
                  The Future of Artificial Intelligence: Trends and
                  Implications. The Future of Artificial Intelligence: Trends
                  and Implications.
                </span>
                <button className='flex w-[175px] h-[52px] pt-[12px] pr-[39px] pb-[12px] pl-[39px] gap-[10px] justify-center items-center flex-nowrap bg-[#1329ef] rounded-[14px] border-none relative z-[29] pointer mt-[27px] mr-0 mb-0 ml-[134px]'>
                  <span className="h-[22px] shrink-0 basis-auto font-['Comfortaa'] text-[20px] font-bold leading-[22px] text-[#fff] relative text-left whitespace-nowrap z-30">
                    Explore
                  </span>
                </button>
                <div className='w-[444px] h-[571px] bg-[#d9d9d9] rounded-[40px] absolute top-0 left-0 z-[24]' />
              </div>
              <div className='w-[609px] h-[571px] absolute top-0 left-[457px] z-[37]'>
                <div className='w-[593px] h-[406px] bg-[url(public/assets/c1f1abd3-7c24-4ad6-b21c-d77434bffaa6.png)] bg-cover bg-no-repeat rounded-[40px] relative z-[45] mt-[8px] mr-0 mb-0 ml-[8px]' />
                <span className="flex w-[538px] h-[69px] justify-start items-start font-['Comfortaa'] text-[24px] font-bold leading-[26.76px] text-[#000] relative text-left z-[42] mt-[22px] mr-0 mb-0 ml-[18px]">
                  Content Marketing Strategies: Explore content trend
                </span>
                <div className='w-[609px] h-[571px] bg-[#d9d9d9] rounded-[40px] absolute top-0 left-0 z-[38]' />
                <button className='flex w-[175px] h-[52px] pt-[12px] pr-[39px] pb-[12px] pl-[39px] gap-[10px] justify-center items-center flex-nowrap bg-[#1329ef] rounded-[14px] border-none absolute top-[505px] left-[217px] z-[43] pointer'>
                  <span className="h-[22px] shrink-0 basis-auto font-['Comfortaa'] text-[20px] font-bold leading-[22px] text-[#fff] relative text-left whitespace-nowrap z-[44]">
                    Explore
                  </span>
                </button>
                <div className='flex w-[150px] h-[40px] gap-[8px] items-center flex-nowrap absolute top-[511px] left-[18px] z-[39]'>
                  <div className='w-[40px] h-[40px] shrink-0 bg-[url(public/assets/32474985-5f55-424d-acea-2ce7dcace483.png)] bg-cover bg-no-repeat rounded-[50%] relative z-40' />
                  <span className="flex w-[102px] h-[17px] justify-center items-start shrink-0 basis-auto font-['Commissioner'] text-[14px] font-normal leading-[17px] text-[rgba(0,0,0,0.61)] relative text-center whitespace-nowrap z-[41]">
                    Abram Schleifer
                  </span>
                </div>
              </div>
            </div>
            <div className='w-[1066px] h-[571px] relative z-[46]'>
              <div className='w-[1070px] h-[571px] bg-[#d9d9d9] rounded-[40px] absolute top-0 left-0 z-[47]' />
              <div className='w-[626px] h-[556px] bg-[url(public/assets/39a35c79-e82a-4d90-bb30-22d2f0666bc3.png)] bg-cover bg-no-repeat rounded-[40px] absolute top-[9px] left-[440px] z-[51]' />
              <div className='flex w-[150px] h-[40px] gap-[8px] items-center flex-nowrap absolute top-[66px] left-[28px] z-[48]'>
                <div className='w-[40px] h-[40px] shrink-0 bg-[url(public/assets/e5fe66a8-d677-4a73-9596-1200ac177189.png)] bg-cover bg-no-repeat rounded-[50%] relative z-[49]' />
                <span className="flex w-[102px] h-[17px] justify-center items-start shrink-0 basis-auto font-['Commissioner'] text-[14px] font-normal leading-[17px] text-[rgba(0,0,0,0.61)] relative text-center whitespace-nowrap z-50">
                  Abram Schleifer
                </span>
              </div>
              <span className="flex w-[419px] h-[92px] justify-start items-start font-['Comfortaa'] text-[24px] font-bold leading-[26.76px] text-[#000] absolute top-[141px] left-[28px] text-left z-[55]">
                Content Marketing Strategies: Explore content trend
              </span>
              <div className='flex w-[119px] h-[36px] pt-[9px] pr-0 pb-[9px] pl-0 flex-col gap-[10px] items-start flex-nowrap absolute top-[226px] left-[28px] z-[56]'>
                <div className='h-[18px] self-stretch shrink-0 relative z-[57]'>
                  <span className="flex h-[18px] justify-start items-start font-['Commissioner'] text-[15px] font-light leading-[18px] text-[rgba(0,0,0,0.56)] absolute top-0 left-[29px] text-left whitespace-nowrap z-[59]">
                    Technologies
                  </span>
                  <div className='w-[21px] h-[2px] bg-[url(public/assets/50ecbc59-795d-4012-aa24-e27a164c121f.png)] bg-cover bg-no-repeat absolute top-[7px] left-0 z-[58]' />
                </div>
              </div>
              <span className="flex w-[403px] h-[144px] justify-start items-start font-['Commissioner'] text-[20px] font-light leading-[24.46px] text-[#000] absolute top-[287px] left-[28px] text-left z-[54]">
                The Future of Artificial Intelligence: Trends and Implications.
                The Future of Artificial Intelligence: Trends and Implications.
                <br />
                The Future of Artificial Intelligence: Trends and Implications.
                The Future of Artificial Intelligence: Trends and Implications.
              </span>
              <button className='flex w-[283px] h-[64px] pt-[12px] pr-[39px] pb-[12px] pl-[39px] gap-[10px] justify-center items-center flex-nowrap bg-[#1329ef] rounded-[14px] border-none absolute top-[473px] left-[68px] z-[52] pointer'>
                <span className="h-[27px] shrink-0 basis-auto font-['Comfortaa'] text-[24px] font-bold leading-[26.76px] text-[#fff] relative text-left whitespace-nowrap z-[53]">
                  Explore
                </span>
              </button>
              <div className='w-[41px] h-[20px] absolute top-[485px] left-[16px] z-[60]' />
            </div>
          </div>
        </div>
        <div className='h-[1203px] self-stretch shrink-0 rounded-[5px] relative overflow-hidden z-20'>
          <div className='flex w-[1066px] gap-[13px] items-start flex-wrap relative z-[21] mt-[20px] mr-0 mb-0 ml-[20px]'>
            <div className='w-[1066px] h-[571px] relative z-[22]'>
              <div className='w-[444px] h-[571px] absolute top-0 left-0 z-[23]'>
                <div className='w-[433px] h-[279px] bg-[url(public/assets/833fc6ac-4546-4efd-9fa1-70763751838a.png)] bg-cover bg-no-repeat rounded-[40px] relative z-[28] mt-[6px] mr-0 mb-0 ml-[5px]' />
                <div className='flex w-[150px] gap-[8px] items-center flex-nowrap relative z-[25] mt-[6px] mr-0 mb-0 ml-[16px]'>
                  <div className='w-[40px] h-[40px] shrink-0 bg-[url(public/assets/1f6b25aa-c4a2-4566-81eb-e26d6fd43cdb.png)] bg-cover bg-no-repeat rounded-[50%] relative z-[26]' />
                  <span className="flex w-[102px] h-[17px] justify-center items-start shrink-0 basis-auto font-['Commissioner'] text-[14px] font-normal leading-[17px] text-[rgba(0,0,0,0.61)] relative text-center whitespace-nowrap z-[27]">
                    Abram Schleifer
                  </span>
                </div>
                <span className="flex w-[397px] h-[69px] justify-start items-start font-['Comfortaa'] text-[24px] font-bold leading-[26.76px] text-[#000] relative text-left z-[32] mt-[11px] mr-0 mb-0 ml-[20px]">
                  Content Marketing Strategies: Explore content trend
                </span>
                <div className='flex w-[119px] pt-[9px] pr-0 pb-[9px] pl-0 flex-col gap-[10px] items-start flex-nowrap relative z-[33] mt-[-9px] mr-0 mb-0 ml-[23px]'>
                  <div className='h-[18px] self-stretch shrink-0 relative z-[34]'>
                    <span className="flex h-[18px] justify-start items-start font-['Commissioner'] text-[15px] font-light leading-[18px] text-[rgba(0,0,0,0.56)] absolute top-0 left-[29px] text-left whitespace-nowrap z-[36]">
                      Technologies
                    </span>
                    <div className='w-[21px] h-[2px] bg-[url(public/assets/3d450ce3-beba-43c5-9e99-89ba1fcfa6cc.png)] bg-cover bg-no-repeat absolute top-[7px] left-0 z-[35]' />
                  </div>
                </div>
                <span className="flex w-[403px] h-[34px] justify-start items-start font-['Commissioner'] text-[14px] font-light leading-[17.122px] text-[#000] relative text-left z-[31] mt-[6px] mr-0 mb-0 ml-[23px]">
                  The Future of Artificial Intelligence: Trends and
                  Implications. The Future of Artificial Intelligence: Trends
                  and Implications.
                </span>
                <button className='flex w-[175px] h-[52px] pt-[12px] pr-[39px] pb-[12px] pl-[39px] gap-[10px] justify-center items-center flex-nowrap bg-[#1329ef] rounded-[14px] border-none relative z-[29] pointer mt-[27px] mr-0 mb-0 ml-[134px]'>
                  <span className="h-[22px] shrink-0 basis-auto font-['Comfortaa'] text-[20px] font-bold leading-[22px] text-[#fff] relative text-left whitespace-nowrap z-30">
                    Explore
                  </span>
                </button>
                <div className='w-[444px] h-[571px] bg-[#d9d9d9] rounded-[40px] absolute top-0 left-0 z-[24]' />
              </div>
              <div className='w-[609px] h-[571px] absolute top-0 left-[457px] z-[37]'>
                <div className='w-[593px] h-[406px] bg-[url(public/assets/c1f1abd3-7c24-4ad6-b21c-d77434bffaa6.png)] bg-cover bg-no-repeat rounded-[40px] relative z-[45] mt-[8px] mr-0 mb-0 ml-[8px]' />
                <span className="flex w-[538px] h-[69px] justify-start items-start font-['Comfortaa'] text-[24px] font-bold leading-[26.76px] text-[#000] relative text-left z-[42] mt-[22px] mr-0 mb-0 ml-[18px]">
                  Content Marketing Strategies: Explore content trend
                </span>
                <div className='w-[609px] h-[571px] bg-[#d9d9d9] rounded-[40px] absolute top-0 left-0 z-[38]' />
                <button className='flex w-[175px] h-[52px] pt-[12px] pr-[39px] pb-[12px] pl-[39px] gap-[10px] justify-center items-center flex-nowrap bg-[#1329ef] rounded-[14px] border-none absolute top-[505px] left-[217px] z-[43] pointer'>
                  <span className="h-[22px] shrink-0 basis-auto font-['Comfortaa'] text-[20px] font-bold leading-[22px] text-[#fff] relative text-left whitespace-nowrap z-[44]">
                    Explore
                  </span>
                </button>
                <div className='flex w-[150px] h-[40px] gap-[8px] items-center flex-nowrap absolute top-[511px] left-[18px] z-[39]'>
                  <div className='w-[40px] h-[40px] shrink-0 bg-[url(public/assets/32474985-5f55-424d-acea-2ce7dcace483.png)] bg-cover bg-no-repeat rounded-[50%] relative z-40' />
                  <span className="flex w-[102px] h-[17px] justify-center items-start shrink-0 basis-auto font-['Commissioner'] text-[14px] font-normal leading-[17px] text-[rgba(0,0,0,0.61)] relative text-center whitespace-nowrap z-[41]">
                    Abram Schleifer
                  </span>
                </div>
              </div>
            </div>
            <div className='w-[1066px] h-[571px] relative z-[46]'>
              <div className='w-[1070px] h-[571px] bg-[#d9d9d9] rounded-[40px] absolute top-0 left-0 z-[47]' />
              <div className='w-[626px] h-[556px] bg-[url(public/assets/39a35c79-e82a-4d90-bb30-22d2f0666bc3.png)] bg-cover bg-no-repeat rounded-[40px] absolute top-[9px] left-[440px] z-[51]' />
              <div className='flex w-[150px] h-[40px] gap-[8px] items-center flex-nowrap absolute top-[66px] left-[28px] z-[48]'>
                <div className='w-[40px] h-[40px] shrink-0 bg-[url(public/assets/e5fe66a8-d677-4a73-9596-1200ac177189.png)] bg-cover bg-no-repeat rounded-[50%] relative z-[49]' />
                <span className="flex w-[102px] h-[17px] justify-center items-start shrink-0 basis-auto font-['Commissioner'] text-[14px] font-normal leading-[17px] text-[rgba(0,0,0,0.61)] relative text-center whitespace-nowrap z-50">
                  Abram Schleifer
                </span>
              </div>
              <span className="flex w-[419px] h-[92px] justify-start items-start font-['Comfortaa'] text-[24px] font-bold leading-[26.76px] text-[#000] absolute top-[141px] left-[28px] text-left z-[55]">
                Content Marketing Strategies: Explore content trend
              </span>
              <div className='flex w-[119px] h-[36px] pt-[9px] pr-0 pb-[9px] pl-0 flex-col gap-[10px] items-start flex-nowrap absolute top-[226px] left-[28px] z-[56]'>
                <div className='h-[18px] self-stretch shrink-0 relative z-[57]'>
                  <span className="flex h-[18px] justify-start items-start font-['Commissioner'] text-[15px] font-light leading-[18px] text-[rgba(0,0,0,0.56)] absolute top-0 left-[29px] text-left whitespace-nowrap z-[59]">
                    Technologies
                  </span>
                  <div className='w-[21px] h-[2px] bg-[url(public/assets/50ecbc59-795d-4012-aa24-e27a164c121f.png)] bg-cover bg-no-repeat absolute top-[7px] left-0 z-[58]' />
                </div>
              </div>
              <span className="flex w-[403px] h-[144px] justify-start items-start font-['Commissioner'] text-[20px] font-light leading-[24.46px] text-[#000] absolute top-[287px] left-[28px] text-left z-[54]">
                The Future of Artificial Intelligence: Trends and Implications.
                The Future of Artificial Intelligence: Trends and Implications.
                <br />
                The Future of Artificial Intelligence: Trends and Implications.
                The Future of Artificial Intelligence: Trends and Implications.
              </span>
              <button className='flex w-[283px] h-[64px] pt-[12px] pr-[39px] pb-[12px] pl-[39px] gap-[10px] justify-center items-center flex-nowrap bg-[#1329ef] rounded-[14px] border-none absolute top-[473px] left-[68px] z-[52] pointer'>
                <span className="h-[27px] shrink-0 basis-auto font-['Comfortaa'] text-[24px] font-bold leading-[26.76px] text-[#fff] relative text-left whitespace-nowrap z-[53]">
                  Explore
                </span>
              </button>
              <div className='w-[41px] h-[20px] absolute top-[485px] left-[16px] z-[60]' />
            </div>
          </div>
        </div>
      </div>
      <span className="block h-[38px] font-['Doppio_One'] text-[30px] font-normal leading-[37.5px] text-[#000] relative text-left whitespace-nowrap z-[86] mt-[32px] mr-0 mb-0 ml-[183px]">
        More To Follow
      </span>
      <div className='flex w-[1078px] h-[182px] justify-between items-center relative z-[75] mt-[12px] mr-0 mb-0 ml-[181px]'>
        <div className='w-[444px] h-[182px] shrink-0 bg-[rgba(217,217,217,0.2)] bg-[url(public/assets/7a1283c801ee117f780c36b8a830836ce5518e4d.png)] bg-cover bg-no-repeat rounded-[20px] relative z-[71]'>
          <div className='w-[442px] h-[94px] bg-[url(public/assets/781af91f-555a-4291-bd16-5b512cc79dc9.png)] bg-cover bg-no-repeat rounded-tl-none rounded-tr-none rounded-br-[20px] rounded-bl-[20px] relative z-[76] mt-[88px] mr-0 mb-0 ml-[2px]'>
            <span className="flex h-[22px] justify-start items-start font-['Comfortaa'] text-[20px] font-light leading-[22px] text-[#fff] absolute top-[47px] left-[20px] text-left whitespace-nowrap z-[81]">
              Football
            </span>
          </div>
        </div>
        <div className='w-[310px] h-[182px] shrink-0 bg-[rgba(217,217,217,0.2)] bg-[url(public/assets/cda7397ddb9d9fc5d52291ddfd4714b21beddfdf.png)] bg-cover bg-no-repeat rounded-[20px] relative z-[74]'>
          <div className='w-[310px] h-[91px] bg-[url(public/assets/0f90a40a-f4e3-418b-8b6c-1b497748b6b0.png)] bg-cover bg-no-repeat rounded-tl-none rounded-tr-none rounded-br-[20px] rounded-bl-[20px] relative z-[79] mt-[91px] mr-0 mb-0 ml-0'>
            <span className="flex h-[22px] justify-start items-start font-['Comfortaa'] text-[20px] font-light leading-[22px] text-[#fff] absolute top-[44px] left-[25px] text-left whitespace-nowrap z-[82]">
              Politics
            </span>
          </div>
        </div>
        <div className='w-[281px] h-[182px] shrink-0 bg-[rgba(217,217,217,0.2)] bg-[url(public/assets/78f606e7e6a3dd2e1eee1f206a3cb4ba44fed7b3.png)] bg-cover bg-no-repeat rounded-[20px] relative z-[75]'>
          <div className='w-[281px] h-[91px] bg-[url(public/assets/5f5f3e6a-0f58-4542-8d7f-42a8434f8b3d.png)] bg-cover bg-no-repeat rounded-tl-none rounded-tr-none rounded-br-[20px] rounded-bl-[20px] relative z-[80] mt-[91px] mr-0 mb-0 ml-0'>
            <span className="flex h-[22px] justify-start items-start font-['Comfortaa'] text-[20px] font-light leading-[22px] text-[#fff] absolute top-[44px] left-[24px] text-left whitespace-nowrap z-[83]">
              Science
            </span>
          </div>
        </div>
      </div>
      <div className='flex w-[1078px] h-[182px] justify-between items-center relative z-[73] mt-[12px] mr-0 mb-0 ml-[181px]'>
        <div className='w-[582px] h-[182px] shrink-0 bg-[rgba(217,217,217,0.2)] bg-[url(public/assets/c5bbd0b3ce29f59b83c3cf69959189a518094eaa.png)] bg-cover bg-no-repeat rounded-[20px] relative z-[73]'>
          <div className='w-[582px] h-[94px] bg-[url(public/assets/bc6f3d90-d882-445f-8d09-1eba8abae06e.png)] bg-cover bg-no-repeat rounded-tl-none rounded-tr-none rounded-br-[20px] rounded-bl-[20px] relative z-[77] mt-[88px] mr-0 mb-0 ml-0'>
            <span className="flex h-[22px] justify-start items-start font-['Comfortaa'] text-[20px] font-light leading-[22px] text-[#fff] absolute top-[47px] left-[22px] text-left whitespace-nowrap z-[84]">
              Buisness
            </span>
          </div>
        </div>
        <div className='w-[477px] h-[182px] shrink-0 bg-[rgba(217,217,217,0.2)] bg-[url(public/assets/581ad0e9e65e07717cd60075819de488c02e66f0.png)] bg-cover bg-no-repeat rounded-[20px] relative z-[72]'>
          <div className='w-[477px] h-[94px] bg-[url(public/assets/ab1cd669-094d-4ddc-8313-98a372738725.png)] bg-cover bg-no-repeat rounded-tl-none rounded-tr-none rounded-br-[20px] rounded-bl-[20px] relative z-[78] mt-[88px] mr-0 mb-0 ml-0'>
            <span className="flex h-[22px] justify-start items-start font-['Comfortaa'] text-[20px] font-light leading-[22px] text-[#fff] absolute top-[47px] left-[31px] text-left whitespace-nowrap z-[85]">
              Sport
            </span>
          </div>
        </div>
      </div>
      <div className='w-[1051px] h-[52px] relative z-[17] mt-[109px] mr-0 mb-0 ml-[195px]'>
        <div className="w-[82px] h-[31px] font-['Comfortaa'] text-[24px] font-bold leading-[26.76px] absolute top-0 left-0 text-left whitespace-nowrap z-[13]">
          <span className="font-['Coda'] text-[24px] font-extrabold leading-[28.8px] text-[#000] relative text-left">
            About
            <br />
            <br />
          </span>
          <span className="font-['Comfortaa'] text-[24px] font-bold leading-[28.8px] text-[#000] relative text-left">
            <br />
          </span>
        </div>
        <div className='flex w-[186px] h-[52px] justify-between items-center absolute top-0 left-[865px] z-[4]'>
          <div className='flex w-[50px] h-[48px] pt-[12px] pr-[22px] pb-[12px] pl-[22px] flex-col gap-[10px] justify-center items-center shrink-0 flex-nowrap bg-[#d9d9d9] rounded-[30px] relative'>
            <div className='w-[13px] h-[24px] shrink-0 bg-[url(public/assets/58c84d84-70c5-4068-8f8f-a19b133f1c4d.png)] bg-cover bg-no-repeat relative z-[1]' />
          </div>
          <div className='flex w-[50px] h-[48px] pt-[12px] pr-[22px] pb-[12px] pl-[22px] flex-col gap-[10px] justify-center items-center shrink-0 flex-nowrap bg-[#d9d9d9] rounded-[30px] relative z-[2]'>
            <div className='w-[24px] h-[24px] shrink-0 bg-[url(public/assets/182aa05b-cbf4-4b1b-aa53-6dc2c61b95c7.png)] bg-[length:100%_100%] bg-no-repeat relative z-[3]' />
          </div>
          <div className='flex w-[50px] h-[48px] pt-[12px] pr-[22px] pb-[12px] pl-[22px] flex-col gap-[10px] justify-center items-center shrink-0 flex-nowrap bg-[#d9d9d9] rounded-[30px] relative z-[4]'>
            <div className='w-[23.999px] h-[23.929px] shrink-0 bg-[url(public/assets/aeee2be6-3bce-4ffc-89c8-f556fdec860f.png)] bg-cover bg-no-repeat relative z-[5]' />
          </div>
        </div>
        <span className="flex h-[34px] justify-start items-start font-['Coda'] text-[24px] font-extrabold leading-[34px] text-[#000] absolute top-[4px] left-[243px] text-left whitespace-nowrap z-[15]">
          Legal
        </span>
        <span className="flex h-[34px] justify-start items-start font-['Coda'] text-[24px] font-extrabold leading-[34px] text-[#000] absolute top-[4px] left-[513px] text-left whitespace-nowrap z-[17]">
          Trending Tech Topics
        </span>
      </div>
      <div className='w-[1051px] h-[196px] relative z-[16] mt-[12px] mr-0 mb-0 ml-[195px]'>
        <span className="flex w-[155px] h-[136px] justify-start items-start font-['Comfortaa'] text-[14px] font-light leading-[15.601px] text-[#000] absolute top-0 left-0 text-left z-[14]">
          Tangamis
          <br />
          Staff
          <br />
          Contact Us
          <br />
          Advertise
          <br />
          Site Map
        </span>
        <span className="flex w-[212px] h-[166px] justify-start items-start font-['Comfortaa'] text-[14px] font-light leading-[15.61px] text-[#000] absolute top-0 left-[240px] text-left z-[16]">
          Terms of Service
          <br />
          Privacy Policy
          <br />
          RSS Terms of Use
          <br />
          Privacy Dashboard
          <br />
          Code of Conduct
          <br />
          About Our Ads
        </span>
        <span className="flex w-[267px] h-[196px] justify-start items-start font-['Comfortaa'] text-[14px] font-light leading-[15.61px] text-[#000] absolute top-0 left-[515px] text-left z-[12]">
          OpenAI $100B
          <br />
          SB 1047
          <br />
          Uber In South Korea
          <br />
          Anthropic
          <br />
          Elon Musk
          <br />
          Tech Layoffs
          <br />
          ChatGPT
        </span>
        <div className='w-[186px] h-[196px] absolute top-0 left-[865px] z-10'>
          <div className='flex w-[50px] h-[48px] pt-[12px] pr-[22px] pb-[12px] pl-[22px] flex-col gap-[10px] justify-center items-center flex-nowrap bg-[#d9d9d9] rounded-[30px] absolute top-0 left-0 z-[6]'>
            <div className='w-[24.002px] h-[24px] shrink-0 bg-[url(public/assets/7057b915-b16c-4c56-aa54-f222b43fd47d.png)] bg-cover bg-no-repeat relative z-[7]' />
          </div>
          <div className='flex w-[50px] h-[48px] pt-[12px] pr-[22px] pb-[12px] pl-[22px] flex-col gap-[10px] justify-center items-center flex-nowrap bg-[#d9d9d9] rounded-[30px] absolute top-0 left-[68px] z-[8]'>
            <div className='w-[24px] h-[17px] shrink-0 bg-[url(public/assets/509dcadb-e90a-43fe-ab33-cde2524af817.png)] bg-cover bg-no-repeat relative z-[9]' />
          </div>
          <div className='flex w-[50px] h-[48px] pt-[12px] pr-[22px] pb-[12px] pl-[22px] flex-col gap-[10px] justify-center items-center flex-nowrap bg-[#d9d9d9] rounded-[30px] absolute top-0 left-[136px] z-10'>
            <div className='w-[20.641px] h-[24px] shrink-0 bg-[url(public/assets/12d08058-1e64-41ff-af6c-70a6c0d0e4ec.png)] bg-cover bg-no-repeat relative z-[11]' />
          </div>
        </div>
      </div>
    </div>
  );
}
