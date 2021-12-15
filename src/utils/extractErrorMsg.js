export default function extractErrorMsg(error) {
  if (typeof error === 'string') return error
  if (typeof error === 'object' && Array.isArray(error.errors)) return error.errors.map((e) => e.msg).join()
  if (error.message) return error.message
  return error.toString()
}
