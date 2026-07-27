import { CertificateData } from "@/types";

interface CertificateProps extends CertificateData {
  issueDate: Date;
  bgImage: string;
  qrcode: string;
  font1: string;
  font2: string;
  font3: string;
}

export default function CertificateTemplate({
  data,
}: {
  data: CertificateProps;
}) {
  return (
    <div
      className="relative  w-[297mm] h-[210mm] mx-auto  bg-center bg-no-repeat bg-cover text-slate-900 grid-cols-[156px_88px_576px_140px_162px] grid-rows-[138px_89px_11px_32px_35px_55px_55px_55px_1fr]"
      style={{ backgroundImage: `url(${data.bgImage})` }}
    >
      <style>{`
            @font-face {
                font-family: 'font1';
                src: url('${data.font1}') format('truetype');
            }
            @font-face {
                font-family: 'font2';
                src: url('${data.font2}') format('truetype');
            }
            @font-face {
                font-family: 'font3';
                src: url('${data.font3}') format('truetype');
            }
            `}</style>
      <div className=" p-32 h-full grid grid-cols-5 grid-rows-3 ">
        <div className="col-span-5 flex items-center justify-between  w-full ">
          <div className="w-full h-full ">
            <div className="relative top-[7%] left-[10.5%]">
              <img
                src={data.qrcode}
                alt="qr"
                width={85}
                height={30}
                className="inline"
              />
            </div>
          </div>
          <div className="w-full h-full ">
            <div
              className="relative left-[37%] -bottom-1 top-[70%]  text-[45px] font-bold text-slate-900 "
              style={{ fontFamily: '"font1", system-ui' }}
            >
              {data.shopName}
            </div>
          </div>
          <div className="w-full h-full ">
            <div className="relative top-[62%] left-[37%]">
              <div className="inline font-bold text-slate-800 text-xl tracking-wider">
                {data.memberNumber}
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3 row-start-2">
          <div className="w-3/4 relative top-[22px] left-[44px] h-full  flex flex-col items-center justify-start ">
            <div className="w-full">
              <div
                className="text-3xl relative -top-[10px] left-[166px] font-semibold"
                style={{ fontFamily: '"font2", cursive' }}
              >
                {data.ownerName}
              </div>
            </div>
            <div className="w-full">
              <div
                className="text-xl relative top-0 left-[115px] font-semibold"
                style={{ fontFamily: '"font3"' }}
              >
                {data.shopId}
              </div>
            </div>
            <div className="w-full">
              <div
                className="text-[28px] text-xl relative top-[11px] left-[115px] font-semibold"
                style={{ fontFamily: '"font2", cursive' }}
              >
                {data.address}
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 col-start-4 row-start-2">
          <div className="w-3/4 relative top-[22px] left-[44px] h-full  flex flex-col items-center justify-start ">
            <div className="w-full">
              <div
                className="text-3xl relative -top-[8px] left-[166px] font-semibold"
                style={{ fontFamily: '"font2", cursive' }}
              >{`_`}</div>
            </div>
            <div className="w-full">
              <div
                className="text-xl relative top-0 -left-[55px] font-semibold"
                style={{ fontFamily: '"font3"' }}
              >
                {data.phone}
              </div>
            </div>
            <div className="w-full">
              <div
                className="text-[28px] text-xl relative top-[11px] left-[45px] font-semibold"
                style={{ fontFamily: '"font2", cursive' }}
              >
                {data.district}
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-5 row-start-3">
          <div className="relative top-[115px] left-[55px] inline">
            {data.issueDate.toLocaleDateString("en-GB")}
          </div>
        </div>
      </div>
    </div>
  );
}
