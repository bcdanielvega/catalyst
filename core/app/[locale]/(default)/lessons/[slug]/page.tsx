import { createClient, EntryFieldTypes } from 'contentful';
import { LessonItem } from '~/app/types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

type LessonSkeleton = 
{
    contentTypeId: 'lesson',
    fields: {
        title: EntryFieldTypes.Text,
        slug: EntryFieldTypes.Text,
        auther: EntryFieldTypes.Text,
        lessonContent: EntryFieldTypes.RichText,
        date: EntryFieldTypes.Date
    }
}

const client = createClient({
  accessToken: process.env.ACCESS_TOKEN ?? '',
  space: process.env.SPACE_ID ?? '',
});

export async function generateStaticParams() {
  const queryOptions = {
    content_type: 'lesson',
    select: 'fields.slug',
  };
  const lessons = await client.getEntries<LessonSkeleton>({
    content_type: 'lesson',
    // select: 'fields.slug'
  });
  return lessons.items.map((lesson) => ({
    slug: lesson.fields.slug,
  }));
}

type LessonsPageProps = {
  params: {
    slug: string;
  };
};

const fetchLessonPost = async (slug: string): Promise<LessonItem> => {
  const queryOptions = {
    content_type: 'lesson',
    'fields.slug[match]': slug,
  };
  const queryResult = await client.getEntries(queryOptions);
  return queryResult.items[0];
};

export default async function LessonsPage(props: LessonsPageProps) {
  const { params } = props;
  const { slug } = params;

  const lesson = await fetchLessonPost(slug);
  const { title, date, lessonContent } = lesson.fields;

  return (
    <main className="flex min-h-screen justify-center p-24">
      <div className="max-w-2xl">
        <h1>{title}</h1>
        {documentToReactComponents(lessonContent)}
        <p className="mb-6 text-slate-400">
          Posted on{' '}
          {new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
      </div>
    </main>
  );
}
