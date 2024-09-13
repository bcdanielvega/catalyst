import { TypeLessonSkeleton } from "./types";
import { Entry } from "contentful";
import { Document as RichTextDocument } from '@contentful/rich-text-types'
import contentfulClient from './contentfulClient'
import { ContentImage, parseContentfulContentImage } from './contentImage'

type LessonEntry = Entry<TypeLessonSkeleton, undefined, string>

// Our simplified version of a Lesson.
// We don't need all the data that Contentful gives us.
export interface Lesson {
	title: string
	slug: string
    author: string
    date: string
	lessonContent: RichTextDocument | null
    lessonVideo: ContentImage | null
	image: ContentImage | null
}

// A function to transform a Contentful blog post
// into our own Lesson object.
export function parseContentfulLesson(lessonEntry?: LessonEntry): Lesson | null {
	if (!lessonEntry) {
		return null
	}

	return {
		title: lessonEntry.fields.title || '',
		slug: lessonEntry.fields.slug,
        author: lessonEntry.fields.author || '',
        date: lessonEntry.fields.date || '',
		lessonContent: lessonEntry.fields.lessonContent || null,
        lessonVideo: parseContentfulContentImage(lessonEntry.fields.lessonVideo),
		image: parseContentfulContentImage(lessonEntry.fields.image),
	}
}

// A function to fetch all lessons.
// Optionally uses the Contentful content preview.
interface FetchLessonsOptions {
	preview: boolean
}
export async function fetchLessons({ preview }: FetchLessonsOptions): Promise<Lesson[]> {
	const contentful = contentfulClient({ preview })

	const lessonsResult = await contentful.getEntries<TypeLessonSkeleton>({
		content_type: 'lesson',
        include: 2,
		order: ['fields.title'],
	})

	return lessonsResult.items.map((lessonEntry) => parseContentfulLesson(lessonEntry) as Lesson)
}

// A function to fetch a single lesson by its slug.
// Optionally uses the Contentful content preview.
interface FetchLessonOptions {
	slug: string
	preview: boolean
}
export async function fetchLesson({ slug, preview }: FetchLessonOptions): Promise<Lesson | null> {
	const contentful = contentfulClient({ preview })

	const lessonResult = await contentful.getEntries<TypeLessonSkeleton>({
		content_type: 'lesson',
		'fields.slug': slug,
		include: 2,
	})

	return parseContentfulLesson(lessonResult.items[0])
}
