'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import {
  Button,
  Checkbox,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input
} from '@/components/ui'
import { courseCategories } from '@/config'

const CourseSchema = z.object({
  title: z.string().min(2, { message: 'Minimo 2 caracteres' }),
  courseId: z
    .string()
    .min(2, { message: 'Minimo 2 caracteres' })
    .refine((value) => !value.includes(' '), { message: 'No puede incluir espacios' }),
  categories: z
    .array(z.string())
    .refine((value) => value.some((item) => item), { message: 'Debe seleccionar al menos una categoria' })
})

export const CreateCourseForm = () => {
  const form = useForm<z.infer<typeof CourseSchema>>({
    resolver: zodResolver(CourseSchema),
    defaultValues: {
      title: '',
      courseId: '',
      categories: []
    }
  })

  const onSubmit = (data: z.infer<typeof CourseSchema>) => {
    console.log(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 tablet:w-2/3">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Titulo del curso</FormLabel>
              <FormControl>
                <Input placeholder="Curso de ..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="courseId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ID del curso (Youtube Playlist Id)</FormLabel>
              <FormControl>
                <Input placeholder="PL42UNLc8e48R..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="categories"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-base">Categorias del curso</FormLabel>
              </div>
              {courseCategories.map((item) => (
                <FormField
                  key={item.slug}
                  control={form.control}
                  name="categories"
                  render={({ field }) => {
                    return (
                      <FormItem key={item.slug} className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item.slug)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item.slug])
                                : field.onChange(field.value?.filter((value) => value !== item.slug))
                            }}
                          />
                        </FormControl>
                        <FormLabel className="text-sm font-normal">{item.label}</FormLabel>
                      </FormItem>
                    )
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Crear Curso</Button>
      </form>
    </Form>
  )
}
