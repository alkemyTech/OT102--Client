import * as Yup from 'yup'

const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/gif', 'image/png']

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

const TestimonialSchema = Yup.object().shape({
  name: Yup.string()
    .required('Nombre es obligatorio')
    .min(3, 'El nombre debe tener mas de dos caracteres')
    .max(255, 'Demasiado largo!'),
  image: Yup.string()
    .test(
      'fileFormat',
      'Extension invalida. El archivo debe ser jpg/jpeg/gif/png',
      (value) => value && SUPPORTED_FORMATS.includes(value.type),
    ),
})

export { ActivitySchema, CategorySchema, TestimonialSchema }
