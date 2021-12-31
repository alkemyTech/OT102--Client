import * as Yup from 'yup'

const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png', 'image/gif']

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

const welcomeTextSchema = Yup.object().shape({
  welcomeText: Yup.string()
    .required('Nombre es obligatorio')
    .min(20, 'El nombre debe tener mas de 20 caracteres'),
})

const slideSchema = Yup.object().shape({
  text: Yup.string()
    .required('El texto es obligatorio')
    .min(10, 'El texto debe tener mas de 10 caracteres'),
  image: Yup.mixed()
    .nullable()
    .required()
    .test(
      'FILE_SIZE',
      'El archivo es muy grande',
      (value) => !value || (value && value.size <= 1024 * 1024),
    )
    .test(
      'FILE_FORMAT',
      'El formato del archivo no esta soportado',
      (value) => !value || (value && SUPPORTED_FORMATS.includes(value.type)),
    ),
})

const EditUserSchema = Yup.object({
  firstName: Yup.string().required('El nombre es obligatorio'),
  lastName: Yup.string().required('El apellido es obligatorio'),
  roleId: Yup.string().required('Debes seleccionar un rol'),
})

export {
  ActivitySchema,
  CategorySchema,
  NewsSchema,
  TestimonialSchema,
  welcomeTextSchema,
  slideSchema,
  EditUserSchema,
}
