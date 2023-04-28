export const FormatMinutes = (time: number) => {
  const minutes = Math.floor(time / 60000); // converte para minutos
  const seconds = Math.floor((time % 60000) / 1000); // calcula os segundos restantes

  // adiciona um zero na frente do número caso ele seja menor que 10
  const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

  return `${formattedMinutes}:${formattedSeconds}`;
};
