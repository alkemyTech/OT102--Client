import * as Yup from 'yup'

const ActivitySchema = Yup.object().shape({
  name: Yup.string()
    .required('Nombre es obligatorio')
    .min(3, 'El nombre debe tener mas de dos caracteres')
    .max(255, 'Demasiado largo!'),
})

const CategorySchema = Yup.object().shape({
  categoryName: Yup.string()
    .required('Nombre es obligatorio')
    .min(3, 'El nombre debe tener mas de dos caracteres')
    .max(255, 'Demasiado largo!'),
  description: Yup.string()
    .required('La descripción es obligatoria')
    .min(3, 'La descripción debe tener mas de dos caracteres'),
})

const NewsSchema = Yup.object().shape({
  name: Yup.string()
    .required('Nombre es obligatorio')
    .min(3, 'El nombre debe tener mas de dos caracteres')
    .max(255, 'Demasiado largo!'),
})

const TestimonialSchema = Yup.object().shape({
  name: Yup.string()
    .required('Nombre es obligatorio')
    .min(3, 'El nombre debe tener mas de dos caracteres')
    .max(255, 'Demasiado largo!'),
})

export {
  ActivitySchema, CategorySchema, NewsSchema, TestimonialSchema,
}
