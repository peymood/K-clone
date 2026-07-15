import Image from "next/image";

const About = () => {
  return (
    <div id="about" className="w-full bg-green-600 ">
      <div className="flex flex-col justify-center items-center gap-12 ">
        <Image
          src="https://k.cafe/wp-content/uploads/2023/01/%D8%AF%D8%B1%D8%A8%D8%A7%D8%B1%D9%87-%D9%85%D8%A7-%DB%B1.jpg"
          alt="سادگی و تنوع"
          width={800}
          height={400}
          className=" h-auto mt-4"
        />

        <div className="sm:flex justify-center items-center gap-5">
          <Image
            src="https://k.cafe/wp-content/uploads/2023/01/%D8%AF%D8%B1%D8%A8%D8%A7%D8%B1%D9%87-%D9%85%D8%A7-%DB%B2.jpg"
            alt="سادگی و تنوع"
            width={500}
            height={200}
            className="rounded-xl w-full h-auto"
          />

          <div className="felx flex-col sm:text-end text-center py-4 text-mist-700 ">
            <h2 className="font-bold text-2xl px-3">درباره ما​</h2>

            <p className="px-3">
              کی‌کافه امکانی برای سفارش خوراک‌ها و نوشیدنی‌های سبک و به‌اصطلاح‌
              میان‌وعده است. ارتباط با کی‌کافه از طریق اسنپ‌فود و سفارش تلفنی
              امکان‌پذیر است. شما با انتخاب سادگی خوشمزگی و تنوع کی‌کافه به
              خودتان و عادات غذایی‌تان احترام می‌گذارید و هنر خوراک و نوشیدنی را
              وارد روزمره‌تان می‌کنید. کی‌کافه راحت و سریع، در بسته‌بندی‌های
              ساده و زیبا به دستتان می‌رسد و سرو و صرفش راحت و بی‌تکلف است.
              کی‌‌کافه تجربه‌ی شما را از خوراک و نوشیدنی به تجربه‌های دست اول
              جهان نزدیک می‌کند.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
