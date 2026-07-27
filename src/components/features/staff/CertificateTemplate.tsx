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
      className="relative w-[297mm] h-[210mm] mx-auto bg-white bg-center bg-no-repeat bg-cover text-slate-900"
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
      <div
        className="absolute flex items-start justify-center border-[1px] border-slate-900 rounded-[2px]"
        style={{
          width: 88,
          height: 89,
          left: 156,
          top: 138,
        }}
      >
        <img
          src={data.qrcode}
          alt="QR Code"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="absolute top-[64mm] right-[48mm] text-center font-bold text-slate-800">
        {data.memberNumber}
      </div>
      <div
        className="absolute inset-x-0 text-center text-[40px] top-[245px] text-slate-900 font-bold"
        style={{ fontFamily: '"font1", system-ui' }}
      >
        {data.shopName}
      </div>
      <div
        className="absolute top-[305px] left-[340px] text-[40px] text-center text-slate-800"
        style={{ fontFamily: '"font2", cursive' }}
      >
        {data.ownerName}
      </div>
      <div
        className="absolute top-[355px] right-[340px] text-3xl text-center text-slate-800"
        style={{ fontFamily: '"font3"' }}
      >
        {data.phone}
      </div>
      <div className="absolute top-[360px] left-[300px] text-2xl text-center text-slate-800">
        {data.shopId}
      </div>
      <div
        className="absolute top-[390px] left-[285px] text-[35px] text-center text-slate-800"
        style={{ fontFamily: '"font2", cursive' }}
      >
        {data.address}
      </div>
      <div
        className="absolute top-[385px] right-[290px] text-[40px] text-center text-slate-800"
        style={{ fontFamily: '"font2", cursive' }}
      >
        {data.district}
      </div>
      <div className="absolute bottom-[165px] left-[160px] text-center text-xl text-slate-700">
        {data.issueDate.toLocaleDateString("en-GB")}
      </div>
      <p className="absolute top-[122mm] text-center px-40 font-bold text-slate-800 leading-relaxed">
        This certificate is proudly awarded to {data.shopName}. Your passion for
        contributing has been a source of endless inspiration. With great
        admiration, we present this gesture of gratitude. our heartfelt efforts
        for SE ELECTRONICS BD have not gone unnoticed.
      </p>
    </div>
  );
}
