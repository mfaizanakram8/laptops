import Image from 'next/image';
import Link from 'next/link';

const Port = () => {
  return (
    <div className="flex flex-col h-[400px] w-full justify-center items-center text-center bg-slate-100">
      <div className="flex flex-row mt-16 w-[90%]">
        {/* First Image */}
        <div className="relative group">
          <div className="absolute top-4 left-4 text-left z-10">
            <h3 className="text-3xl font-bold text-white">Chrome Books</h3>
            <p className="text-white text-lg mt-1">From AED 600</p>
          </div>
          <Image src="/sav1.jpg" alt="High Tower Works 1" width={490} height={300} />
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="absolute top-24 left-4">
              <Link href="#" className='px-7 py-2 bg-sky-500 text-white text-sm rounded-md'>Shop Now</Link>
            </div>
          </div>
        </div>

        {/* Second Image */}
        <div className="relative group">
          <div className="absolute top-4 left-4 text-left z-10">
            <h3 className="text-3xl font-bold text-white">Laptops</h3>
            <p className="text-white text-lg mt-1">From AED 1200</p>
          </div>
          <Image src="/sav.jpg" alt="High Tower Works 2" width={440} height={300} />
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="absolute top-24 left-4">
              <Link href="#" className='px-7 py-2 bg-sky-500 text-white text-sm rounded-md'>Shop Now</Link>
            </div>
          </div>
        </div>

        {/* Third Image */}
        <div className="relative group">
          <div className="absolute top-4 left-4 text-left z-10">
            <h3 className="text-3xl font-bold text-white">Smart TVs</h3>
            <p className="text-white text-lg mt-1">From AED 2000</p>
          </div>
          <Image src="/sav1.jpg" alt="High Tower Works 3" width={490} height={390} />
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="absolute top-24 left-4">
              <Link href="#" className='px-7 py-2 bg-sky-500 text-white text-sm rounded-md'>Shop Now</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Port;