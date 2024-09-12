import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

import { Link } from '~/components/link';
import { Button } from '~/components/ui/button';
import { locales, LocaleType } from '~/i18n/routing';

import { createClient } from 'contentful';
import { LessonQueryResult } from '../(faceted)/types';

interface Props {
  params: { locale: LocaleType };
}

const client = createClient({
  accessToken: process.env.ACCESS_TOKEN ?? '',
  space: process.env.SPACE_ID ?? '',
});

const getLessonEntries = async (): Promise<LessonQueryResult> => {
  const lessons = await client.getEntries({ content_type: 'lesson' });
  return lessons;
};

export default async function Lessons() {
  const lessons = await getLessonEntries();

  return (
    <main className="flex min-h-screen flex-col p-24 gap-y-8">
      {lessons.items.map((singleLesson) => {
        const { slug, title, date } = singleLesson.fields;

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
