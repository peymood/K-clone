import { Button } from "@/Components/ui/button";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className="w-full mx-auto mt-24 h-screen  ">
      <div className="flex flex-col justify-center items-center gap-12 ">
        <h1 className="sm:text-9xl text-6xl">K-Café</h1>

        <div className="text-center ">
          <p>کی‌کافه امکانی برای سفارش خوراک‌ها و نوشیدنی‌های سبک است</p> <br />
          <p>
            کی‌کافه فضای فیزیکی ندارد و شما می‌توانید با سفارش تلفنی این تجربه
            را در فضای خودتان بی‌نهایت بار امتحان کنید
          </p>
        </div>
        <Button
          className=" hover:bg-blue-600 cursor-pointer px-10 py-6 "
          type="submit"
        >
          درباره ما
        </Button>
      </div>

      <div className="sm:px-12 px-4 mt-12 ">
        <Image
          src="https://k.cafe/wp-content/uploads/elementor/thumbs/D2A0327-copy-scaled-qawhgop02sfyp7fgcq33syh58bahehxfsbh67lsozs.jpg"
          alt="K-Cafe"
          width={1200}
          height={800}
          className="rounded-xl w-full h-auto"
        />
      </div>
    </div>
  );
};

export default HomePage;
