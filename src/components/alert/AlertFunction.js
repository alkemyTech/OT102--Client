import Swal from 'sweetalert2'
import './Alert.css'

export default async function AlertFunction({
  title = '',
  message = '',
  icon = '',
  cancelbtn = false,
  onConfirm = () => {},
  onCancel = () => {},
}) {
  Swal.fire({
    position: 'center',
    padding: '1rem 2rem',
    confirmButtonColor: '#8DCAFF',
    cancelButtonColor: '#EC4C4C',
    title,
    text: message,
    icon,
    showCancelButton: cancelbtn,
    allowOutsideClick: !cancelbtn, // If cancel button is displayed, do not allow outside click.
    backdrop: !cancelbtn,
  }).then((result) => {
    if (result.isConfirmed) {
      onConfirm()
    }
    if (result.isDenied) {
      onCancel()
    }
  })
}
