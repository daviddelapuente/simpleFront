
export function emailValidator(email) {
    const re = /\S+@\S+\.\S+/
    if (!email || email.length <= 0) return "El email no puede estar vacío."
    if (!re.test(email)) return 'Ingresa un email valido'
    return ''
  }