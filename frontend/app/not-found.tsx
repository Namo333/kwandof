import Link from 'next/link';

const Custom404 = () => {
  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-[90px] font-semibold text-[#457AE9]">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Страница не найдена</h1>
        <p className="mt-6 text-base leading-7 text-gray-600">К сожалению, мы не смогли найти страницу, которую вы ищете.</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="rounded-md bg-[#457AE9] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Вернуться назад
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Custom404