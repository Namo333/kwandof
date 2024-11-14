import Link from 'next/link';

const Custom404 = () => {
  return (
    <div className=''>
      <h1>Страница не найдена</h1>
      <p>Извините, но запрашиваемая страница не существует.</p>
      <Link href="/">
        Вернуться на главнуюw
      </Link>
    </div>
  );
}

export default Custom404