export const getData = () => {
    const now = new Date()
    const hora = String(now.getHours()).padStart(2, "0")
    const minuto = String(now.getMinutes()).padStart(2, "0")
    const segundos = String(now.getSeconds()).padStart(2, "0")
    const time = `${hora}:${minuto}:${segundos}`
    return time
}