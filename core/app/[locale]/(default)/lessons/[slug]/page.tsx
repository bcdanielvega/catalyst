import { Metadata, ResolvingMetadata } from 'next';
import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';
import { fetchLesson, fetchLessons } from '~/src/contentful/lessons';
import Link from 'next/link';
import RichText from '~/src/contentful/RichText';

interface LessonPageParams {
  slug: string;
}

interface LessonPageProps {
  params: LessonPageParams;
}

// Tell Next.js about all our Lessons so
// they can be statically generated at build time.
export async function generateStaticParams(): Promise<LessonPageParams[]> {
  const lessons = await fetchLessons({ preview: false });

  return lessons.map((post) => ({ slug: post.slug }));
}

// For each lesson, tell Next.js which metadata
// (e.g. page title) to display.
export async function generateMetadata(
  { params }: LessonPageProps,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const lesson = await fetchLesson({ slug: params.slug, preview: draftMode().isEnabled });

  if (!lesson) {
    return notFound();
  }

  return {
    title: lesson.title,
  };
}

// The actual LessonPage component.
async function LessonPage({ params }: LessonPageProps) {
  // Fetch a single blog post by slug,
  // using the content preview if draft mode is enabled:
  const lesson = await fetchLesson({ slug: params.slug, preview: draftMode().isEnabled });

  if (!lesson) {
    // If a blog post can't be found,
    // tell Next.js to render a 404 page.
    return notFound();
  }

  return (
    <main className="p-[6vw]">
      <Link href="/">← Posts</Link>
      <div className="prose mt-8 border-t pt-8">
        {/* Render the blog post image */}
        {lesson.image && (
          <img
            src={lesson.image.src}
            // Use the Contentful Images API to render
            // responsive images. No next/image required:
            srcSet={`${lesson.image.src}?w=300 1x, ${lesson.image.src} 2x`}
            width={300}
            height={300}
            alt={lesson.image.alt}
          />
        )}

        {/* Render the blog post title */}
        <h1>{lesson.title}</h1>

        {/* Render the blog post body */}
        <RichText document={lesson.lessonContent} />
      </div>
    </main>
  );
}

export default LessonPage;
