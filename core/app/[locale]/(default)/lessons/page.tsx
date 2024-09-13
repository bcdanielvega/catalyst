import { draftMode } from 'next/headers';
import { Link } from '~/components/link';
import { fetchLessons } from '~/src/contentful/lessons';

export default async function Lessons() {
  const lessons = await fetchLessons( { preview: draftMode().isEnabled })

  return (
    <main className="flex min-h-screen flex-col p-24 gap-y-8">
      {lessons.map((singleLesson) => {
        const { slug, title, date } = singleLesson;

        return (
          <div key={slug}>
            <Link href={`/lessons/${slug}`}>
              <h2 className='font-extrabold text-xl transition-colors'>{title}</h2>
              <span>
                Posted on{' '}
                {new Date(date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            </Link>
          </div>
        );
      })}
    </main>
  );
}
