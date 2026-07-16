import { Button } from "@/Components/ui/button";
import Link from "next/link";
import Image from "next/image";

function OrderPage() {
  return (
    <div className="w-full bg-gray-700">
      <div className="flex flex-col items-center gap-12 px-3 py-6">
        <h1 className="font-bold text-blue-50 text-center">
          همین حالا می‌توانید خیلی سریع و آسان و مرتب کی‌کافه را امتحان کنید:
          روی کادر ثبت سفارش کلیک کنید.
        </h1>

        <Button
          className="px-10 py-6 hover:bg-blue-600 cursor-pointer"
          type="submit"
        >
          <Link href="">ثبت سفارش</Link>
        </Button>

        <div className="flex flex-col sm:flex-row justify-center gap-8 w-full">
          <div className="flex flex-col items-center text-center max-w-md sm:px-0 px-3 ">
            <Image
              src="https://k.cafe/wp-content/uploads/2023/01/%D8%B3%D8%A7%D8%AF%DA%AF%DB%8C-%D9%88-%D8%AA%D9%86%D9%88%D8%B9.jpg"
              alt="سادگی و تنوع"
              width={1200}
              height={400}
              className="rounded-xl w-full h-auto  "
            />

            <h2 className="font-bold text-xl mt-4 mb-2">سادگی و تنوع</h2>

            <p>
              در کی‌کافه سادگی یعنی استفاده از موادغذایی کم و گزینش‌شده،
              بسته‌بندی کمینه‌گرا، سفارش راحت و ارسال فوری، سرو و صرف راحت.
            </p>

            <p className="mt-2">
              تنوع کی‌کافه را در گوناگونی موارد منو، در عین یکپارچگی، و توجهش به
              رژیم‌های غذایی گوناگون جستجو کنید.
            </p>
          </div>

          <div className="flex flex-col items-center text-center max-w-md sm:px-0 px-3  ">
            <Image
              src="https://k.cafe/wp-content/uploads/2023/01/%D8%AE%D9%88%D8%B4%D9%85%D8%B2%DA%AF%DB%8C-%D9%88-%D8%A7%D8%AD%D8%AA%D8%B1%D8%A7%D9%85.jpg"
              alt="خوشمزگی و احترام"
              width={1200}
              height={400}
              className="rounded-xl w-full h-auto"
            />

            <h2 className="font-bold text-xl mt-4 mb-2">خوشمزگی و احترام</h2>

            <p>
              مزه‌های دلچسب و مطبوع کی‌‌کافه به خاطر تازگی مواد اولیه و ترکیب
              طعم‌های همگون و هماهنگ است.
            </p>

            <p className="mt-2">
              کی‌‌کافه را با احترامش به مشتری، استفاده بهینه از مواد اولیه و
              توجه به رژیم‌ها و حساسیت‌های غذایی مختلف بشناسید.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderPage;
