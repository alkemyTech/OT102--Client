import S3 from 'react-aws-s3'

const config = {
  bucketName: process.env.REACT_APP_AWS_S3_BUCKET,
  dirName: process.env.REACT_APP_AWS_S3_DIRNAME,
  region: process.env.REACT_APP_AWS_S3_REGION,
  accessKeyId: process.env.REACT_APP_AWS_S3_KEY,
  secretAccessKey: process.env.REACT_APP_AWS_S3_SECRET,
  s3Url: process.env.REACT_APP_AWS_S3_URL,
}

const ReactS3Client = new S3(config)
/**
 * Accepts a file to be sent to AWS S3.
 * @async
 * @param {*} file
 * @return Returns the URL where the file is located
 */

// eslint-disable-next-line consistent-return
const imgUploadService = async (file) => {
  const uuid = crypto.randomUUID() // Generate a Universally Unique Identifier.
  const fileNameArr = file.name.split('.') // Split the file name into arrays when it finds '.'
  const fileExtension = fileNameArr[fileNameArr.length - 1] // Extract just the file extension.
  const uniqueFileName = `${uuid}.${fileExtension}` // Create the new Unique filename.
  try {
    const upload = await ReactS3Client.uploadFile(file, uniqueFileName)
    if (upload) {
      return upload.location
    }
  } catch (error) {
    throw new Error(error.message)
  }
}

const uploadImage = async (values) => {
  const uploadedImage = await imgUploadService(values)
  return uploadedImage
}

export { imgUploadService, uploadImage }
