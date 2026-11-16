type ValorClase = string | false | null | undefined

/** Une nombres de clase ignorando los valores vacíos. */
export function clases(...valores: ValorClase[]): string {
  return valores.filter(Boolean).join(' ')
}
