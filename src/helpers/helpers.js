export default function FormatTime(timeOfTracks) {
  const minutes = Math.floor(timeOfTracks / 60)
  const seconds = Math.floor(timeOfTracks % 60)
  const formattedSeconds = seconds.toString().padStart(2, '0')
  return `${minutes}:${formattedSeconds}`
}
